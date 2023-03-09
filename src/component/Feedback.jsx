import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWifi } from "react-icons/md";
import { TbStar } from "react-icons/tb";

export default function Feedback() {
    
    return (
        <div className='h-[1000px] w-full bg-black   flex justify justify-end py-96  p-16'>
            <div className='w-[700px] h-[510px] bg-white px-10 py-8 rounded '>
                <div className='relative justify start text-xl flex  items-center text-black pb-3 '>
                    <div className=''> <MdOutlineWifi size="1.64rem" /></div>
                    <p className='ml-3 text-l  font-medium '>Feedback</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>
                <hr className='mt-2' />
                <div className='text-md py-3 opacity-60'>Your feedback is invaluable to us. It helps us to improve our services.</div>
                <div className='relative space-x-8 py-3 opacity-70'>
                    <div class="absolute left-0">
                        <p>Ease of using</p>
                    </div>
                    <div className='absolute right-0 flex space-x-4' >
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                    </div>
                </div>
                <div className='relative space-x-8 py-4 opacity-70 '>
                    <div class="absolute left-0 py-4">
                        <p >Navigation</p>
                    </div>
                    <div className='absolute right-0 flex py-4 space-x-4' >
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                        <div className=''> <TbStar size="1.64rem" /></div>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-3 py-10">
                    <label for="last_name" class="block text-md  text-gray-700">Any special recommendations</label>
                    <textarea type="text" placeholder="Type here ..." class="mt-2 py-2 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full  h-32  xl:text-xl  border-black-400  "></textarea>
                </div>

                {/* <div className=' flex space-x-8 py-4 opacity-70 justify-end'>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">Comment</label>
                        <textarea type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="Doe" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 "></textarea>
                    </div>
                </div> */}

                <div className="flex py-6 justify-end space-x-2 ">
                    <div className="  text-blue-800">
                        <button className='px-7 py-2  rounded-md'>Maybe Later</button>
                    </div>

                    <div className=" right-0 text-white">
                        <button  className='bg-blue-800 px-7 py-2 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
