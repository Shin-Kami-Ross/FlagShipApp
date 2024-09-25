import React, { } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import LoginButton from './LoginPage';

export default function LoginMenu(prop) {

    return (
        <div>
            {prop.login && <div className='w-full absolute h-full z-40 block'>
                <div className='left-0 w-full h-full top-[6rem] fixed bg-[#1C1C1E] bg-opacity-20 transition-colors duration-500 ease-[cubic-bezier(0.59, 0.005, 0.295, 1)]' />
                <div className='bg-white p-2 m-2 block top-[6rem] right-0 bottom-0 max-w-[30rem] fixed w-full z-50 animate-slide-in-right rounded-3xl space-y-4'>
                    <div className='flex justify-between'>
                        <h1 className=' text-center '>Access Your Policy</h1>
                        <button onClick={() => { }}> <IoMdCloseCircleOutline className='text-indigo-800' size={36} /></button>
                    </div>
                    <select className='p-4 w-full border-2 border-slate-200 rounded-2xl' >
                        <option>Auto</option>
                        <option>Home</option>
                        <option>Renters</option>
                        <option>Business</option>
                        <option>Motorcycle</option>
                        <option>Boat</option>
                    </select>
                    <LoginButton />
                    <p>New User?<a href='/'>Activate account</a></p>
                    <p>Mobile App <a href='/'>Coming soon</a></p>
                    <div className='border-b-2' />
                    <div className='flex justify-evenly flex-col space-y-4'>
                        <h1>Claims Center</h1>
                        <a href='/'>Report an incident</a>
                        <a href='/'>Track a claim</a>
                    </div>
                    <div>
                        <h1>Location</h1>
                        <div className='flex border lg:rounded'>
                            <input className='w-full' type='text'></input>
                            <FaLocationDot className='p-1 icon' size={36} />
                        </div>
                        <button className='border rounded-full bg-indigo-500 p-4 font-bold text-white'>Update</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
