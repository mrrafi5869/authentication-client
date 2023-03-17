import React from 'react';
import logo from '../assets/image/Subtract.png'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;