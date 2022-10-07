import React, { useState, useEffect } from 'react';
import { useLocalState } from '../../util/useLocalStorage';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {

    const [access_token, setAccess_token] = useLocalState("", "jwt");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const sendLoginRequest = () => {

        const reqBody = {
            username: username,
            password: password,
        }


        fetch("api/auth/login", {

            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
            .then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {

                const token = headers.get("authorization");
                setAccess_token(token);
                //navigate("/dashboard");

            });
    }

    return (
        <Container className="mt-5 justify-content-center align-items-center">

            <Row className="justify-content-center align-items-center">
                <Col md="8" lg="6">
                    <Form.Group controlId="username" className="">
                        <Form.Label className="fs-4" >Username</Form.Label>
                        <Form.Control
                            size="lg"
                            type="email"
                            placeholder="alice@gmail.com"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>


            <Row className="justify-content-center align-items-center">
                <Col md="8" lg="6">
                    <Form.Group className="mt-4" controlId="password">
                        <Form.Label className="fs-4" >Password</Form.Label>
                        <Form.Control
                            size="lg"
                            type="password"
                            placeholder="Type in password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                    </Form.Group>
                </Col>
            </Row>


            <Row className="justify-content-center align-items-center">
                <Col md="8" lg="6" className="mt-3 d-flex flex-column gap-5 flex-md-row justify-content-between" >
                    <Button
                        variant="primary"
                        id="submit"
                        type="button"
                        size="lg"
                        onClick={() => sendLoginRequest()}>Login</Button>

                    <Button
                        variant="secondary"
                        type="button"
                        size="lg"
                        onClick={() => window.location.href = "/"}>Exit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;