import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { BsPersonPlus } from "react-icons/bs";
import {RxEnvelopeClosed} from "react-icons/rx";
import {RxCrossCircled} from "react-icons/rx";
import {HiOutlinePlusSm} from "react-icons/hi";

export default function ModalPopUpTwo() {
    return (
        <div className='h-[1000px] w-full bg-black  py-20 flex items-center justify-center '>
            <div className='w-[750px] h-[650px] bg-slate-100 px-10 py-8 rounded '>
                <div className='relative justify start text-xl flex  items-center text-black pb-3"'>
                    <div className=''> <BsPersonPlus size="1.64rem" /></div>
                    <p className='ml-3 text-xl opacity-60 font-medium '>Create User Profile</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr className='mt-2' />
                <div className='flex space-x-8 py-6 opacity-70'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="John" class="mt-2 py-2 border-2 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 "></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Last Name</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Doe" class="mt-2 py-2 border-2 p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 "></input>
                    </div>
                </div>



                <div className='flex space-x-8 py-4 opacity-70' >
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Phone no.</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="862-204-7889" class="mt-2 py-2 border-2 p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-gray-300 "></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Doe" class="mt-2 py-2 border-2 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-gray-300 "></input>
                    </div>
                </div>

                <div className='flex space-x-8 py-4 opacity-70' >
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Department</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="Marketintel" class="mt-2 py-2 border-2 p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-gray-300 "></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm font-medium text-gray-700">Job Title</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Analyst" class="mt-2 py-2 border-2 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-gray-300 "></input>
                    </div>
                </div>

                <div className='flex space-x-8 py-4 opacity-70' >
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="Hw@123" class="mt-2 py-2 border-2 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl border-gray-300"></input>
                    </div>

                    <div class="col-span-8 sm:col-span-3 ">
                        {/* <select */}
                        {/* User Type */}
                            <label for="last_name" class="block text-sm font-medium text-gray-700">User Type</label>
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Select" class="mt-2 py-2 border-2 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-gray-300 "></input>

                            
                            {/* // className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance focus:border-gray-600 py-2" */}
            {/* > */}
                            {/* <option>ReactJS Dropdown</option> */}
                            {/* <option>Laravel 9 with React</option> */}
                            {/* <option>React with Tailwind CSS</option> */}
                            {/* <option selected>React With Headless UI</option> */}
                        {/* </select> */}
                    </div>
                </div>


                <div className="relative mt-10">
                    <div className="absolute left-0 text-blue-800">
                        {/* <button className='py-2'>Create multiple user profiles ? </button> */}
                    </div>

                    <div className="absolute right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
