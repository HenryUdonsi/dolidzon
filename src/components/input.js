import React from 'react';
import './input.css';

const Input = props => {
    return (
        <div className='wrapper'>
            <span className='label'>{props.label}</span>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default Input;