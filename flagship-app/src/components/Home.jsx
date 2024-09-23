import React from 'react'
import { IoCarSport } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";
import { IoBoatSharp } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import icon from "../image/icon.png"
import adjuster from "../image/adjuster.png"
import car from "../image/carcoverage.png"
import family from "../image/family.png"
import meeting from "../image/meeting.png"
import pet from "../image/pet.png"
import living from "../image/living.png"
import mobileapp from "../image/mobileapp.png"
export default function Home() {
    return (
        <div className='flex flex-col max-w-7xl m-auto pt-24 justify-center space-y-14'>
            <section className='bg-slate-300 p-4 underline' id="specialannouncement">
                <a href='/'>Our Commitment to Diversity, Equity and Inclusion</a>
            </section>
            <div id='homepagepanel' className=''>
                <h1 className='w-[957px]' aria-label='The Insurance Savings You Expect'>The Insurance Savings You Expect</h1>
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
                            By selecting "Start My Quote," you agree to DINOCO's terms and conditions and privacy policy including our use of tracking technologies to provide you with the best possible experience.
                        </p>

                    </div>
                    <img className='lizardimage' src={icon} alt='Custom Lizard' width={330} height={330}></img>
                </div>
            </div>
            <div id='quicklinks' className=''>
                <div className='p-12 flex justify-between border-b-2 pb-24'>
                    <img className='rounded-full border-10 lg:shadow-2xl' src={adjuster} alt="Adujster" width={387} height={387}></img>
                    <div className='space-y-4 m-4'>
                        <h1 className='text-start'>Get Instant Access to Claims and Your Policy</h1>
                        <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Login to Your Policy</div>
                        <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Track a Claim</div>
                        <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Report a Claim</div>
                    </div>
                </div>
                <div className='pt-20'>
                    <h1 className='text-left'>Insurance for Your Everyday Needs</h1>
                    <h3 className='text-left font-bold'>Customized to fit you.</h3>
                    <div className='grid grid-cols-3 w-full mb-[3rem] pt-[2rem] border-b-2'>
                        <div className='bigcard pb-4'>
                            <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                <img src={car} alt="insurance car" />
                            </div>
                            <div>
                                <h3>Vehicle Insurance</h3>
                                <p >Whether you're on the road, the trail, or the water we're here to help you get the insurance you need.</p>
                            </div>
                            <button className='hover:bg-indigo-800 hover:text-white border-2 border-indigo-800 font-bold text-indigo-800 sm:rounded-3xl p-4'>Vehicle Insurance Types</button>
                        </div>
                        <div className='bigcard  pb-4'>
                            <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                <img src={family} alt="insurance family" />
                            </div>
                            <div>
                                <h3>Property Insurance</h3>
                                <p >We can help with insurance for your home and belongings whether you own or rent.</p>
                            </div>
                            <button className='hover:bg-indigo-800 hover:text-white border-2 border-indigo-800 font-bold text-indigo-800 sm:rounded-3xl p-4'>Property Insurance Types</button>
                        </div>
                        <div className='bigcard  pb-4'>
                            <div className='bg-slate-200 flex flex-col rounded p-2 jusitify-center'>
                                <img src={meeting} alt="insurance family" />
                            </div>
                            <div>
                                <h3>Business Insurance</h3>
                                <p >Business insurance can be tricky. Finding the right protection doesn't have to be. DINOCO can help you find what you need.</p>
                            </div>
                            <button className='hover:bg-indigo-800 hover:text-white border-2 border-indigo-800 font-bold text-indigo-800 sm:rounded-3xl p-4'>Business Insurance Types</button>
                        </div>

                    </div>
                </div>

            </div>
            <section id='stats' className='' >
                <h1>See Why People Switch to DINOCO</h1>
                <div className='grid grid-cols-3 w-full divide-x mb-[3rem] pt-[2rem]'>
                    <div><h1>85</h1>Years of Experience</div>
                    <div><h1>$700+</h1>Average Annual Savings*</div>
                    <div><h1>97%</h1>Customer Satisfaction Rating*</div>
                </div>
            </section>
            <div id='mobilepanel' className='flex pt-10 justify-between pb-10 border-b-2'>
                <div className='w-1/3'>
                    <h1>The #1 Rated Insurance App</h1>
                    <h3>The DINOCO Mobile app gives you peace of mind at your fingertips.</h3>
                    <p className='flex font-medium'> <FaCheck color='green' />Get ID cards</p>
                    <p className='flex font-medium'>  <FaCheck color='green' />Call for roadside assistance</p>
                    <p className='flex font-medium'> <FaCheck color='green' />File a claim</p>
                    <p className='flex font-medium'>  <FaCheck color='green' />Pay your bill</p>
                    <button className='border-2 bg-indigo-500 text-white font-bold p-6 rounded-2xl'>Download Now</button>
                </div>
                <div className='dot'>
                    <img className='relative left-[17.5%] top-[17.5%]' src={mobileapp} alt="Lizard Mobile App" width={200} height={200} />
                </div>
            </div>
            <div id='mobilepanel' className='flex pt-10 justify-between pb-10 border-b-2'>
                <div className='dot'>
                    <img className='relative left-[17.5%] top-[17.5%]' src={living} alt="Lizard Mobile App" width={200} height={200} />
                </div>
                <div className='w-1/3 space-y-4 m-4'>
                    <h1>Explore DINOCO Living</h1>
                    <h3>Articles and more for your reading pleasure.</h3>
                    <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Driving and Safety Tips</div>
                    <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Saving Money</div>
                    <div className='border-2 border-indigo-800 lg:rounded-3xl p-8'>Protect Your Home</div>
                </div>
            </div>
                <p className='rounded-3xl text-sm bg-slate-100 p-10 w-[80%] self-center'>
                    *Some discounts, coverages, payment plans and features are not available in all states or all DINOCO companies.
                    Average savings amount based on national DINOCO New Policyholder survey data through January 2024.
                    Customer satisfaction based on an independent study conducted by Alan Newman Research, 2023.
                    The DINOCO App and site received #1 rankings according to Forrester’s 2021 US Mobile Auto Insurance Functionality Benchmark.
                    DINOCO is a registered service mark of Government Employees Insurance Company, Washington, D.C. 20076; a Berkshire Hathaway Inc. subsidiary. ©2024 DINOCO.
                </p>
        </div>
    )
}
