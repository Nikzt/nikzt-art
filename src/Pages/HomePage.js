import React from 'react';

class HomePage extends React.Component {

    render() {
        return (<div className="homepage">
            <div className="bio">
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt="Nikzt's Logo" />
                <h2>
                    here I draw
                </h2>
            </div>
        </div>);
    }
}

export default HomePage;