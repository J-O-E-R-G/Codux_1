import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // This is your HomePage
import './index.css';

// Import your other pages (components)
import GamesPage from './Games';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/games/:category" element={<GamesPage />} />
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

