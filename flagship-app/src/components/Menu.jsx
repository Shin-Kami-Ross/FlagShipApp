import React, { } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
export default function Menu(prop) {

    return (
        <div>
            {prop.login && <div className='w-full absolute h-full z-40 block'>
                <div className='left-0 w-full h-full top-[6rem] fixed bg-[#1C1C1E] bg-opacity-20 transition-colors duration-500 ease-[cubic-bezier(0.59, 0.005, 0.295, 1)]' />
                <div className='bg-white p-2 m-2 block top-[6rem] right-0 bottom-0 max-w-[30rem] fixed w-full z-50 animate-slide-in-right rounded-3xl space-y-4'>
                  
                </div>
            </div>}
        </div>
    )
}
