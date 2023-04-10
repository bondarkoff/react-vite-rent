import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/ui/header';
import './assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
);
