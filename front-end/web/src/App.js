
import './App.css';
import { useEffect, useState } from 'react';
import { useLocalState } from './util/useLocalStorage';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import HomePage from './Components/HomePage/homePage';
import Login from './Components/Login/login';
import PrivateRoute from './PrivateRoute/privateRoute';
import AssignmentView from './Components/AssignmentView/assignment'

function App() {

  const [access_token, setAccess_token] = useLocalState("", "jwt");

  useEffect(() => {

    if (!access_token) {
      const reqBody = {
        "username": "ammar",
        "password": "asdfasdf"
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

  }, [])

  useEffect(() => {
    console.log(access_token);

  }, [access_token])



  return (
    <Routes>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/assignments/:id" element={
        <PrivateRoute>
          <AssignmentView />
        </PrivateRoute>
      }

      />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
