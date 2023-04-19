import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-base-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><a>Home</a></li>
                            <li ><a>Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <a className="btn btn-ghost normal-case text-xl text-base-100">SA LMS</a>
                    </div>
                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div> */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-base-100'><a>Home</a></li>
                        <li className='text-base-100'><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;