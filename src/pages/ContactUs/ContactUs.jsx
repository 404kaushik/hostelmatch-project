import React from "react";
import contactpic from '../../assets/contactus.jpg'
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import tiktok from "../../assets/tiktok.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"




const ContactUsPage = () => {
    return(
        <div className="flex flex-col md:flex-row md:h-screen mb-6">
            <div className="w-full md:w-1/2">
                <div className="md:h-full flex flex-col justify-center">
                    <div className="py-12">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-poppins text-center text-[#FEC446] mb-4 md:mt-8">Contact Us</h1>
                        <p className="text-xs md:text-sm lg:text-lg font-poppins text-center mb-8 md:ml-5">Reach out to us and we will respond as soon as possible.</p>            
                        <div className="flex items-center justify-center">
                            <form className='w-96 md:max-w-[649px] lg:w-[600px] border-2 border-[#FEC446] rounded-lg m-8 md:m-6 lg:m-0'>
                                <div className="flex items-center justify-center">
                                    <div className=" space-y-6 py-8">
                                        <div className="">
                                            <input type="text" placeholder="Name" className="w-64 lg:w-[500px] p-2 border border-[#FEC446] text-xs md:text-sm lg:text-lg font-poppins text-black rounded placeholder-slate-800 focus:outline-none focus:border-2 focus:border-sun-400" />
                                        </div>
                                        <div className="">
                                            <input type="email" placeholder="Email" className="w-64 lg:w-[500px] p-2 border border-[#FEC446] text-xs md:text-sm lg:text-lg font-poppins text-black  rounded placeholder-slate-800 focus:outline-none focus:border-2 focus:border-sun-400" />
                                        </div>
                                        <div className="">
                                            <input type="text" placeholder="Topic" className="w-64 lg:w-[500px] p-2 border border-[#FEC446] text-xs md:text-sm lg:text-lg font-poppins text-black  rounded placeholder-slate-800 focus:outline-none focus:border-2 focus:border-sun-400" />
                                        </div>
                                        <div className="">
                                            <textarea placeholder="How can we help you?" rows="4" className="w-64 lg:w-[500px] p-2 border border-[#FEC446] text-xs md:text-sm lg:text-lg font-poppins text-black  rounded placeholder-slate-800 focus:outline-none focus:border-2 focus:border-sun-400"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button type="submit" className="w-28 md:w-36 h-10 bg-[#FEC446] text-black font-poppins text-base lg:text-lg font-bold py-2">Submit</button>
                                </div>
                                <div className="flex items-center justify-center space-x-2 sm:justify-center py-4">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center max-w-3xl h-[55rem] mt-5 flex-1 ml-16">
                <img src={contactpic} className="h-full w-full object-cover"/>
            </div>
        </div>
    )

}



export default ContactUsPage;