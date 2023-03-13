import React from 'react'

export default function Product({title, price , category , imgUrl}) {
  return (
    <div>
        <img src={imgUrl}/>
        <div>{category}</div>
        <div>{title}</div>
        <div>Rs.{price}</div>
    </div>
  )
}
