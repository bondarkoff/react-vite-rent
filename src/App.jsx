// TODO:
// 1 - написать destinationSwitch необходимую логику.
// 2 - Создать json файл на сервере с данными для карточек.
// 3 - Добавить карточки с сервера в проект (mockapi или json-server).
// 4 - Сверстать карточки и вывести их на страницу, застилизовать их.
// 5 - Сделать поиск по названию модели машины.
// 6 - Думать что делать дальше

import React from 'react';
import Header from './components/ui/header';
import MainCarCard from './components/mainCarCard/MainCarCard';
import DestinationSwitch from './components/destinationSwitch/DestinationSwitch';

function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <MainCarCard />
                <DestinationSwitch />
            </div>
        </>
    );
}

export default App;
