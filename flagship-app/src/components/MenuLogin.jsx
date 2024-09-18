import React, { act, useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
export default function MenuLogin(prop) {

    console.log(prop.login)

    return (
        <div>
            {(prop.login) && <div className='w-full absolute h-full z-40 block'>
                <div className='left-0 w-full h-full top-[6rem] fixed bg-[#1C1C1E] bg-opacity-20 transition-colors duration-500 ease-[cubic-bezier(0.59, 0.005, 0.295, 1)]' />
                <div className='bg-white p-2 m-2 block top-[6rem] right-0 bottom-0 max-w-[30rem] fixed w-full z-50 animate-slide-in-right rounded-3xl '>
                    <div className='flex justify-between'>
                        <h1 className=' text-center '>Access Your Policy</h1>
                        <button className=''> <IoMdCloseCircleOutline size={36} /></button>
                    </div>
                    <select className='p-4 w-full border-1 border-slate-200 rounded-2xl' >
                        <option>Auto</option>
                        <option>Home</option>
                        <option>Renters</option>
                        <option>Business</option>
                        <option>Motorcycle</option>
                        <option>Boat</option>
                    </select>
                    <button className='relative left-[25%]  w-[60%] p-2 rounded-full border-2 border-indigo-500'>Log In</button>
                    <p>New User?<a className='font-bold underline' href='/'>Activate account</a></p>
                    <p>Mobile App <a className='font-bold underline' href='/'>Coming soon</a></p>
                </div>
            </div>}
        </div>
    )
}
