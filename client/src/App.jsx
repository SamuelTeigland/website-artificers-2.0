import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPage from './PrivacyPage';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/privacy" element={<PrivacyPage />} />
            </Routes>
        </BrowserRouter>
    )
}