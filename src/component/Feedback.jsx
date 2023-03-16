import React from 'react';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWifi } from "react-icons/md";
import { TbStar } from "react-icons/tb";
import Check from './Check';
//import ReactStars from "react-rating-stars-component";

export default function Feedback(isVisible) {

    //const [showModal,setShowModal] = useState(true);
    const [form, setForm] = React.useState({
        textValue: '',
        // password: '',
      });

      const handleTextValueInputChange = (event)=>{
        setForm({...form,textValue:event.target.value})
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();  
        //alert(form.textValue );
        alert('A form was submitted: ' + form.textValue);
      };
      React.useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(form));
      },[form])

    
    const changepage = () => {
      setSubmitted(!submitted);
    }

    const [submitted,setSubmitted] = useState(true);
    
    
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //   };
    //   const stars = Array(5).fill(0)

    //   const [currentValue,setCurrentValue] = React.useState(0);

    //   const [hoverValue,setHoverValue] = React.useState(undefined);
    //   const handleClick = value =>{
    //     setCurrentValue(value);

    //   };
    //   const handleMouseOver = value =>{
    //     setHoverValue(value);
    //   };
    //   const handleMouseLeave = ()=>{
    //     setHoverValue(undefined);
    //   }

      // adding new code 

    const [ inputValue, setInputValue ] = useState("Value from onchanges");
    const handleCancel= () => {
        setInputValue("");
    };
    const handleSave=(event) =>{
        console.log(inputValue, event);
    }
    
    
    if(!isVisible) return null;
    return(
          submitted ? <div className='h-[1000px] w-full bg-black   flex justify justify-end py-96  p-16 '>
          <div className='w-[700px] h-[510px] bg-white px-10 py-8 rounded '>
              <form >
              <div className='relative justify start text-xl flex  items-center text-black pb-3 '  >
                  <div className=''> <MdOutlineWifi size="1.64rem" /></div>
                  <p className='ml-3 text-l  font-medium '>Feedback</p>
                  <div ><div className='ml-8 absolute right-0 top-[-0px] cursor-pointer '> <RxCross2 size="1.64rem" onClick={changepage} /></div>
                  </div>
              </div>
              </form>
              <hr className='mt-2' />
              <div className='text-md py-3 opacity-60'>Your feedback is invaluable to us. It helps us to improve our services.</div>
              <div className='relative space-x-8 py-3 opacity-70'>
                  <div className="absolute left-0">
                      <p>Ease of using</p>
                  </div>
                  <div className='absolute right-0 flex space-x-4 cursor-pointer' >
                      <div className='star'> <TbStar size="1.64rem" /></div>
                      <div className='star'> <TbStar size="1.64rem" /></div>
                      <div className='star'> <TbStar size="1.64rem" /></div>
                      <div className='star'> <TbStar size="1.64rem" /></div>
                      <div className='star'> <TbStar size="1.64rem" /></div>
                  </div>
              </div>
              <div className='relative space-x-8 py-4 opacity-70 '>
                  <div className="absolute left-0 py-4">
                      <p >Navigation</p>
                  </div>
                  <div className='absolute right-0 flex py-4 space-x-4 cursor-pointer' >
                      <div className=''> <TbStar size="1.64rem" /></div>
                      <div className=''> <TbStar size="1.64rem" /></div>
                      <div className=''> <TbStar size="1.64rem" /></div>
                      <div className=''> <TbStar size="1.64rem" /></div>
                      <div className=''> <TbStar size="1.64rem" /></div>
                  </div>
                  
              </div>
              <div className="col-span-6 sm:col-span-3 py-10">
                  <label  className="block text-md  text-gray-700">Any special recommendations</label>
                  <textarea type="text" placeholder="Type here ..."  value = {form.textValue} onChange ={handleTextValueInputChange} className="mt-2 py-2 border border-black p-2  focus:ring-gray-500 focus:border-gray-500 block w-full  h-32  xl:text-xl  border-black-400  "></textarea>
              </div >
          
              <div className="flex py-6 justify-end space-x-2 ">               
                  <div className="  text-[#470850]">
                      <button className='px-7 py-2  rounded-md'>Maybe Later</button> 
                  </div>
                  <form onSubmit={handleSubmit}>
                  <div className=" right-0 text-white">
                      <button className='bg-[#470850] px-7 py-2 rounded-md ' type='submit'>
                        Submit</button>
                  </div>
                  </form>
              </div>            
          </div>
      </div> : <><Check/></>
  )
}
