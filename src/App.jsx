import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Privacy from './components/pages/privacy/Privacy';
import Terms from './components/pages/terms/Terms';

const Home = lazy(() => import('./components/pages/home/Home'));
const Favorite = lazy(() => import('./components/pages/favorite/Favorite'));
const Settings = lazy(() => import('./components/pages/settings/Settings'));
const Profile = lazy(() => import('./components/pages/profile/Profile'));
const Notifications = lazy(() => import('./components/pages/notifications/Notifications'));
const NotFound = lazy(() => import('./components/pages/notFound/NotFound'));
const CarDetails = lazy(() => import('./components/pages/carDetails/CarDetails'));

function App() {
    const [items, setItems] = React.useState([]);
    const [popular, setPopular] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = e => {
        setSearchValue(e.target.value);
    };

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
        <Suspense>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={
                        <Home
                            items={items}
                            popular={popular}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                        />
                    }
                />
                <Route path='/' exact element={<CarDetails items={items} />} />
                <Route path='/favorite' exact element={<Favorite />} />
                <Route path='/settings' exact element={<Settings />} />
                <Route path='/profile' exact element={<Profile />} />
                <Route path='/notifications' exact element={<Notifications />} />
                <Route path='/privacy' exact element={<Privacy />} />
                <Route path='/terms' exact element={<Terms />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
