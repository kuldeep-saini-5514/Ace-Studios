import React, { useState } from 'react'

const Main = () => {
    const [color, setColor] = useState("#ffe710");
  return (
    <>
    <div className='flex mx-[4rem] my-[2rem]' >
                    {/* left container */}
        <div className='w-[45rem] flex flex-col gap-y-4'>
            <div className='flex items-center rounded-xl w-[19rem] py-3 px-2 bg-lightgray'>
                <i className="fa-solid fa-circle fa-2xl"style={{ color: `${color}` }} ></i>
                <p className='ml-4'>#1 Digital company in the town!</p>
            </div>
            <h1 className='text-black text-4xl font-bold w-[15rem]'>Amet Sed Cursus Eu Tellus Eget.</h1>
            <p className='text-gray w-[95%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad sed unde, velit aperiam similique saepe perspiciatis ratione accusamus non, quisquam consequuntur distinctio, corporis neque totam consequatur tempore libero? Nisi!</p>
                    {/* buttons container */}
            <div className='flex items-center mt-4 gap-x-10'>
            <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">Connect with us</button>
            <p className='text-purple'>Browse Our Works</p>
            </div>
        </div>
                    {/* right container */}
        <div className='w-[400px]  border-black]'>
            <img src={require(`./Images/logo_1.png`)} alt="" />
        </div>
    </div>
    <div className='bg-blue w-full h-9 mt-20'></div>
    </>
  )
}

export default Main