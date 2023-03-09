import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLogin } from "react-icons/md";
import firstimage from "./images/firstimage.avif";

export default function Subscription() {
  return (
    <div className="h-[1000px] w-full bg-black  py-20 flex items-center justify-center " >




            <div className='w-[750px] h-[400px] bg-slate-100 px-0 py-0 rounded relative '>
            {/* <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer bg-white'> <RxCross2 size="1.64rem" /></div>  */}
            <div className='bg-white text-black absolute right-0 cursor-pointer rounded-xl -mt-4 -mr-3'><RxCross2 size="1.64rem "/></div>
                <img className='w-[750px] h-[190px]' src={firstimage}></img>
                
                <div className='px-10 py-10 justify-center space-x-2 opacity-60 text-lg' >
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus eaque aqua holyshit don't knowmodi,  </div>
                </div>
                
                <div className="flex justify-center space-x-2 ">
                    <div className="  text-blue-400">
                        <button className='px-14 py-2 border border-blue-500 rounded-md'>coupon code ..</button>
                    </div>
                    <div className=" right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
