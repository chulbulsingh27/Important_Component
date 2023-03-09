import React from 'react';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTicket } from "react-icons/tb";

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-white py-2 border border-b-black '>
      <h2 className='px-[200px] text-2xl'>HealthWorksAI</h2>
      <div className=' flex space-x-5 opacity-60 mr-[80px]'>
        <button className='border border-black rounded px-24 py-1 opacity-60'>Search</button>
        <MdOutlineNotificationsNone size="1.60rem" />
        <TbTicket size="1.60rem" />
        <AiOutlineQuestionCircle size="1.60rem" />
      </div>
    </div>
  )
}
