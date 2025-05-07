import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TAScheduleTable from '../components/ta_schedule_table';

const TASchedule = () => {
    return (
      <div>
        <Header />
        <main>   
          <TAScheduleTable />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default TASchedule;

