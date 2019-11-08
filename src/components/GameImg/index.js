import React from 'react';
import './style.css'

const Gameimg = (props) => {
    return (
        
            <div className="card">
                <img onClick={props.myFunc} data-id={props.image.id} className="card-img-top" src={props.image.image} alt=""></img>
                
            </div>

        
        
        
    );
};

export default Gameimg;