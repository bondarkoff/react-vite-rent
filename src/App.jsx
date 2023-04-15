import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorite from './components/pages/Favorite';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Notifications from './components/pages/Notifications';

function App() {
    return (
        <Routes>
            <Route path='' exact element={<Home />} />
            <Route path='favorite' exact element={<Favorite />} />
            <Route path='settings' exact element={<Settings />} />
            <Route path='profile' exact element={<Profile />} />
            <Route path='notifications' exact element={<Notifications />} />
        </Routes>
    );
}

export default App;
