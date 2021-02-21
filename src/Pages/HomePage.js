import React from 'react';

class HomePage extends React.Component {

    render() {
        return (<div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="Nikzt's Logo"></img>
        </div>);
    }
}

export default HomePage;