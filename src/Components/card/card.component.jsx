import React from 'react';

import './card.styles.css';


export const Card = props => (
    <div className='card-container'>
        <div className="img-circle">
            <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set3&size=130x130`} />
        </div>
        <h2>{props.robot.name} </h2>
        <p className="email">{props.robot.email}</p>
        <p>{props.robot.address.city}</p>
        <p className="website">{props.robot.website}</p>
    </div>
);