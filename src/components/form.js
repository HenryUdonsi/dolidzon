import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { email });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="email"
        id="email"
        value={email}
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
        />
    </form>
  );
};

export default Form;
