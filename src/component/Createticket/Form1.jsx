import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { TbSquareCheck } from "react-icons/tb";
import { MdOutlinePreview } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Form1() {
  return (
    <div className="flex mx-12 my-10 h-[500px]">
      <div className='mr-0 w-[300px] bg-white h-[180px]'>

        <div className="relative justify start text-sm flex  items-center text-black py-4">
          <div className='ml-3'> <MdOutlineEdit size="1.40rem" /></div>
          <p className='ml-1 text-sm opacity-70'>Create Ticket</p>
        </div>
        <div className="relative justify start text-sm flex  items-center text-black py-0 pb-2">
          <div className='ml-3 opacity-60'> <TbSquareCheck size="1.40rem" /></div>
          <p className='ml-1 text-sm opacity-70'>Check Status</p>
        </div>
        <div className="relative justify start text-sm flex  items-center text-black py-2">
          <div className='ml-3 opacity-60'> <MdOutlinePreview size="1.40rem" /></div>
          <p className='ml-1 text-sm opacity-70'>View Tickets</p>
        </div>
        <div className="relative justify start text-sm flex  items-center text-black py-2">
          <div className='ml-3 opacity-60'> <RxCounterClockwiseClock size="1.30rem" /></div>
          <p className='ml-1 text-sm opacity-70'>View Tickets History</p>
        </div>
        <div className="relative justify start text-sm flex  items-center text-black py-6 ml-11">
          <div className='ml-3 opacity-60 text-[#3e0341]'> <MdKeyboardArrowLeft size="1.30rem" /></div>
          <p className='ml-1 text-sm opacity-70 text-[#3e0341]'>go back to lobby </p>
        </div>

      </div>
    </div>
  )
}
