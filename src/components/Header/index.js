import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <h1 className="page-name">Clicky Game</h1>
            <h1 className="instructions">Click an image to begin!</h1>
            <h1 className="score">Score: </h1>
            
            <h1 className="best-score">Best Score: </h1>
        </div>
    );
};

export default Header;