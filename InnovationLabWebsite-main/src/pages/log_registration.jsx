import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import LogRegisterForm from '../components/log-register-form';

const LogRegistration = () => {
    return (
      <div>
        <Header />
        <main>   
          <LogRegisterForm />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default LogRegistration;

