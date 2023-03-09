import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { RxCounterClockwiseClock } from "react-icons/rx"

export default function ModalPopUpFour() {
    return (

        <div className='h-[1000px] w-full bg-black  py-20 flex items-center justify-center '>
            <div className='w-[720px] h-[650px] bg-white px-10 py-8 rounded '>
                <div className='relative justify start text-xl flex  items-center text-black pb-3"'>
                    <div className=''> <RxCounterClockwiseClock size="1.64rem" /></div>
                    <p className='ml-3 text-l opacity-60 font-medium '>Update Ticket</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr className='mt-2' />
                <div className='flex space-x-8 py-4 opacity-70'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Ticket Id</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="7" class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Name</label>
                        <select type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Doe" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200 px-36"></select>
                    </div>
                </div>

                <div className='flex space-x-8 py-4 opacity-70'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="Enrollment Intelligence" class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Sub-Category</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Enrollment Trends New" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                    </div>
                </div>

                <div className='flex space-x-8 py-4 opacity-70'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Priority</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="Medium" class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Date Created</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="09-07-2022" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                    </div>
                </div>

                <div className='flex space-x-8 py-4 opacity-70'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="name" class="block text-sm font-medium text-gray-700">Status</label>
                        <select id="name"  class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400  px-36"></select>
                    </div>

                    <div class="col-span-6 sm:col-span-3 ">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Issue</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Test" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200 "></input>
                    </div>
                </div>

                <div className=' flex space-x-8 py-4 opacity-70 justify-end'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Comment</label>
                        <textarea type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Doe" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 "></textarea>
                    </div>
                </div>

                <div className="flex py-2 justify-end space-x-2">
                    <div className="  text-blue-800">
                        <button className='px-7 py-2 border-2 rounded-md'>Cancel</button>
                    </div>

                    <div className=" right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Update</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
