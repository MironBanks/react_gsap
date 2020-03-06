import React from 'react';
import Title from '../components/title'

const Home = () => {
    return (
        <div className="inner">
            <Title lineContent="miron banks" lineContent2="i build things for the web." />
            <div>
                <p className="info">
                    Hello! I'm Miron, a Front-End developer based in Oslo who enjoys building things that
                    live on the internet. I develop exceptional websites and web apps that provide intuitive,
                    pixel-perfect user interfaces.
                </p>
            </div>
        </div>
    );
}

export default Home;