import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPage from './PrivacyPage';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
        </Router>
    )
}