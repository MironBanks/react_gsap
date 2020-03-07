import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import Title from '../components/title'

const Home = () => {

    let line3 = useRef(null)

    useEffect(() => {
        gsap.from([line3], 0.8,
            {
                y: 30,
                delay: 1.5,
                ease: "power3.InOut",
                opacity: 0,
                stagger: {
                    amount: 0.6
                }
            })

    }, [])

    return (
        <>
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
            <div ref={el => line3 = el} className="line">
                <img />
            </div>
        </>
    );
}

export default Home;