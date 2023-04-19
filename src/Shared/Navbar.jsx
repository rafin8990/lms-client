import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className=' lg:w-[1440px] mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-base-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                user?.uid ?
                                    <>
                                        <li ><Link to='/'>Home</Link></li>
                                        <li onClick={logOut} className='btn btn-success btn-sm btn-outline text-base-300 mt-2'>Log Out</li>
                                    </>
                                    :
                                    <li ><Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <Link to='/' className="btn btn-ghost normal-case text-xl text-base-100">SA LMS</Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user?.uid ?
                                <>
                                    <li className='text-base-100 mr-5 mt-3'>{user?.displayName}</li>
                                    <li onClick={logOut} className='btn btn-success btn-sm btn-outline rounded-lg mt-3'>Log Out</li>
                                </>
                                :
                                <li className='text-base-300'><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;