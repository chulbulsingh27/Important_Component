import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineGroup} from "react-icons/md";
import {MdOutlineGroups} from "react-icons/md"
import {HiPlus} from "react-icons/hi";
import {IoMdCloseCircleOutline} from "react-icons/io"
import {MdForwardToInbox} from "react-icons/md"

export default function InviteNewMember() {
  return (
    <div className='h-[1000px] w-full bg-black  py-20 flex items-center justify-center '>
            <div className='w-[650px] h-[350px] bg-white px-10 py-6 rounded '>
                <div className='relative justify start text-xl flex  items-center text-black pb-3"'>
                    <div className=''> <MdOutlineGroups size="1.64rem" /></div>
                    <p className='ml-3 text-l opacity-60 font-medium '>Invite New Members</p>
                    <div className='ml-8 absolute right-0 top-[-0px] cursor-pointer'> <RxCross2 size="1.64rem" /></div>
                </div>

                <hr className='mt-2' />
                <div className='text-sm py-3 opacity-60'>Send email links to invite</div>
                <div className='flex space-x-6 py-4 '>
                    <div class="col-span-6 sm:col-span-3 space-x-2">
                        <label for="first_name" class=" relative block text-sm font-medium text-gray-700" >
                        <MdForwardToInbox className="absolute transform -translate-y-1 mx-2 my-3 w-6 h-6" />
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="" class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200 ">
                        </input>
                        </label>
                        {/* <div className=''> <MdOutlineGroups size="1.64rem" /></div> */}
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="relative block text-sm  font-medium text-gray-700">
                        <MdOutlineGroup className="absolute transform -translate-y-1 mx-2 my-3 w-6 h-6" />
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200 "></input>
                        </label>
                    </div>
                    <div className='py-4'> <IoMdCloseCircleOutline size="1.80rem" /></div>
                </div>

                <div className='flex space-x-6 py-3 '>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="relative block text-sm font-medium text-gray-700">
                        <MdForwardToInbox className="absolute transform -translate-y-1 mx-2 my-3 w-6 h-6" />
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" placeholder="" class="mt-2 py-1 border border-black p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                        </label>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-sm  font-medium text-gray-700">
                        <MdOutlineGroup className="absolute transform -translate-y-1 mx-2 my-3 w-6 h-6" />
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" placeholder="" class="mt-2 py-1 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full shadow-lg xl:text-xl  border-black-400 bg-gray-200"></input>
                        </label>
                    </div>
                    <div className='py-4'> <IoMdCloseCircleOutline size="1.80rem" /></div>
                </div>


                <div className="relative py-4">
                    <div className="absolute left-0 text-blue-800 flex space-x-2">
                    <div className='py-2'> <HiPlus size="1.64rem" /></div>
                        <button className='py-2'>Add another member </button>
                    </div>

                    <div className="absolute right-0 text-white">
                        <button className='bg-blue-800 px-7 py-2 rounded-md'>Invite</button>
                    </div>
                </div>

            </div>
        </div>
  )
}
