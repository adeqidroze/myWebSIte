import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClientAccountPage from './pages/ClientAccountPage';


export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:clientId" element={<ClientAccountPage />} />
        </Routes>
    );
}
