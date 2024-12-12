import React from 'react';
import { FaSearch } from 'react-icons/fa';
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import { motion } from 'motion/react'

const Header = () => {
    return (
        <div className="hero min-h-screen w-4/5 mx-auto">
            <div className="hero-content flex-  lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img animate={{ y:[10, 100, 10]}} transition={{duration: 10, repeat: Infinity}} className='w-96 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#3C65F5]' src={team1} alt="" />
                    <motion.img animate={{ x:[150, 210, 150]}} transition={{duration: 10, repeat: Infinity}} className='w-72 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#3C65F5]' src={team2} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className="text-6xl font-bold text-[#05264E]">The <span className='text-[#3C65F5]'>Easiest Way</span> to Get Your New Job</h1>
                    <p className="py-6 text-lg font-semibold text-[#4F5E64]">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <div className="bg-white py-3 px-3 flex rounded-lg">



                        <div className='flex'>
                            <select defaultValue={1} className="select select-ghost">
                                <option value={1} disabled>In</option>
                                <option value={2}>Svelte</option>
                                <option value={3}>Vue</option>
                                <option value={4}>React</option>
                            </select>
                            <select defaultValue={1} className="select select-ghost">
                                <option value={1} disabled>L</option>
                                <option value={2}>Svelte</option>
                                <option value={3}>Vue</option>
                                <option value={4}>React</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder="Search" className="input input-ghost" />
                        </div>
                        <div>
                            <button className="flex items-center w-28 btn text-white bg-[#3C65F5]"><FaSearch />Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;