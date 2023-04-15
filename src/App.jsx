// TODO:
// 1. Реализовать подгрузку карточек по нажатию на кнопку "Загрузить еще"
// 2. (---DONE---) Реализовать счетчик количества карточек
// 3. Реализовать максимальное количество карточек, которое можно загрузить (8 штук)
// 4. Реализовать кнопку "Загрузить еще", которая будет скрываться, когда карточек больше нет
// 5. Сверстать футер
// 6. React Router основные страницы, Header, Footer, Favorite
// 7. Реализовать добавление и удаление из избранного

import React from 'react';
import axios from 'axios';
import Header from './components/UI/header/Header';
import MainCarCard from './components/mainCarCard/MainCarCard';
import DestinationSwitch from './components/destinationSwitch/DestinationSwitch';
import CarCard from './components/carCard/CarCard';
import Footer from './components/UI/footer/Footer';

function App() {
    const [items, setItems] = React.useState([]);
    const [popular, setPopular] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponse] = await Promise.all([
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/items'),
                ]);
                const [popularResponse] = await Promise.all([
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/popular'),
                ]);

                setPopular(popularResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className='container'>
                <MainCarCard />
                <DestinationSwitch />
                <div className='mt-46'>
                    <h2 className='title'>Popular Car</h2>
                    <div className='carCards mt-20'>
                        {popular.map(item => (
                            <CarCard
                                title={item.title}
                                key={item.id}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                capacity={item.capacity}
                                body={item.body}
                                fuelTank={item.fuelTank}
                                gearbox={item.gearbox}
                            />
                        ))}
                    </div>
                    <h2 className='title mt-42'>Recommendation Car</h2>
                    <div className='carCards mt-20'>
                        {items.map(item => (
                            <CarCard
                                title={item.title}
                                key={item.id}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                capacity={item.capacity}
                                body={item.body}
                                fuelTank={item.fuelTank}
                                gearbox={item.gearbox}
                            />
                        ))}
                    </div>
                    <div className='more'>
                        <div></div>
                        <button className='button'>Show more car</button>
                        <div className='count'>{items.length} Car</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
