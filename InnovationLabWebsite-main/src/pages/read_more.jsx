import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ReadMoreProject from '../components/read-more-project';

const ReadMore = () => {
    return (
      <div>
        <Header/>
        <main>   
          <ReadMoreProject />
        </main>
        <Footer/>
      </div>
    );
  };
  
export default ReadMore;

