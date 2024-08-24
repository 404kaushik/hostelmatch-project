import React, { useState } from 'react';
import hostelhopSvg from "../assets/hostelmatch.png";
import { googleLogout } from '@react-oauth/google';

const Header = () => {

    const [menu, setMenu] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const onToggleMenu = () => {
        setMenu(!menu);
    }

    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    
    const logout = () => {
        localStorage.removeItem("token")
        if (user.google_id){
           googleLogout()
        }
        localStorage.removeItem("user")

        //to reload header
        window.location.reload();
    }
    // FIXME: on menu open on sm screens, it appears weird
    return (
        <div className="flex flex-col-reverse">
            <header className="w-full h-16 bg-[#FFFF] drop-shadow-md">
                <div className="container h-full mx-auto max-w-8xl flex justify-between items-center">
                    <a className="flex items-center ml-3 " href="/">
                        <img src={hostelhopSvg} alt="HostelHop" className="w-50 h-10" />
                    </a>
                    <ul id="menu"
                        className={[
                            menu ? 'flex flex-col justify-center items-center space-y-3 font-medium h-screen w-screen ' : 'hidden',
                            'fixed top-0 right-0 lg:px-10 py-16 bg-gin-50 text-gin-950 p-3',
                            'sm:relative sm:flex sm:bg-transparent',
                            'sm:flex-row sm:gap-5 lg:gap-8 ',
                            // 'sm:h-screen sm:w-full'
                            // "w-full h-screen fixed top-0 right-0 px-10 py-16 bg-gin-50 text-gin-950 z-50 sm:relative sm:flex sm:py-0 sm:bg-transparent sm:flex-row sm:space-x-6"

                        ].join(' ')}>

                        <li className="sm:hidden z-90 fixed top-4 right-6">
                            <a href="#" className="text-right text-4xl"
                                onClick={() => { onToggleMenu() }}>&times;</a>
                        </li>

                        <li>
                            <a
                                onClick={() => { onToggleMenu() }}
                                className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm" href="/">Home</a>
                        </li>
                        <li>
                            <a
                                onClick={() => { onToggleMenu() }}
                                className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm whitespace-nowrap" href="/aboutus">About Us</a>
                        </li>
                        <li>
                            <a
                                onClick={() => { onToggleMenu() }}
                                className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm whitespace-nowrap" href="/add-your-listing">Add your Listing</a>
                        </li>
                        <li>
                            <a
                                onClick={() => { }}
                                className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm" href="https://www.hostelhop.blog/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Blog</a>
                        </li>
                        <li>
                            <a
                                onClick={() => { onToggleMenu() }}
                                className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm" href="/careers">Careers</a>
                        </li>
                        <li>
                            {
                                token ?
                                    <div>
                                        <a
                                            onClick={() => { setProfileDropdown(!profileDropdown) }}
                                            className="hover:text-gin-600 duration-150 cursor-pointer"
                                        >
                                            {user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()}
                                        </a>
                                        {
                                            profileDropdown ?
                                                <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md">
                                                    <div className="p-2 cursor-pointer" >
                                                        <a
                                                            onClick={() => { onToggleMenu() }}
                                                            className="hover:text-gin-600 duration-150" href="/edit_profile">Edit Profile</a>

                                                    </div>
                                                    <div onClick={logout} className="p-2 cursor-pointer hover:text-gin-600 duration-150">
                                                        Logout
                                                    </div>
                                                </div> : null}
                                    </div> :
                                    <a
                                        onClick={() => { }}
                                        className="hover:text-gin-600 duration-150 text-lg sm:text-xs lg:text-sm" href="/login"
                                    >Login/Register
                                    </a>
                            }
                        </li>
                        {/* <li>
                            <a
                                onClick={() => { onToggleMenu() }}
                                className="hover:text-gin-600 duration-150" href="/join-the-waitlist">Join the Waitlist</a>
                        </li> */}
                    </ul>

                    <div className="flex h-16 pb-3 pr-1 items-center sm:hidden">
                        {!menu ?
                            <button className="text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                                onClick={() => { onToggleMenu() }}>
                                &#9776;
                            </button> : null}
                    </div>
                </div>
            </header>
        </div>
    )
};
export default Header;