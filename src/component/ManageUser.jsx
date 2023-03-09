import React from 'react';
import { BsPersonPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdVpnLock } from "react-icons/md";
import { MdOutlineDataUsage } from "react-icons/md";
import { MdLabelOutline } from "react-icons/md";
import { BsCloudArrowUp } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTicket } from "react-icons/tb";
import { BiPlus } from "react-icons/bi";
import { MdLink } from "react-icons/md";

export default function ManageUser() {
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
                                <div className='ml-3'> <MdVpnLock size="1.40rem" /></div>
                                <p className='ml-1 text-sm opacity-70'>Manage User</p>
                            </div>
                            <div className="relative justify start text-sm flex  items-center text-black py-0 pb-2">
                                <div className='ml-3 opacity-60'> <MdOutlineDataUsage size="1.40rem" /></div>
                                <p className='ml-1 text-sm opacity-70'>Track Page Usage</p>
                            </div>
                            <div className="relative justify start text-sm flex  items-center text-black py-2">
                                <div className='ml-3 opacity-60'> <MdLabelOutline size="1.40rem" /></div>
                                <p className='ml-1 text-sm opacity-70'>Manage Logo</p>
                            </div>
                            <div className="relative justify start text-sm flex  items-center text-black py-2">
                                <div className='ml-3 opacity-60'> <BsCloudArrowUp size="1.30rem" /></div>
                                <p className='ml-1 text-sm opacity-70'>Upload Files</p>
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

                                    <div className='py-3 opacity-50'> <MdVpnLock size="1.40rem" /></div>
                                    <h3 className='py-2 font-semibold opacity-60 text-lg left-0'>Manage User</h3>
                                </div>

                                <div className='ml-96'>
                                    <button className=' flex  py-2   bg-[#eeeaf0] text-[#56077a] mb-3 rounded-md text-sm'> <div className='py-0 mr-4'><MdLink size="1.50rem" /> </div> Invite User </button>
                                </div>

                                <div className=''>
                                    <button className=' flex px-10 py-2   bg-[#56077a] text-[#f5f3f7] mb-3 rounded-md text-sm'> <div className='py-0 mr-4'><BiPlus size="1.50rem" /> </div> Create User </button>
                                </div>


                            </div>
                            <div className='bg-white w-full h-[400px] '>
                                <div className='bg-white w-full h-[400px]  justify-center items-center  '>
                                    <div className='flex  py-2 space-x-20 opacity-40 text-sm'>
                                        <div className='py-4 px-8'>
                                            User Name
                                        </div>
                                        <hr className='border border-black ' />
                                        <div className=' py-4'>
                                           Email
                                        </div>
                                        <div className='py-4'>
                                            Job Title
                                        </div>
                                        <div className='py-4'>
                                            Department
                                        </div>
                                        <div className='py-4'>
                                            Status
                                        </div>
                                        <div className=' flex py-4 space-x-2'>
                                            <div className=''>
                                                Pause
                                            </div>
                                            <div className=' '>
                                                Remove
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='border border-black opacity-30' /> 

                                </div>





                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-end space-x-2 mr-16 ">
                        <div className="  text-[#56077a]">
                            <button className='px-7 py-2 border border-[#56077a] rounded-md'>Cancel</button>
                        </div>
                        <div className=" right-0 text-white">
                            <button className='bg-[#56077a] px-7 py-2 rounded-md'>Submit</button>
                        </div>
                    </div> */}
                    <div className='py-8 bg-stone-300 flex justify-between mt-28'>
                        <h2 className='ml-[35%] opacity-60 text-sm'><code>Copyright @2023 HealthWorksAI, All Rights Reserved.</code></h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

