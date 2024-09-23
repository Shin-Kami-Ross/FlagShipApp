import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import LoginMenu from './LoginMenu';
import MMenu from './Menu';

export default function NavBar() {

    const [Login, setLoginState] = useState(false)
    const [Logintext, setLoginText] = useState("Log In")
    const [Menu, setMenuState] = useState(false)
    const [Menutext, setMenuText] = useState('Menu')

    const Logfunc = () => {
        if (Menu) Menufunc();
        setLoginState(!Login)
        if (Logintext === "Log In") setLoginText('Close')
        else setLoginText('Log In')
    }
    const Menufunc = () => {
        if (Login) Logfunc();
        setMenuState(!Menu)
        if (Menutext === "Menu") setMenuText('Close')
        else setMenuText('Menu')
    }
    return (
        <div className=''>
            <header className='flex fixed z-50 bg-white items-center h-24 w-full top-0 left-0 justify-between min-w-[30rem]'>
                <div>
                    <a href='/'><img src='https://logodix.com/logo/680777.png ' alt='Geico logo' width={114} height={114}></img></a>
                </div>
                <div className='flex'>
                    <a className='px-8 underline flex font-bold text-blue-600' href='/'>Espanol</a>
                    <button onClick={Logfunc} className='px-8 flex font-bold text-blue-600'><IoPerson size={24} />{Logintext}</button>
                    <button onClick={Menufunc} className='px-8 flex font-bold text-blue-600'><IoMenu size={24} /> {Menutext}</button>
                </div>
            </header>
            {!Menu && <LoginMenu login={Login} />}
            {!Login && <MMenu menu={Menu} />}
        </div>
    )
}
