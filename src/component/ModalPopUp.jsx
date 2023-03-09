import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineExclamationCircle } from "react-icons/ai"

export default function ModalPopUp() {
  return (
    <div className="h-[1000px] w-full bg-black  py-20 flex items-center justify-center " >

      <div className='w-[600px] h-[300px] bg-slate-100 px-10 py-8 rounded'>
        <div className=' relative justify start text-xl flex  items-center text-black pb-3' >
        <div className=''> <AiOutlineExclamationCircle size="1.64rem" /></div>
          <p className='ml-3'>Error Message</p>
          <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
        </div>
        <hr />
        <div className="py-2 px-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quisquam adipisci incidunt, quis dolore velit aliquam necessitatibus labore rerum ea, praesentium modi doloribus ducimus reprehenderit minima laborum possimus, fuga deleniti.</div>
        <div className="pat">
          <div className='flex justify-center py-5' > <button className='text-white bg-blue-800 px-7 py-2 rounded-md'>Apply</button></div>
        </div>
      </div>
    </div>
  )
}
