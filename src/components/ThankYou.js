import React from 'react'

const ThankYou = ({setResponse}) => {

    const drop=()=>{
        setResponse(false);
    }

  return (
   
    <>
    <div id='popup' className='thankyou absolute top-0 left-0 bg-black w-[100%] h-[79rem] bg-opacity-50 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-[#333] shadow-xl bg-white w-[25rem] h-[25rem] p-10 text-center rounded-xl'>
            <img className='h-24 -mt-[10rem] mb-10' src={require(`./Images/tick-img.png`)} alt="" />
            <h3>Thank You!</h3>
            <p className='pt-5'>Your Details has been successfully submitted. Thanks!</p>
            <button className='bg-[#6fd649] w-[12rem] h-[3rem] rounded-xl text-white text-xl cursor-pointer'onClick={drop}>OK</button>
        </div>
    </div>
    </>
  )
}

export default ThankYou