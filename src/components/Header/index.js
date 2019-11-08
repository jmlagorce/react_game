import React from 'react';
import "./style.css"

const Header = (props) => {
    return (
        <div className="header">
            <h2 className="page-name">Clicky Game</h2>
            <h2 className="instructions">Click an image to begin!</h2>
            <h2 className="score">Score: {props.score}</h2>
            
            <h2 className="best-score">Best Score: {props.highScore}</h2>
        </div>
    );
};

export default Header;