import React from 'react';
import './submitBtn.css';

const SubmitBtn = props => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        alert("Thank you for reaching out, we'll get back to you as soon as possible.")
    };

    return (
        <input 
            className='btn submit'
            onSubmit={handleSubmit}
            type='submit'
            value={props.value}
        />
    )
    
}

export default SubmitBtn