import React from 'react';
import '../App.css';
import { Button } from './Button';
import { VideoButton } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>No dejes de crecer</h1>
            <p>¿Qué estás esperando?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Empieza ahora
                </Button>
                <VideoButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Ver trailer <i className='far fa-play-circle' />
                </VideoButton>
            </div> 
        </div>
    )
}

export default HeroSection
