import React from 'react';
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FiArrowRight } from "react-icons/fi";
import { BsArrowClockwise } from "react-icons/bs";

export default function TicketHistoryReport() {
    return (
        <div className='flex  -ml-[32px] my-10 h-[300px] '>
            <div className='ml-1  w-full '>
                <div className='flex justify-between items-center  py-0'>
                    <div className='justify-start flex space-x-1 '>
                        <div className='py-1'> <RxCounterClockwiseClock size="1.40rem" /></div>
                        <h3 className='pb-4 font-semibold opacity-60 text-lg left-0'>Ticket History Report</h3>
                    </div>
                </div>
                <div className='bg-white w-[990px] h-[280px]'>
                    <div className='flex py-8 space-x-2 px-8  h-[150px]'>
                        <div class="col-span-6 sm:col-span-3 px-0 ">
                            <label for="last_name" class="block text-sm  font-medium text-gray-700"> Start Date </label>
                            <input type="date" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-[280px]  xl:text-xl  border-black-400 bg-white "></input>
                        </div>
                        <div class="py-9">
                            <FiArrowRight size="1.40rem" />
                        </div>
                        <div class="col-span-6 sm:col-span-3 px-0">
                            <label for="last_name" class="block text-sm  font-medium text-gray-700"> End Date </label>
                            <input type="date" class="mt-2 py-1 border border-black p-2 focus:border-gray-500 block w-[280px] xl:text-xl  border-black-400 bg-white"></input>
                        </div>
                        <div className='flex py-3 px-2'>
                            <div className="py-4">
                                <button className=' rounded px-10  border border-black py-2 opacity-60 bg-[#57045c]'> <p className='text-white'>Search Tickets </p></button>
                            </div>
                        </div>
                    </div>
                    <div className='flex px-8 py-0 space-x-4 opacity-40'>
                        <div className=''>
                            Name
                        </div>
                        <div className='px-6 '>
                            Raised Date
                        </div>
                        <div className='ml-8'>
                            Category
                        </div>
                        <div>
                            Sub Category
                        </div>
                        <div>
                            Issue
                        </div>
                        <div className='px-40 flex'>
                            <div className=''>
                                Priority
                            </div>
                            <div className='px-4'>
                                Status
                            </div>
                        </div>
                    </div>
                    <hr class="h-px my-1 px-10 bg-gray-700 border border-black dark:bg-gray-800 opacity-90"/>
                    <div className='justify-end flex space-x-2  p-0 mr-10'>
                        <div className='py-0'> <BsArrowClockwise size="1.40rem" /></div>
                        <h3 className=' opacity-60 text-sm left-0 py-0'>Update</h3>
                        
                    </div>
                    <hr class="h-px my-1 px-10 bg-gray-700 border border-black dark:bg-gray-800 opacity-10"/>
    
                    <div className='w-[990px] py-24 '>
                        <div className="flex justify-end space-x-2  py-0">
                            <div className=" right-0 text-white">
                                <button className='bg-[#57045c] px-8 py-2 rounded-md'>Download</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
