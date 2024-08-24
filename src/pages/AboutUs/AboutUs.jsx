// AboutUsPage.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import pic1 from '../../assets/aboutUs-1.jpg';
import pic2 from '../../assets/aboutUs-2.png';
import pic3 from '../../assets/aboutUs-3.jpg';
import pic4 from '../../assets/aboutUs-4.jpg';
import pic5 from '../../assets/aboutUs-5.jpg';
import pic6 from '../../assets/aboutUs-6.jpg';
import pic7 from '../../assets/aboutUs-7.jpg';
import pic8 from '../../assets/aboutUs-8.jpg';
import pic9 from '../../assets/aboutUs-9.jpeg';
import pic10 from '../../assets/aboutUs-10.jpg';
import pic16 from '../../assets/feature-1.png';
import pic17 from '../../assets/feature-2.png';
import pic18 from '../../assets/feature-3.png';
import pic19 from '../../assets/feature-4.webp';
import pic20 from '../../assets/feature-5.svg.png';
import pic21 from '../../assets/partner-1.png';
import pic22 from '../../assets/partner-2.png';
import pic23 from '../../assets/partner-3.png';
import pic24 from '../../assets/partner-4.png';
import pic25 from '../../assets/onefam.png';
import pic26 from '../../assets/world.png';
import '../AboutUs/components/ImageSlider.css'


const AboutUsPage = () => {
    const scrollLeft = () => {
        document.getElementById('cards-container').scrollBy({
            left: -400, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    };

    // Function to handle right scroll
    const scrollRight = () => {
        document.getElementById('cards-container').scrollBy({
            left: 400, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    };

    return(
        <section className='hide-scrollbar'>
            <div class="relative ">
                <div class="w-full">
                    <img src={pic1} class="h-64 w-full object-cover md:h-[436px]"/>
                </div>                 
                <div class="max-w-7xl mx-auto h-36 md:h-36 absolute inset-0 top-12 md:top-32 text-white flex items-center justify-end text-right">
                    <h1 class="w-3/4 md:max-w-2xl text-2xl md:text-5xl font-poppins font-semibold mr-5" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>We help you find <br/>hostels that matches your Vibe.</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-4 p-2">
                <p class="text-bold font-poppins">
                    Home -{'>'} About Us
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="p-8">
                    <h1 class="text-sun-300 text-2xl md:text-[40px] font-bold font-poppins text-center md:text-left mt-3 md:mt-5">
                        Our Platform
                    </h1>
                    <div class="text-xs md:text-base md:mt-3 leading-8 font-poppins ">
                        Hostelmatch is a platform designed to help backpackers and digital nomads find the best hostels based on their preferences. Hostelmatch has a database of hostels that you will find on booking platforms like Hostelworld, Booking.com & Expedia and helps you figure out the best hostel based on your preferences. 
                        <br />
                        <br />
                        Hostelmatch allows you to browse, explore and book hostels, supported by our global partners. Our goal is to empower travelers in effortlessly planning and booking their hostel accommodations with certainty and ease. We simplify the decision making process through technology and enable connections with reliable partners for a transparent booking process.
                    </div>                    
                </div>               
                {/* {*******-------Commitment SECTION-------*******} */}  
                <div className="commitment-section-header flex justify-between items-center py-4 p-8 text-center md:text-left">
                    <h1 className="text-sun-300 text-2xl md:text-[40px] font-bold font-poppins text-center md:text-left mt-3 md:mt-5">
                        Our Commitment
                    </h1>
                    <div className="flex items-center gap-2">
                        <button
                            id="scroll-left"
                            className="bg-white text-black text-xl border-2 border-black rounded-full w-12 h-12 font-semibold hidden md:block"
                            onClick={scrollLeft}
                        >
                            &lt;
                        </button>
                        <button
                            id="scroll-right"
                            className="bg-[#FEC446] text-black text-xl rounded-full w-12 h-12 font-semibold hidden md:block"
                            onClick={scrollRight}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <div id="cards-container" className="relative flex overflow-x-auto space-x-4 hide-scrollbar px-7">
                    <div className="w-80 h-72 md:w-96 md:h-[27rem] shrink-0 bg-[#FEC446] grid grid-cols-1 rounded-[16px] shadow-md hover:shadow-2xl">
                        <div className="p-2">
                            <img src={pic4} alt="" className="w-full h-48 md:h-72 md:w-120 object-cover rounded-[16px]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }} />
                        </div>                        
                        <p className="text-base md:text-xl text-white rounded-b-lg text-center font-medium">Provide the best hostel discovery experience</p>
                    </div>
                    {/* Card 2 */}
                    <div className="w-80 h-72 md:w-96 md:h-[27rem] shrink-0 bg-[#E78C2F] grid grid-cols-1 rounded-[16px] shadow-md hover:shadow-2xl">
                        <div className="p-2">
                            <img src={pic5} alt="" className="w-full h-48 md:h-72 md:w-120 object-cover rounded-[16px]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }} />
                        </div>                        
                        <p className="text-base md:text-xl text-white rounded-b-lg text-center font-medium">Enable Backpackers to explore like a local</p>
                    </div>
                    {/* Card 3 */}
                    <div className="w-80 h-72 md:w-96 md:h-[27rem] shrink-0 bg-[#4BC1A7] grid grid-cols-1 rounded-[16px] shadow-md hover:shadow-2xl">
                        <div className="p-2">
                            <img src={pic6} alt="" className="w-full h-48 md:h-72 md:w-120 object-cover rounded-[16px]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }} />
                        </div>                        
                        <p className="text-base md:text-xl text-white rounded-b-lg text-center font-medium">Assist you in embracing your uniqueness</p>
                    </div>
                    {/* Card 4 */}
                    <div className="w-80 h-72 md:w-96 md:h-[27rem] shrink-0 bg-[#CA76CC] grid grid-cols-1 rounded-[16px] shadow-md hover:shadow-2xl">
                        <div className="p-2">
                            <img src={pic7} alt="" className="w-full h-48 md:h-72 md:w-120 object-cover rounded-[16px]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }} />
                        </div>                        
                        <p className="text-base md:text-xl text-white rounded-b-lg text-center font-medium">Provide transparency across the platform</p>
                    </div>                   
                    {/* Card 5 */}
                    <div className="w-80 h-72 md:w-96 md:h-[27rem] shrink-0 bg-[#00529C] grid grid-cols-1 rounded-[16px] shadow-md hover:shadow-2xl">
                        <div className="p-2">
                            <img src={pic3} alt="" className="w-full h-48 md:h-72 md:w-120 object-cover rounded-[16px]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }} />
                        </div>                        
                        <p className="text-base md:text-xl text-white rounded-b-lg text-center font-medium">Encourage lifelong friendships & connections</p>
                    </div>
                </div>            
                <div class="py-8 p-2 md:p-4">
                    <h2 class="text-xl sm:text-4xl font-poppins font-medium text-center mt-5 py-4">Featured In</h2>
                    <div class="w-full h-12 md:h-36 flex flex-wrap items-center rounded-[16px] justify-around border-2 md:border-4 border-[#FFD482] gap-4">
                        <img class="h-5 md:h-16 object-cover" src={pic16} alt="Logo 1" />
                        <img class="h-5 md:h-16 object-cover" src={pic17} alt="Logo 2" />
                        <img class="h-5 md:h-16 object-cover" src={pic18} alt="Logo 3" />
                        <img class="h-5 md:h-16 object-cover" src={pic19} alt="Logo 4" />
                        <img class="h-5 md:h-16 object-cover" src={pic20} alt="Logo 5" />
                    </div>
                </div>
                <div class="py-8 p-2 md:mt-8 md:p-4">
                    <h2 class='text-xl sm:text-4xl font-poppins font-medium text-center '>Partners</h2>
                    <p class="text-sm md:text-base text-center font-poppins p-4">We've been working with some of the biggest companies loved by travellers across the world. Here are some of them.</p>
                    <div class="w-full h-12 md:h-36 flex flex-wrap items-center rounded-[16px] justify-around border-2 md:border-4 border-[#FFD482] gap-2">
                        <img class="h-4 md:h-12 object-cover" src={pic22} alt="Logo 1" />
                        <img class="h-4 md:h-12 object-cover" src={pic23} alt="Logo 3" />
                        <img class="h-4 md:h-12 object-cover" src={pic24} alt="Logo 4" />
                        <img class="h-4 md:h-12 object-cover" src={pic21} alt="Logo 1" />
                        <img class="h-4 md:h-12 object-cover" src={pic25} alt="Logo 5" />                    
                    </div>
                </div>
                <div className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-center">            
                        <img src={pic26} alt="" className="w-64 h-22 md:w-72 md:h-60" />                            
                        <div className="text-center flex flex-col items-center justify-center lg:py-3 md:space-y-5">
                            <h1 className="text-sun-300 text-2xl md:text-5xl font-bold font-poppins tracking-wider mt-5 md:p-3">Stay In The Know!</h1>
                            <p className="text-base md:text-xl font-poppins font-thin m-2 md:ml-4">
                                Stay up to date on the latest and greatest, <br/> get special newsletter member discounts and lots of inspiration
                            </p>
                            <div className="w-full">
                                <div className="relative flex items-center justify-center w-full max-w-lg md:max-w-4xl m-2">
                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="border-2 text-xs md:text-xl font-poppins border-yellow-400 rounded-l-full md:rounded-l-lg px-4 md:px-4 py-2 w-3/4 md:w-3/4 lg:w-full h-8 md:h-12 focus:outline-none focus:border-2 focus:border-sun-400"
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
                <div className="w-full flex overflow-x-auto my-1 hide-scrollbar md:py-12">
                    <div className="flex md:flex-wrap space-x-2 md:space-x-4 px-4 hide-scrollbar gap-2 md:gap-8">
                        <div className="flex flex-col justify-between w-72 h-[25rem] md:w-96 md:h-[877px] shrink-0 bg-[#FCB0A3] rounded-xl p-1">
                            <div className="flex items-center justify-center md:h-4/6 p-1">
                                <img src={pic9} alt="" className="w-full h-64 md:h-full md:w-full object-cover rounded-xl"/>
                            </div>
                            <div className="font-poppins text-base md:text-3xl mb-1 text-black font-bold md:font-normal flex justify-center md:mt-5">Why Hostelmatch?</div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-black text-center p-2 md:p-8 mb-4 font-normal font-poppins text-xs md:text-2xl">
                                    Enabling you to discover your uniqueness. 
                                </p>
                                <button className="text-xs sm:text-2xl bg-white font-poppins hover:bg-gray-600 hover:text-white hover:font-semibold px-6 py-4 md:px-14 md:py-4 rounded-full transition duration-300 mb-6">
                                    How we're Different
                                </button>
                            </div>                        
                        </div>

                        <div className="flex flex-col justify-between w-72 h-[25rem] md:w-96 md:h-[877px] shrink-0 bg-[#FEC446] rounded-xl p-1">
                            <div className="flex items-center justify-center md:h-4/6 p-1">
                                <img src={pic8} alt="" className="w-full h-64 md:h-full md:w-full object-cover rounded-xl"/>
                            </div>
                            <div className="font-poppins text-base md:text-3xl mb-1 text-black font-bold md:font-normal flex justify-center md:mt-5">Our People</div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-black text-center p-2 md:p-8 mb-4 font-normal font-poppins text-xs md:text-2xl">
                                    Who we are, what we value & how we work?
                                </p>
                                <button className="text-xs sm:text-2xl bg-white font-poppins hover:bg-gray-600 hover:text-white hover:font-semibold px-6 py-4 md:px-14 md:py-4 rounded-full transition duration-300 mb-6">
                                    Join Our Team
                                </button>
                            </div>                        
                        </div>

                        <div className="flex flex-col justify-between w-72 h-[25rem] md:w-96 md:h-[877px] shrink-0 bg-[#CA76CC] rounded-xl p-1">
                            <div className="flex items-center justify-center md:h-4/6 p-1">
                                <img src={pic10} alt="" className="w-full h-64 md:h-full md:w-full object-cover object-top md:object-cover rounded-xl"/>
                            </div>
                            <div className="font-poppins text-base md:text-3xl mb-1 text-black font-bold md:font-normal flex justify-center md:mt-5">Our Media</div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-black text-center p-2 md:p-8 mb-4 font-normal font-poppins text-xs md:text-2xl">
                                    Our most trendy & up to date travel tips.
                                </p>
                                <button className="text-xs sm:text-2xl bg-white font-poppins hover:bg-gray-600 hover:text-white hover:font-semibold px-6 py-4 md:px-14 md:py-4 rounded-full transition duration-300 mb-6">
                                    Explore our blog
                                </button>
                            </div>                        
                        </div>
                    </div>                
                </div>
            </div>                    
            {/* {*******-------PARTNERS SECTION-------*******} */}            
        </section>
    );
};

export default AboutUsPage;