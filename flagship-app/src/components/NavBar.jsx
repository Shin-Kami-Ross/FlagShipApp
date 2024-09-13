import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function NavBar() {
    return (
        <header className='flex justify-between'>
            <div>
                <a href='/'><img src='https://logodix.com/logo/680777.png ' alt='Geico logo' width={114} height={114}></img></a>
            </div>
            <div className='flex self-end px-4'>
                <a className='px-8 underline flex font-bold text-blue-600' href='/'>Espanol</a>
                <button className='px-8 flex font-bold text-blue-600'><IoPerson size={24} />Log In</button>
                <button className='px-8 flex font-bold text-blue-600'><IoMenu size={24} /> Menu</button>
            </div>
        </header>
    )
}
