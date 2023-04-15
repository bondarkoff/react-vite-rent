// TODO:
// 1. Добавить карточки машин в базу данных (mockAPI)
// 2. Добавить базу данных в проект
// 3. Добавить запросы к базе данных
// 4. Добавить получение данных из базы данных
// 5. Добавить отображение данных из базы данных

import React from 'react';
import Header from './components/UI/header';
import MainCarCard from './components/mainCarCard/MainCarCard';
import DestinationSwitch from './components/destinationSwitch/DestinationSwitch';
import CarCard from './components/carCard/CarCard';

function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <MainCarCard />
                <DestinationSwitch />
                <CarCard />
            </div>
        </>
    );
}

export default App;
