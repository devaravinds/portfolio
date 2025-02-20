import React from 'react';
import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;