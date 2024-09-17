import React from 'react'
import { IoCarSport } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";
import { IoBoatSharp } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import icon from "../image/icon.png"
import adjuster from "../image/adjuster.png"
import car from "../image/carcoverage.png"
import family from "../image/family.png"
import meeting from "../image/meeting.png"
import pet from "../image/pet.png"
export default function Home() {
    return (
        <div className='flex flex-col px-12 max-w-7xl m-auto'>
            <section className='bg-slate-300 p-4 underline' id="specialannouncement">
                <a href='/'>Our Commitment to Diversity, Equity and Inclusion</a>

            </section>
            <h1 className='w-[957px]' aria-label='The Insurance Savings You Expect'>The Insurance Savings You Expect</h1>
            <div id='homepagepanel' >
                <div className='quotebox pb-12 border-b-2'>
                    <div>
                        <div className='mb-4 w-[30rem]'>
                            <p className='text-center '>See how much you can save! Let's get started by entering your Zip Code:</p>
                            <form className='space-x-2'>
                                <input className='border rounded' type="number" placeholder='5-Digit ZIP Code'></input>
                                <button className='border-solid border-indigo-800 border-2 rounded-full border w-[85px] h-[50px]'> Go </button>
                            </form>
                        </div>
                        <div className='policy-cards grid gap-1 sm:grid-cols-3'>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <IoCarSport className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Auto</p>
                            </div>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <FaHome className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Home</p>
                            </div>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <BsBuildingsFill className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Renters</p>
                            </div>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <FaMotorcycle className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Motorcycle</p>
                            </div>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <IoBoatSharp className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Boat</p>
                            </div>
                            <div className='card'>
                                <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                    <input className='checkbox' type='checkbox'></input>
                                    <IoBriefcase className='self-center text-indigo-800' size={96} />
                                </div>
                                <p className='p-12'>Buisness</p>
                            </div>
                        </div>
                        <p className='underline pb-[10px]'>
                            <a href='/'>View More Insurance Types</a>
                        </p>
                        <p >
                            <a className='bg-indigo-800 rounded-full w-[178px] h-[50px] text-white p-4' href='/'>Start Your Quote</a>
                        </p>
                        <p className='text-xs'>
                            By selecting "Start My Quote," you agree to GEICO's terms and conditions and privacy policy including our use of tracking technologies to provide you with the best possible experience.
                        </p>

                    </div>
                    <img className='lizardimage' src={icon} alt='Custom Lizard' width={330} height={330}></img>
                </div>
            </div>
            <div id='quicklinks'>
<div className='p-12 flex justify-between'>
    <img src={adjuster} alt="Adujster" width={387} height={387}></img>
    <div>
        <h1 className='text-start'>Get Instant Access to Claims and Your Policy</h1>
        <div className='border rounded-full p-8'></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
            </div>
            <div id='promotions'>

            </div>
            <section id='stats '>

            </section>
            <div id='quicklinks2'>

            </div>
            <div id='mobilepanel'>

            </div>
        </div>
    )
}
