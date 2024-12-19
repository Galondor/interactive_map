import React, { useState, useEffect } from 'react';

const Marker = ({ top, left, locName, locDesc, locGov, locPop, icon }) => {
    const [showTextBox, setShowTextBox] = useState(false);
    const [isZoomedIn, setIsZoomedIn] = useState(false);

    // useEffect(() => {
    //     const checkZoom = () => {
    //         setIsZoomedIn(window.devicePixelRatio > 1);
    //     };

    //     window.addEventListener('resize', checkZoom);
    //     checkZoom();

    //     return () => {
    //         window.removeEventListener('resize', checkZoom);
    //     };
    // }, []);

    const handleClick = () => {
        setShowTextBox(!showTextBox);
    };

    if (isZoomedIn) {
        return null;
    }

    return (
        <>
            <figure className='marker_wrapper'>
                <img className="marker" src={icon} onClick={handleClick} style={{ top: top, left: left }} />
                {showTextBox && (
                    <div className="marker_desc" style={{ top: top, left: left, position: 'absolute' }}>
                        <h1>{locName}</h1>
                        <h2>{locGov}</h2>
                        <h3>{locPop}</h3>
                        <p>{locDesc}</p>
                    </div>
                )}
            </figure>
        </>
    );
};

export default Marker;