import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClientAccountPage from './pages/ClientAccountPage';


export const myRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/account/:clientId" element={<ClientAccountPage />} />
            </Routes>
        </Router>
    );
}
