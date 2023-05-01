import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App/App';

import './assets/styles/global.scss';

import 'css-shortcut';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='*' element={<App />} />
        </Routes>
    </Router>,
);
