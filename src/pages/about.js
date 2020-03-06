import React from 'react';
import Title from "../components/title"

const About = () => {
    return (
        <div className="inner">
            <Title lineContent="A little about" lineContent2="who I am." />
            <div>
                <p className="info">
                    I consider myself to be extremely fortunate, because my 'job', such as it is, simply
                    entails doing what I love. I call myself a web developer as it's a nice umbrella term
                    for the programmer who specializes in the development of World Wide Web applications.
                </p>
            </div>
        </div>
    );
}

export default About;