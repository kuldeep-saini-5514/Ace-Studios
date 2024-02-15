import React from 'react'

const ThankYou = ({setResponse}) => {

    const drop=()=>{
        setResponse(false);
    }

  return (
   
    <>
    <div id='popup' className='thankyou absolute md:top-0  left-0 ms:-top-80 bg-black w-[100%]   md:h-[79rem] ms:h-[129rem] bg-opacity-50 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-[#333] shadow-xl bg-white lg:w-[25rem] md:h-[25rem] md:w-[22rem]  ms:w-[17rem] ms:h-[20rem] p-10 text-center rounded-xl'>
            <img className='md:h-24 ms:h-16 md:-mt-[10rem] ms:-mt-[5rem] mb-10' src={require(`./Images/tick-img.png`)} alt="" />
            <h3 className='md:text-[40px] ms:text-[30px]'>Thank You!</h3>
            <p className='pt-5'>Your Details has been successfully submitted. Thanks!</p>
            <button className='bg-[#6fd649] w-[12rem] h-[3rem] rounded-xl text-white text-xl cursor-pointer'onClick={drop}>OK</button>
        </div>
    </div>
    </>
  )
}

export default ThankYou