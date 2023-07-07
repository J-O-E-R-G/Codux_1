import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Pages/App';
import ErrorPage from './Pages/404';
import './index.css';
import GamesPage from './Pages/Games';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/games/:category" element={<GamesPage />} />
                <Route path="/" element={<App />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
