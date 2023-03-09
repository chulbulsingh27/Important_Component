import React from 'react'
import { BsPersonPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
export default function ModalPopOne() {
    return (
        <div className="h-[1000px] w-full bg-black  py-20 flex items-center justify-center "  >
            <div className='w-[550px] h-[450px] bg-slate-100 px-10 py-8 rounded '>
                <div className="relative justify start text-xl flex  items-center text-black pb-3">
                    <div className=''> <BsPersonPlus size="1.64rem" /></div>
                    <p className='ml-3 text-xl opacity-70'>Create User Profile</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr />
                <div className=""></div>
                {/* <div className="flex py-80 items-end ">
                    <p className='py-2 ' >Create multiple user profiles ?</p>
                  
                    <div className='ml-10' > <button className='text-white bg-blue-800 px-7 rounded-md py-2 flex-col'>Register</button></div>
                </div> */}
                <div className="relative py-80">
                    <div className="absolute left-0 text-blue-800">
                        <button className='py-2'>Create multiple user profiles ? </button>
                    </div>

                    <div className="absolute right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Register</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
