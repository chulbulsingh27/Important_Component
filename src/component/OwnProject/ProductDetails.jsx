import React from 'react'

export default function ProductDetails() {
  return (
    <div className='w-20'>
        <img src= "https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"></img>
        <div>Mugs</div>
        <div>These rae mugs are so good</div>
        <div className='flex ' >
        <input value={1} type="text" />
        <button className = "border border-black px-10 py-2 -px[20px]">Add to cart</button>
        </div>
    </div>
  )
}
