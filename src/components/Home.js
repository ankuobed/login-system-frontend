import React, { useEffect } from 'react';
import '../App.css';
import RegisterForm from './RegisterForm';

function Home() {
  useEffect(() => {
    document.title = 'Login System'
  });
  
  return (
    <div className='home container'>
      <RegisterForm />
    </div>
  );
}

export default Home;
