// TODO:
// -- Функционал:
// - Пофиксить все баги
// - Добавить адаптивность
// -- В последнюю очередь:
// - Переписать scss со вложеностью
// - Переименовать .jsx в .js
// - Переименовать все папки в PascalCase?
// - Деплой?
import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import AppContext from './context';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/UI/header/Header';
import Footer from './components/UI/footer/Footer';

const Home = lazy(() => import('./components/pages/home/Home'));
const Favorite = lazy(() => import('./components/pages/favorite/Favorite'));
const Settings = lazy(() => import('./components/pages/settings/Settings'));
const Notifications = lazy(() => import('./components/pages/notifications/Notifications'));
const NotFound = lazy(() => import('./components/pages/notFound/NotFound'));
const CarDetails = lazy(() => import('./components/pages/carDetails/CarDetails'));
const Terms = lazy(() => import('./components/pages/terms/Terms'));
const Privacy = lazy(() => import('./components/pages/privacy/Privacy'));
const Order = lazy(() => import('./components/pages/order/Order'));

function App() {
    const [items, setItems] = React.useState([]);
    const [favorite, setFavorite] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [showFilter, setShowFilter] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponse, favoriteResponse] = await Promise.all([
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/items'),
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/favorites'),
                ]);

                setIsLoading(false);

                setFavorite(favoriteResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Error while loading data');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const onAddToFavorite = async obj => {
        try {
            if (favorite.find(favObj => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://643a8ef1bd3623f1b9b619da.mockapi.io/favorites/${obj.id}`);
                setFavorite(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                const { data } = await axios.post(
                    'https://643a8ef1bd3623f1b9b619da.mockapi.io/favorites',
                    obj,
                );
                setFavorite(prev => [...prev, data]);
            }
        } catch (error) {
            alert('Error while adding to favorite');
            console.error(error);
        }
    };

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    };

    const handleButtonClick = () => {
        setShowFilter(!showFilter);
    };

    return (
        <AppContext.Provider value={{ items, favorite, onAddToFavorite }}>
            <Header
                onChangeSearchInput={onChangeSearchInput}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleButtonClick={handleButtonClick}
                loading={isLoading}
            />
            <Suspense>
                <ScrollToTop />
                <Routes>
                    <Route
                        path='/'
                        exact
                        element={
                            <Home
                                items={items}
                                favorite={favorite}
                                onAddToFavorite={onAddToFavorite}
                                onChangeSearchInput={onChangeSearchInput}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                handleButtonClick={handleButtonClick}
                                isLoading={isLoading}
                                loading={isLoading}
                            />
                        }
                    />
                    <Route
                        path='/:id'
                        exact
                        element={
                            <CarDetails
                                onFavorite={obj => onAddToFavorite(obj)}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path='/favorite' exact element={<Favorite items={favorite} />} />
                    <Route path='/settings' exact element={<Settings />} />
                    <Route path='/notifications' exact element={<Notifications />} />
                    <Route path='/:id/order' exact element={<Order isLoading={isLoading} />} />
                    <Route path='/privacy' exact element={<Privacy />} />
                    <Route path='/terms' exact element={<Terms />} />
                    <Route ScrollRestoration path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer loading={isLoading} />
        </AppContext.Provider>
    );
}

export default App;
