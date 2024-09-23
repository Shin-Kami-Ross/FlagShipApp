import React, { useState } from 'react'
import { FaUserClock } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GiWaterSplash } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import InnerMenu from './InnerMenu';

export default function Menu(prop) {

    const [sub_menu, setMenuState] = useState(0);
    const InsuranceMenu = () => {
        return <div className='flex flex-col animate-slide-in-right'>
            <h2 onClick={() => setMenuState(0)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'><TiArrowBack className='icon' size={36} />Back</h2>
            <h2 className=' border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl flex-row-reverse'>Insurance</h2>
            <h2 onClick={() => setMenuState(2)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'><IoCarSport className='icon' size={36} /> Vehicle Insurance</h2>
            <h2 onClick={() => setMenuState(3)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <FaHome className='icon' size={36} />Property Insurance</h2>
            <h2 onClick={() => setMenuState(4)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <IoBriefcase className='icon' size={36} />Business Insurance</h2>

        </div>
    }
    const VehicleMenu = () => {
        return <div></div>
    }
    const PropertyMenu = () => {
        return <div></div>
    }
    const BusinessMenu = () => {
        return <div></div>
    }
    const AccountMenu = () => {
        return <div></div>
    }
    const ClaimsMenu = () => {
        return <div></div>
    }
    const ToolsMenu = () => {
        return <div></div>
    }
    const AboutUsMenu = () => {
        return <div></div>
    }
    const EmptyMenu = () => {
        return <div className='h-full flex  flex-col text-center space-y-96'>
            <div className='flex flex-col w-full'>
                <button onClick={() => setMenuState(1)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl' >
                    <h2 className='flex-row-reverse'>Insurance</h2></button>
                <button onClick={() => setMenuState(5)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl' >
                    <h2 className='flex-row-reverse'>Information</h2></button>
            </div>
            <div className='flex flex-col w-full space-y-4'>
                <h1>Top Pages</h1>
                <a className='' href='/'>Contact Us</a>
                <a className='' href='/'>Get An Insurance Quote</a>
            </div>
        </div>
    }
    const InformationMenu = () => {
        return <div className='flex flex-col animate-slide-in-right'>
            <h2 onClick={() => setMenuState(0)} className='hover:bg-blue-100 border-b-2 p-8 border-indigo-500 w-full lg:rounded-3xl'><TiArrowBack className='icon' size={36} />Back</h2>
            <h2 className=' border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl flex-row-reverse'>Information</h2>
            <h2 onClick={() => setMenuState(6)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'><FaUserClock size={36} className='icon' /> My Account</h2>
            <h2 onClick={() => setMenuState(7)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <FaClipboardList size={36} className='icon' />Claims</h2>
            <h2 onClick={() => setMenuState(8)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <IoIosInformationCircle size={36} className='icon' />Tools</h2>
            <h2 onClick={() => setMenuState(9)} className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <GiWaterSplash size={36} className='icon' />About Us</h2>
            <h2 className='hover:bg-blue-100 border-b-2 border-indigo-500 p-8 w-full lg:rounded-3xl'> <FaPhone size={36} className='icon' />Contact Us</h2>
        </div>
    }
    const submenus = [
        EmptyMenu,
        InsuranceMenu,
        VehicleMenu,
        PropertyMenu,
        BusinessMenu,
        InformationMenu,
        AccountMenu,
        ClaimsMenu,
        ToolsMenu,
        AboutUsMenu
    ];
    return (
        <div>
            {prop.menu &&
                <div className='w-full absolute h-full z-40 block'>
                    <div className='left-0 w-full h-full top-[6rem] fixed bg-[#1C1C1E] bg-opacity-20 transition-colors duration-500 ease-[cubic-bezier(0.59, 0.005, 0.295, 1)]' />
                    <div className='bg-white p-2 m-2 block top-[6rem] right-0 bottom-0 max-w-[30rem] fixed w-full z-50 animate-slide-in-right rounded-3xl space-y-4'>
                        <InnerMenu menu={submenus[sub_menu]} />
                    </div>

                </div>

            }
        </div>
    )
}
