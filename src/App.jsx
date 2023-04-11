import React from 'react';
import Header from './components/ui/header';
import MainCarCard from './components/mainCarCard/MainCarCard';

function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='wrapper'>
                    <MainCarCard />
                </div>
            </div>
        </>
    );
}

export default App;
