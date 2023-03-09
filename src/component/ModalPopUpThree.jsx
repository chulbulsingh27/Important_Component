import React from 'react'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function ModalPopUpThree() {
    return (
        // <div>ModalPopUpThree</div>
        <div className='h-[1000px] w-full bg-black  py-10 px-10 flex items-center justify-center relative'>
            <div className='w-[600px] h-[200px] bg-slate-100 px-10 py-8 rounded items-end'>
                <div className='relative justify start text-xl flex  items-center text-black pb-3"'>
                    <div className=''> <MdOutlineNotificationsActive size="1.64rem" /></div>
                    <p className='ml-3 text-xl opacity-60 font-medium '>Unread Notifications</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
            </div>

        </div>
        // <MdOutlineNotificationsActive/>
    )
}
