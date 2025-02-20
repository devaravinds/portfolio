import React from 'react';
import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Home from './components/Home';


const App = () => {
    return <Home />;
};

export default App;