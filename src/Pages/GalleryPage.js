import React from 'react';

const GalleryPage = () => {
    const openSecretLink = () => {
        window.open("http://trailless.io/download/603bdc9698b39e1f4f13b060");
    }
    return (<div className="gallery-page page">
        <h1>Gallery</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/images/witch-sketch1.png`}
                alt="witch sketch" 
                onClick={openSecretLink}/>
        </div>);
}

export default GalleryPage;