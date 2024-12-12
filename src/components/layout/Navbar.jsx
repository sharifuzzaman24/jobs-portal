import React, { useContext } from 'react';
import logo from '../../assets/job-portal.png'
import { Link } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    return (
        <div className="navbar w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to={'/'} className="flex items-center">
                    <img className='w-14' src={logo} alt="" />
                    <p className='text-[#05264E] text-xl font-bold'>Job Portal</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={logOut} className="bg-red-600 text-white px-5 py-[10px] rounded-lg">Logout</button>:<div className='flex items-center gap-3'>
                    <Link to={'/register'} className="text-[#05264E] underline hover:text-[#3c65f5]">Register</Link>
                    <Link to={'/login'} className="bg-[#3C65F5] text-white px-5 py-[10px] rounded-lg">Login</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;