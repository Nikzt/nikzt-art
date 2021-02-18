import React from 'react';

class CommissionsPage extends React.Component {

    render() {
        return (
            <div className="commissions-page">
                <h1>Commissions</h1>
                <h2>Character Art (Full Body) - $35</h2>

                <p>4 sketches of the head</p>
                <p>2 sketches of body / outfit</p>
                <p>1 full color drawing.</p>
                <p>Add background: + $30</p>

                <h2>Character Art (Profile) $15</h2>

                <p>4 sketches of the head</p>
                <p>1 full color drawing of the head/shoulders</p>
                p
                <h2>Storyboard Sketches - $10</h2>

                <p>Rough sketch of a scene with 2 characters. </p>
                <ul>
                    <li>+$2 for each additional character</li>
                </ul>

                <h2>Full Scene - $60</h2>

                <p>2 Characters and background with clean line art.</p>
                <ul>
                    <li>+$40 for color</li>
                    <li>+$20 for each additional character</li>
                </ul>
            </div>
        );
    }
}

export default CommissionsPage;