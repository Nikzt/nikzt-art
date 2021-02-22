import React from 'react';

const GalleryPage = () => {
    return (<div className="gallery-page page">
        <h1>Gallery</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/images/witch-sketch1.png`}
                alt="witch sketch" />
        </div>);
}

export default GalleryPage;