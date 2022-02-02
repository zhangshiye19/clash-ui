import logo from './logo.svg';
import './App.css';
import WMain from './views/WMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import General from './views/General';
import Proxies from './views/Proxies';
import Settings from './views/Settings';
import Connect from './views/Connect';
import About from './views/About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<WMain />} >
                    <Route path={'general'} element={<General />} />
                    <Route path={'proxies'} element={<Proxies />} />
                    <Route path={'settings'} element={<Settings />} />
                    <Route path={'connect'} element={<Connect />} />
                    <Route path={'about'} element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
