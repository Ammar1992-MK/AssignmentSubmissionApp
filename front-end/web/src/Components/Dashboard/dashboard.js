import React, { useState, useEffect } from 'react';
import { useLocalState } from '../../util/useLocalStorage';
import { Link } from 'react-router-dom';
import fetchService from '../../Services/httpService';


const Dashboard = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");

    const [assignments, setAssignment] = useState(null);

    useEffect(() => {

        fetchService("api/assignments", "GET", jwt)
            .then((assignmentsData) => {
                setAssignment(assignmentsData)
            })
    }, [])

    function createAssignment() {

        fetchService("/api/assignments", "POST", jwt)
            .then((assignment) => {
                window.location.href = `/assignments/${assignment.id}`
            });
    }

    return (
        <div style={{ margin: "2em" }}>
            {assignments ? assignments.map(assignment => <div key={assignment.id}>
                <Link to={`/assignments/${assignment.id}`}> Assignment-Id : {assignment.id}</Link>
            </div>) : <></>}
            <button onClick={() => createAssignment()}>Submit new assignment</button>
        </div>
    );
};

export default Dashboard;