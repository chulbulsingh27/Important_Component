import React from 'react';
import { MdOutlineEdit } from "react-icons/md";

export default function Form2() {
  return (
    <div className='flex  -ml-[32px] my-10 h-[500px] '>
      <div className='ml-1  w-full '>
        <div className='flex justify-between items-center  py-0'>
          <div className='justify-start flex space-x-1 '>

            <div className='py-1'> <MdOutlineEdit size="1.40rem" /></div>
            <h3 className='pb-4 font-semibold opacity-60 text-lg left-0'>Create Ticket</h3>
          </div>
          <button className='px-10 py-2 border border-[#3e0341] text-[#3e0341] mb-3 rounded-md text-sm'>Update Ticket</button>
        </div>
        <div className='bg-white w-[1000px] h-[400px]'>


          <div className='py-4 opacity-70 px-8 space-y-3'>
            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="block text-sm text-gray-700">Category</label>
              <select id="name" placeholder='-Select-' class="mt-2 py-1 border border-black p-2 block xl:text-xl  border-black-400  px-36 rounded bg-white"></select>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="block text-sm  text-gray-700">Sub-Category</label>
              <select id="name" placeholder='-Select-' class="mt-2 py-1 border border-black p-2  xl:text-xl  border-black-400  px-36 rounded bg-white "></select>
            </div>

            <div class="col-span-6 sm:col-span-3 ">
              <label for="last_name" class="block text-sm  text-gray-700">Issue</label>
              <textarea type="text" placeholder='...write here...' class="mt-2 py-1 border border-black  bg-white block  h-20 xl:text-xl  border-black-400  rounded px-6"></textarea>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="block text-sm  text-gray-700">Priority</label>
              <select id="name" class="mt-2 py-1 border border-black p-2 bg-white block xl:text-xl    px-36 rounded"></select>
            </div>
          </div>
          <div className='w-[1000px] h-[400px]'>
            <div className="flex justify-end space-x-2  py-14">
              <div className="  text-[#3e0341] ">
                <button className='px-7 py-2 border border-[#57045c] rounded-md'>Cancel</button>
              </div>
              <div className=" right-0 text-white">
                <button className='bg-[#57045c] px-7 py-2 rounded-md'>Submit</button>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
