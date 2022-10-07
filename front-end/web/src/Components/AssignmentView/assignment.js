import React, { useState, useEffect } from 'react';
import { useLocalState } from '../../util/useLocalStorage'
import fetchService from '../../Services/httpService';

const AssignmentView = () => {
    const assignmentId = window.location.href.split("/assignments/")[1];

    const [assignemnt, setAssignment] = useState({
        githubUrl: "",
        branch: ""
    });

    const [jwt, setJwt] = useLocalState("", "jwt");

    const updateAssignment = (key, value) => {
        const newAssignment = { ...assignemnt }
        newAssignment[key] = value;
        setAssignment(newAssignment);
    }

    const saveAssignment = () => {

        fetchService(`/api/assignments/${assignmentId}`, "PUT", jwt, assignemnt)
            .then((assignemntData) => {
                setAssignment(assignemntData);
            })
    }

    useEffect(() => {

        fetchService(`/api/assignments/${assignmentId}`, "GET", jwt)
            .then((assignmentData) => {
                if (assignmentData.branch === null) assignmentData.branch = "";
                if (assignmentData.githubUrl === null) assignmentData.githubUrl = "";
                setAssignment(assignmentData)

            });

    }, [])

    return (
        <div>
            <h1> Assignemnt {assignmentId}</h1>
            {assignemnt ? (
                <>
                    <h2>Status : {assignemnt.status}</h2>
                    <h3>GitHub URL : <input type="url" id="gitHubUrl" onChange={(e) => updateAssignment("githubUrl", e.target.value)} value={assignemnt.githubUrl} /></h3>
                    <h3>Branch : <input type="text" id="branch" onChange={(e) => updateAssignment("branch", e.target.value)} value={assignemnt.branch} /></h3>
                    <button onClick={() => saveAssignment()}>Submit Assignment</button>
                </>
            ) : (<></>)}
        </div>
    );
};

export default AssignmentView;