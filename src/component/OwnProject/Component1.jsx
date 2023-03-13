import React from 'react'

export default function Component1(data) {
    return (
        <div className='py-32'>
            <div className='w-full border border-black bg-[#708494]'>
                <img className = "h-[280px] w-full items-center flex-wrap"src={data.photo}  ></img>
                <div>
                    <div className='text-xl opacity-60 '>{data.category}</div>
                    <div className=''>{data.title}</div>
                    <div className=''>{data.price}</div>
                </div>
            </div>
        </div>
    )
}
