import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import MenuLogin from './MenuLogin';

export default function NavBar() {


    const LoginLinks = () => {

        return <MenuLogin />
    }
    const MenuLinks = () => {

        return <MenuLogin />
    }

    const componentMap = {
        LoginLinks,
        MenuLinks
    };

    const componentData = [
        { type: 'LoginLinks', active: false },
        { type: 'MenuLinks', active: false }
    ];

    const [Login, setLoginState] = useState(false)
    const [Menu, setMenuState] = useState(false)

    return (
        <div className=''>
            <header className='flex fixed z-50 bg-white items-center h-24 w-full top-0 left-0 justify-between min-w-[30rem]'>
                <div>
                    <a className='' href='/'><img src='https://logodix.com/logo/680777.png ' alt='Geico logo' width={114} height={114}></img></a>
                </div>
                <div className='flex'>
                    <a className='px-8 underline flex font-bold text-blue-600' href='/'>Espanol</a>
                    <button onClick={() => setLoginState(!Login)} className='px-8 flex font-bold text-blue-600'><IoPerson size={24} />Log In</button>
                    <button onClick={() => setMenuState(!Menu)} className='px-8 flex font-bold text-blue-600'><IoMenu size={24} /> Menu</button>
                </div>
            </header>        
            <MenuLogin login={Login}/>
        </div>
    )
}
