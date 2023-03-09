import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Form1 from './Form1';
import Form2 from './Form2';
//import TicketHistoryReport from './TicketHistoryReport';
import TicketHistoryReport from './TicketHistoryReport';
//import Sidebar from './Sidebar';

export default function LobyForm() {
  return (
    <div className='flex  justify-center items-center'>
        <div className='flex w-[1500px] h-[900px] mt-8'>
            <div className='h-full'>
                <Sidebar/>

            </div>
            <div className='bg-gray-200 flex-1 relative'>
                <Header/>
                <div className='flex'>
                    
                </div>
                <div className='flex'>
                    <Form1/>
                    {/* <Form2/> */}
                    <TicketHistoryReport/>

                </div>
                <div className=''>
                    <Footer/> 
                </div>

            </div>
        </div>
    </div>
  )
}
