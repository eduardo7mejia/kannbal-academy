import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import ComoFunciona from '../ComoFunciona';
import HeroSection from '../HeroSection';

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
            <ComoFunciona/>
        </>
    )
}

export default Home;