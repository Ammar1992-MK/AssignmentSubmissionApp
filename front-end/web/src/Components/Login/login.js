import React, { useState } from 'react';
import { useLocalState } from '../../util/useLocalStorage';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'


const Login = () => {

    const [access_token, setAccess_token] = useLocalState("", "jwt");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

            });
    }


    return (
        <Container className="mt-5">
            <Form.Group>

                <Form.Label htmlFor="username" className="fs-4" >Username</Form.Label>
                <Form.Control
                    size="lg"
                    type="email"
                    id="username"
                    placeholder="alice@gmail.com"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)} />
            </Form.Group>


            <Form.Group className="mt-4">
                <Form.Label htlmFor="password" className="fs-4" >Password</Form.Label>
                <Form.Control
                    size="lg"
                    type="password"
                    id="password"
                    placeholder="Type in password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

            </Form.Group>

            <Row>
                <Col>
                    <Button
                        className="mt-3"
                        variant="primary"
                        id="submit"
                        type="button"
                        size="lg"
                        onClick={() => sendLoginRequest()}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;