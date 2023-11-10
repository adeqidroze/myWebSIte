import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { MyRoutes } from './Routes.js';


const App = () => {
    return (
        <>
            <Header />
            <MyRoutes />
            <Footer />
        </>
        
    );
};

export default App;