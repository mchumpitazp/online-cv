import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './components/MainComponent';
import Admin from './adminComponents/AdminComponent';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/admin/*" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;