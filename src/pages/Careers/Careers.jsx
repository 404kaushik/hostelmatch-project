import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import pic1 from '../../assets/careers-1.jpg';
import pic2 from '../../assets/careers-2.jpg';
import pic26 from '../../assets/world.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLightbulb } from '@fortawesome/free-solid-svg-icons'; 
import JobCard from './components/JobCard';


const CareersPage = () => {
    const handleDetailsClick = () => {
        // Handle the click event for the 'View Details' button
        console.log('View Details clicked');
    };

    return(
        <div className="">
            <div className="relative">
                <div class="max-w-full h-auto">
                    <img src={pic1} class="h-64 object-cover md:h-[439px] w-full"/>
                </div>               
                <div class="max-w-7xl mx-auto h-36 md:h-52 absolute inset-0 top-20 flex flex-col">
                    <h1 class="text-2xl md:text-5xl font-poppins text-white font-semibold" >We Love Remote <br/>Work</h1>
                    <button class="w-[154px] h-[32.25px] md:w-[330px] md:h-[61.32px] rounded-[46px] bg-white font-poppins absolute bottom-0 text-xs md:text-base">Join Our Team</button>
                </div>
            
            </div>
            <div className="max-w-7xl mx-auto mt-4">
                <p class="text-bold font-poppins">
                    Home -{'>'} Careers
                </p>
            </div>
            <div className="max-w-7xl mx-auto p-8">
                <h1 class="text-sun-300 text-2xl md:text-4xl font-bold font-poppins ">
                    Work From Anywhere
                </h1>
                <p class="text-xs md:text-base md:mt-3 leading-8 font-poppins ">
                    We are travellers first and our lover for travel is what unites us.
                    <br />
                    <br />
                    We're a group of talented, passionate individuals located around the world. Not afraid to innovate or try new things, we're committed to using technology to simplify the hostel discovery experience.
                    <br />
                    <br />
                    At Hostelmatch, we encourage individuals to work remotely and explore the world like a local. We take care of out physical and mental health and encourage our teammates to do the same. We are driven by curosity and are excited to tackle hard, unfamiliar problems. We set ambitious goals and are motivated to acheve them no matter where we work from.
                    <br />
                    <br />
                    Our mission is to create a world where anyone can embrace their uniqueness.
                </p>
                <h1 class="text-sun-300 text-2xl md:text-4xl font-bold font-poppins mt-5 text-center md:text-left">
                Our Core Values
                </h1>
                <div class="mt-5">
                    <div class="grid md:grid-cols-1 space-y-8">
                        <div class="flex flex-col md:flex-row items-center p-4 bg-[#CA76CC] rounded-[16px] text-white">
                            <div class="text-4xl md:text-9xl font-medium font-poppins mr-4 md:p-4 md:ml-20 hidden md:block">01</div>
                            <div class="flex flex-col justify-end items-end w-full">
                                <div class="text-center md:w-[55%] md:mb-4 md:mr-20"> 
                                    <h1 class="font-normal md:font-bold font-poppins text-2xl md:text-4xl my-2">Community Driven</h1>                                    
                                    <p class="mt-3 p-2 font-poppins text-xs md:text-2xl">We're focused on making backpacker's lives better where they can embrace their uniqueness</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center p-4 bg-[#4BC1A7] rounded-[16px] text-white">
                            <div class="text-4xl md:text-9xl font-medium font-poppins mr-4 md:p-4 md:ml-20 hidden md:block">02</div>
                            <div class="flex flex-col justify-end items-end w-full">
                                <div class="text-center md:w-[55%] md:mb-4 md:mr-20">
                                    <h1 class="font-normal md:font-bold font-poppins text-2xl md:text-4xl my-2">Embrace the Journey</h1>
                                    <p class="mt-3 p-2 font-poppins text-xs md:text-2xl">We're humble, creative and willing to learn from those around us</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center p-4 bg-[#E78C2F] rounded-[16px] text-white">
                            <div class="text-4xl md:text-9xl font-medium font-poppins mr-4 md:p-4 md:ml-20 hidden md:block">03</div>                        
                            <div class="flex flex-col justify-end items-end w-full">
                                <div class="text-center md:w-[55%] md:mb-4 md:mr-20">
                                    <h1 class="font-normal md:font-bold font-poppins text-2xl md:text-4xl my-2">Simplifying Travel</h1>
                                    <p class="mt-3 p-2 font-poppins text-xs md:text-2xl">We build things that make travel easy and approachable</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center p-4 bg-[#00529C] rounded-[16px] text-white">
                            <div class="text-4xl md:text-9xl font-medium font-poppins mr-4 md:p-4 md:ml-20 hidden md:block">04</div>
                            <div class="flex flex-col justify-end items-end w-full">
                                <div class="text-center md:w-[55%] md:mb-4 md:mr-20">
                                    <h1 class="font-normal md:font-bold font-poppins text-2xl md:text-4xl my-2">Emphasizing Respect</h1>
                                    <p class="mt-3 p-2 font-poppins text-xs md:text-2xl">We encourage respect and kindness amongst our team and customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                 
            <div className="max-w-7xl mx-auto p-8">    
                <h1 class="text-sun-300 text-2xl md:text-4xl font-bold font-poppins text-center md:text-left">
                    We Encourage Diversity
                </h1>
                <p class="text-xs md:text-base mt-3 font-poppins leading-8">
                    Hostelmatch values diversity & belonging and is proud to be an Equal Employment Opportunity employer. All individuals seeking employment at Hostelmatch are considered without regard to race, colour, religion, national origin, age, sex, marital status, ancestry, physical or mental disability, veteran status, gender identity, sexual orientation, or any other legally protected characteristic. <br/><br/> We are committed to providing reasonable accommodations for qualified applicants with disabilities in our job application and recruitment process.
                    <br />                                
                </p>
            </div>
            <div className="relative mt-6">
                <div class="">
                    <img src={pic2} class="h-64 object-cover md:h-96 w-full"/>
                </div>                
                <div class="max-w-7xl mx-auto h-36 md:h-52 absolute inset-0 top-20 flex flex-col p-8">
                    <h1 class="text-3xl md:text-6xl font-poppins text-white font-semibold mt-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>Open Roles</h1>
                </div>             
            </div>
            <div className="">
                <div className="container mx-auto px-4">
                    <JobCard
                    jobLetter="E"
                    jobDept="Engineering"
                    jobTitle="Fresher UI/UX Designer"
                    location="Remote"
                    jobType="Full Time"
                    onDetailsClick={handleDetailsClick}
                    />
                    <JobCard
                    jobLetter="M"
                    jobDept="Marketing"
                    jobTitle="Marketing Manager"
                    location="Remote"
                    jobType="Full Time"
                    onDetailsClick={handleDetailsClick}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center md:mt-8 py-5">
                <button className="text-black bg-[#FEC446] hover:text-white hover:bg-sun-400 focus:ring-4 focus:ring-blue-300 rounded-lg font-poppins font-bold md:font-normal text-sm md:text-lg px-9 py-3 md:py-5 mt-4 md:mt-0 self-start md:self-center">View More <FontAwesomeIcon icon={faMagnifyingGlass} /></button>                
            </div>
            <div className="py-16 md:py-16 ">
                <div className="flex flex-col md:flex-row items-center justify-center">            
                    <img src={pic26} alt="" className="w-64 h-22 md:w-72 md:h-60 " />                            
                    <div className="text-center flex flex-col items-center justify-center lg:py-3 md:space-y-5">
                        <h1 className="text-sun-300 text-2xl md:text-5xl font-bold font-poppins tracking-wider mt-5 md:p-3">Stay In The Know!</h1>
                        <p className="text-xs md:text-xl font-poppins font-thin m-2 md:ml-4">
                            Stay up to date on the latest and greatest, <br/> get special newsletter member discounts and lots of inspiration
                        </p>
                        <div className="w-full">
                            <div className="relative flex items-center justify-center w-full max-w-lg md:max-w-4xl m-2">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="border-2 text-xs md:text-lg font-poppins border-yellow-400 rounded-l-full md:rounded-l-lg px-4 md:px-4 py-2 w-3/4 md:w-3/4 lg:w-full h-8 md:h-12 focus:outline-none focus:border-2 focus:border-sun-400"
                                />
                                <button 
                                    className="h-8 md:h-12 bg-[#FEC446] hover:bg-sun-400 text-black text-[0.5rem] text-center md:text-sm font-poppins font-bold py-2 px-2 md:px-6 lg:px-8 rounded-r-full md:rounded-r-lg"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen md:h-[259px] flex flex-col items-center justify-center text-center bg-[#FCB0A3] p-3 md:p-6 md:mb-12">
                <div className="">
                    <FontAwesomeIcon icon={faLightbulb} className="text-4xl" />
                </div>
                <div className="max-w-[1217px]">
                    <div className="text-lg md:text-4xl font-bold font-poppins p-2">Questions about joining Hostelmatch?</div>
                    <div className="w-full md:w-11/12 text-xs md:text-2xl font-poppins px-4 md:px-5 py-2 md:py-4">
                        Please email us at <span className='font-semibold text-xs md:text-2xl'>info@hostelmatch.com</span> and we’re happy to answer any questions you have. And if you’re interested in applying, please send over your resume or your LinkedIn profile as well.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;