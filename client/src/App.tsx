import './App.scss';
import Main from './components/MainComponent';
import Admin from './adminComponents/AdminComponent';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;