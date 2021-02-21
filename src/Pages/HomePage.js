import React from 'react';

const HomePage = () => {
    return (<div className="homepage page">
        <div className="bio content-block">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="Nikzt's Logo" />
            <h2>
                here I draw
                </h2>
        </div>
    </div>);
}

export default HomePage;