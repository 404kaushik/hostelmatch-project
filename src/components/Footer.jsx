import { useState } from "react";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import tiktok from "../assets/tiktok.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import pic1 from "../assets/hostelmatch.png"
import pic2 from "../assets/justlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = (p) => {
    return (
        <footer className="max-w-8xl bg-white dark:bg-gray-900 mx-auto">
    <div className="items-center mt-6 md:mt-0 block md:hidden">
        <h2 className="flex items-center justify-center mb-6 text-normal mr-4 text-center md:text-lg font-semibold font-poppins text-[#FEC446] dark:text-white">Subscribe to our newsletter!</h2>
        <form action="#" method="POST">
            <div className="flex items-center justify-center">
                <input type="text" className="w-[60%] h-[25%] p-2 text-sm text-gray-900 border-2 border-[#FEC446] rounded-l-md dark:text-white" placeholder="Get Travel tips & deals" />
                <button type="submit" className="flex items-center justify-center p-3 relative right-[10px] text-sm text-white bg-[#FEC446] rounded-r-md focus:outline-none focus:border-2 focus:border-sun-500">
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </button>
            </div>
        </form>
    </div>
    <div className="max-w-screen mx-auto md:flex md:justify-center md:items-center">
        <div className="w-[20%] hidden md:block md:ml-12">
            <div className="mb-4 ">
                <a href="#" className="">
                    <img src={pic1} className="w-48 -translate-y-6" alt="HostelHop Logo" />
                </a>
            </div>
            <div className="hidden md:block">
                <h2 className="mb-6 text-sm md:text-lg font-bold text-[#FEC446] font-poppins dark:text-white">Email</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="mailto:info@hostelmatch.com" className="hover:underline font-poppins text-base md:font-normal font-semibold">info@hostelmatch.com</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="md:px-16 md:flex md:justify-between md:items-center p-3 md:p-0">
            <div className="flex flex-row max-w-7xl mx-auto justify-between md:justify-center gap-6 md:gap-16 lg:gap-24 xl:gap-32 mt-6 ">
                <div className="">
                    <h2 className="mb-6 text-sm md:text-lg font-bold text-[#FEC446] font-poppins dark:text-white">Company</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/" className="hover:underline font-poppins text-[11px] font-semibold md:font-normal md:text-base">Product</a>
                        </li>
                        <li className="mb-4">
                            <a href="/aboutus" className="hover:underline font-poppins text-[11px] font-semibold md:font-normal md:text-base">About Us</a>
                        </li>
                        <li className="mb-4">
                            <a href="/careers" className="hover:underline font-poppins text-[11px] font-semibold md:font-normal md:text-base">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="/contactus" className="hover:underline font-poppins text-[11px] font-semibold md:font-normal md:text-base whitespace-nowrap">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="md:pl-14">
                    <h2 className="mb-6 text-sm md:text-lg font-bold font-poppins text-[#FEC446] dark:text-white">Legal</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/terms_and_conditions" target="_blank" rel="noopener noreferrer"className="hover:underline font-poppins w-full text-[10px] font-semibold md:font-normal md:text-base whitespace-nowrap">Terms & Conditions</a>
                        </li>
                        <li className="mb-4">
                            <a href="/privacy_policy" target="_blank" rel="noopener noreferrer" className="hover:underline font-poppins text-[10px] font-semibold md:font-normal md:text-base">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/cookie_policy" target="_blank" rel="noopener noreferrer" className="hover:underline font-poppins text-[10px] font-semibold md:font-normal md:text-base">Cookies Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:mt-0 hidden md:block">
                    <h2 className="mb-6 text-sm md:text-lg font-semibold text-center font-poppins text-[#FEC446] dark:text-white whitespace-nowrap">Subscribe to our newsletter!</h2>
                    <form action="#" method="POST">
                        <div className="flex">
                            <input type="text" className="h-14 md:w-44 lg:w-64 p-2 text-sm text-gray-900 border-2 border-[#FEC446] rounded-l-md focus:outline-none focus:border-2 focus:border-sun-400" placeholder="Get product updates" />
                            <button type="submit" className="flex items-center justify-center p-4 text-sm text-white bg-[#FEC446] rounded-r-md focus:outline-none focus:border-2 focus:border-sun-400">
                                <FontAwesomeIcon icon={faArrowRight} className="text-xl focus:outline-none focus:border-2 focus:border-sun-400" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="block md:hidden">
                    <h2 className="mb-6 text-sm md:text-lg font-semibold text-[#FEC446] font-poppins dark:text-white">Email</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="mailto:info@hostelmatch.com" className="hover:underline font-poppins text-[10px] font-semibold">info@hostelmatch.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <hr className=" border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-3" />
    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center mb-2 ">
        <div className="flex sm:justify-center">
            <a href="https://www.instagram.com/hostelmatch/" className="">
                <div className=" p-2">
                    <img src={instagram} className="w-6 md:w-8" alt="Instagram" />
                </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094127597891" className="">
                <div className="  p-2">
                    <img src={facebook} className="w-6 md:w-8" alt="Instagram" />
                </div>
            </a>
            <a href="https://www.tiktok.com/@hostelmatch" className="">
                <div className="  p-2">
                    <img src={tiktok} className="w-6 md:w-8" alt="TikTok" />
                </div>
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhostelmatch" className="">
                <div className="  p-2">
                    <img src={twitter} className="w-6 md:w-8" alt="Email" />
                </div>
            </a>
            <a href="https://www.linkedin.com/company/hostelmatch/" className="">
                <div className="  p-2">
                    <img src={linkedin} className="w-6 md:w-8" alt="Linkedin" />
                </div>
            </a>
            <a href="https://www.youtube.com/@hostelmatch" className="">
                <div className="  p-2">
                    <img src={youtube} className="w-6 md:w-8" alt="Linkedin" />
                </div>
            </a>
        </div>
        <span className="text-base text-black font-poppins text-center items-center dark:text-gray-400  hidden md:flex">A product of <img src={pic2} alt="HostelHop" className="w-6 ml-2 mb-2" /></span>
        <span className="text-base text-black font-poppins text-center dark:text-gray-400 hidden md:flex">© 2024 Hostelmatch Platform Ltd. All rights reserved.</span>
        <div className="block md:hidden">
            <div className="flex justify-center items-center">
                <span className="text-[13px] text-black sm:text-center flex items-center font-poppins dark:text-gray-400 mr-4">A product of <img src={pic1} alt="HostelHop" className="w-[120px] ml-2 mb-2" /></span>
            </div>
            <span className="text-[13px] md:text-[8px] text-black text-center flex items-center font-poppins dark:text-gray-400">© 2024 Hostelmatch Platform Ltd. All rights reserved.</span>
        </div>
    </div>
</footer>

    );
}

export default Footer;