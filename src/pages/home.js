import React from 'react';
import Title from '../components/title'

const Home = () => {
    return (
        <div className="inner">
            <Title lineContent="This is the" lineContent2="home page" />
            <div>
                <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo a augue porttitor pellentesque
                    non et est. Duis placerat ultrices lobortis. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Vestibulum lacus ligula, laoreet quis gravida at, blandit id metus.
                    Pellentesque sit amet ligula quis felis pulvinar varius. In pretium urna eget varius gravida.
                </p>
            </div>
        </div>
    );
}

export default Home;