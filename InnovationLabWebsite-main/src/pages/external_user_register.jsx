import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ExternalUserRegisterForm from '../components/external-user-register-form';

const ExternalUserRegistration = () => {
    return (
      <div>
        <Header />
        <main>   
          <ExternalUserRegisterForm />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default ExternalUserRegistration;

