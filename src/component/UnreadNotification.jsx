import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md"

export default function UnreadNotification() {
  return (
    <div className="h-[1000px] w-full bg-black  flex items-center justify-center" >
            <div className='w-[500px] h-[200px] bg-slate-100 px-10 py-6 rounded -px-[250px]'>
                <div className=' relative justify start text-xl flex  items-center text-black pb-3' >
                    <div className=''> <MdOutlineNotificationsActive size="1.50rem" /></div>
                    <p className='ml-3 text-xl font-semibold opacity-70'>Unread Notifications</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr />
                <div className="py-2 px-0 opacity-50">You have 4 unread notifications to read .</div>

                <div className="flex py-6 justify-end space-x-1">
                    <div className="  text-blue-800">
                        <button className='px-7 py-2 rounded-md'>Maybe Later</button>
                    </div>

                    <div className=" right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>View all</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
