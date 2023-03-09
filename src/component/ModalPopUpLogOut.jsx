import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLogin } from "react-icons/md"

export default function ModalPopUpLogOut() {
    return (
        <div className="h-[1000px] w-full bg-black  py-20 flex items-center justify-center " >

            <div className='w-[500px] h-[200px] bg-slate-100 px-10 py-8 rounded'>
                <div className=' relative justify start text-xl flex  items-center text-black pb-3' >
                    <div className=''> <MdOutlineLogin size="1.50rem" /></div>
                    <p className='ml-3 text-xl font-semibold '>Log Out</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr />
                <div className="py-2 px-0">Are you sure you want to logout?</div>
                <div className="flex py-6 justify-center space-x-2 ">
                    <div className="  text-blue-800">
                        <button className='px-7 py-2 border border-blue-500 rounded-md'>Confirm</button>
                    </div>
                    <div className=" right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
