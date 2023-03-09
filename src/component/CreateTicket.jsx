import React from 'react';
import { BsPersonPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineEdit } from "react-icons/md";
import { TbSquareCheck } from "react-icons/tb";
import { MdOutlinePreview } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTicket } from "react-icons/tb";

export default function CreateTicket() {
    return (
        <div className="h-[1000px] w-full bg-black  py-0 flex items-center justify-center"  >
            <div className='w-[1400px] h-[800px] rounded flex bg-[#eeeee4]'>
                <div className='flex-0.3 bg-gray-600 h-full w-16'>
                    <BsPersonPlus />
                    *
                    *
                    *
                </div>
                <div className='flex-0.7 w-full h-[60px]'>
                    <div className='px-16 py-3 flex justify-between bg-white'>
                        <h2 className='text-2xl'>Healthworks AI</h2>
                        {/* <button className='border rounded px-24 py-1'>Search</button> */}
                        <div className=' flex space-x-5 opacity-60'>
                            <button className='border border-black rounded px-24 py-1 opacity-60'>Search</button>
                            <MdOutlineNotificationsNone size="1.60rem" />
                            <TbTicket size="1.60rem" />
                            <AiOutlineQuestionCircle size="1.60rem" />
                        </div>
                    </div>
                    <div className='flex mx-16 my-10 h-[500px]'>
                        <div className='mr-10 w-[300px] bg-white h-[180px]'>

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

                            {/* <div>
                                <p className='px-4 py-3'>Create Ticket</p>
                                <p className='px-4 py-3'>Create Ticket</p>
                                <p className='px-4 py-3'>Create Ticket</p>
                                <p className='px-4 py-3'>Create Ticket</p>
                            </div> */}
                            {/* <div className='py-6 ml-8'>go back to lobby </div> */}
                            <div className="relative justify start text-sm flex  items-center text-black py-6 ml-11">
                                <div className='ml-3 opacity-60 text-[#56077a]'> <MdKeyboardArrowLeft size="1.30rem" /></div>
                                <p className='ml-1 text-sm opacity-70 text-[#56077a]'>go back to lobby </p>
                            </div>

                        </div>



                        <div className='ml-1 bg-[#eeeee4] w-full'>
                            <div className='flex justify-between items-center bg-[#eeeee4]'>
                                <div className='justify-start flex space-x-1'>

                                    <div className='py-3'> <MdOutlineEdit size="1.40rem" /></div>
                                    <h3 className='py-2 font-semibold opacity-60 text-lg left-0'>Create Ticket</h3>
                                </div>
                                <button className='px-10 py-2 border border-[#56077a] text-[#56077a] mb-3 rounded-md text-sm'>Update Ticket</button>
                            </div>
                            <div className='bg-white w-full h-[400px]'>
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


                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mr-16 ">
                        <div className="  text-[#56077a]">
                            <button className='px-7 py-2 border border-[#56077a] rounded-md'>Cancel</button>
                        </div>
                        <div className=" right-0 text-white">
                            <button className='bg-[#56077a] px-7 py-2 rounded-md'>Submit</button>
                        </div>
                    </div>
                    <div className='py-5 bg-stone-300 flex justify-between mt-14'>
                        <h2 className='ml-[35%] opacity-60 text-sm'><code>Copyright @2023 HealthWorksAI, All Rights Reserved.</code></h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

