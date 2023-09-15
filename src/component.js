import React from 'react';
import Navbar from "./components/navbar/navbar";
import AppRouter from "./components/AppRouter";
const Component = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default Component;