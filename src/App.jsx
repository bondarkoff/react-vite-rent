import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Privacy from './components/pages/privacy/Privacy';
import Terms from './components/pages/terms/Terms';
import AppContext from './context';

const Home = lazy(() => import('./components/pages/home/Home'));
const Favorite = lazy(() => import('./components/pages/favorite/Favorite'));
const Settings = lazy(() => import('./components/pages/settings/Settings'));
const Profile = lazy(() => import('./components/pages/profile/Profile'));
const Notifications = lazy(() => import('./components/pages/notifications/Notifications'));
const NotFound = lazy(() => import('./components/pages/notFound/NotFound'));
const CarDetails = lazy(() => import('./components/pages/carDetails/CarDetails'));

function App() {
    const [items, setItems] = React.useState([]);
    const [favorite, setFavorite] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [itemsResponse, favoriteResponse] = await Promise.all([
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/items'),
                    axios.get('https://643a8ef1bd3623f1b9b619da.mockapi.io/favorites'),
                ]);

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

    return (
        <AppContext.Provider value={{ items, favorite, onAddToFavorite }}>
            <Suspense>
                <Routes>
                    <Route
                        path='/'
                        exact
                        element={
                            <Home
                                items={items}
                                favorite={favorite}
                                onAddToFavorite={onAddToFavorite}
                            />
                        }
                    />
                    <Route path='/' exact element={<CarDetails items={items} />} />
                    <Route path='/favorite' exact element={<Favorite items={favorite} />} />
                    <Route path='/settings' exact element={<Settings />} />
                    <Route path='/profile' exact element={<Profile />} />
                    <Route path='/notifications' exact element={<Notifications />} />
                    <Route path='/privacy' exact element={<Privacy />} />
                    <Route path='/terms' exact element={<Terms />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </AppContext.Provider>
    );
}

export default App;
