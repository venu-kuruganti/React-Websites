import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

export function Home() {
    return (
        <div>
            <h1>BMW Z4 Lovers!</h1>
            <br /><br /><br />
            <MainMenu /> 
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About BMW Z4 Lovers!</h1>
            <br /><br /><br />
            <MainMenu />

        </div>
    );
}

export function ContactUs() {
    return (
        <div>
            <h1>Contact the group BMW Z4 Lovers!</h1>
            <br /><br /><br />
            <MainMenu />
            <br/><br/>
            <p>Write to us at bmwz4lovers@lovelyusers.com </p>
        </div>
    );
}

export function MainMenu() {
    return (
        <div>
            <div className="menu-item">
                <Link to="/">Home</Link>
            </div>
            <div className="menu-item" >
                <Link to="/About">About</Link>
            </div>
            <div className="menu-item">
                <Link to="/ContactUs">Contact Us</Link>
            </div>
        </div>);
    ;
}

