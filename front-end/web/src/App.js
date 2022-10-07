
import './App.css';
import { useEffect, useState } from 'react';
import { useLocalState } from './util/useLocalStorage';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard';
import HomePage from './Components/HomePage/homePage';
import Login from './Components/Login/login';
import PrivateRoute from './PrivateRoute/privateRoute';
import AssignmentView from './Components/AssignmentView/assignment'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {





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
