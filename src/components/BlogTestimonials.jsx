import React, { useState } from 'react';
import pic26 from '../assets/world.png';
import useWindowSize from './useWindowSize';

const BlogTestimonials = () => {

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const size = useWindowSize();


    return (
        <div class="">
            <div className="max-w-7xl mx-auto py-4 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-center">            
                    <img src={pic26} alt="" className="w-64 h-22 md:w-80 md:h-64 object-contain" />                            
                    <div className="text-center flex flex-col items-center justify-center lg:py-3 md:space-y-5">
                        <h1 className="text-sun-300 text-2xl md:text-4xl font-bold font-sans tracking-wider mt-5 md:p-3">Stay In The Know!</h1>
                        <p className="text-xs md:text-xl font-sans font-thin m-2 md:ml-4">
                            Stay up to date on the latest and greatest, <br/> get special newsletter member discounts and lots of inspiration
                        </p>
                        <div className="w-full">
                            <div className="relative flex items-center justify-center w-full max-w-lg md:max-w-4xl m-2">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="border-2 text-xs md:text-xl font-sans border-yellow-400 rounded-l-full md:rounded-l-lg px-4 md:px-4 py-2 w-3/4 md:w-3/4 lg:w-full h-8 md:h-12"
                                />
                                <button 
                                    className="h-8 md:h-12 bg-[#FEC446] hover:bg-sun-400 text-black text-[0.5rem] text-center sm:text-sm font-sans font-bold py-2 px-2 md:px-6 lg:px-8 rounded-r-full md:rounded-r-lg"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto md:mt-4">
                <div className="text-center md:text-left p-2 md:mt-0 md:py-4">    
                    <h1 class="text-sun-300 text-3xl md:text-4xl font-bold font-sans mt-5 md:ml-6">
                        Hop On Our Blog
                    </h1>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between p-7 gap-y-6">                    
                    <div class="bg-[#FCB0A3] shadow-xl rounded-[16px] p-3 max-w-[24.125rem] max-h-[29.5rem]">
                        <div class="relative overflow-hidden">
                            <img class="w-full h-64 object-cover rounded-[16px]" src="https://media.istockphoto.com/id/1305789626/photo/spain-square-in-seville-spain-a-great-example-of-iberian-renaissance-architecture-during-a.webp?b=1&s=170667a&w=0&k=20&c=WzFprmIolVT2PHhrq8Oczu-VQ43vcUA6B6092GvPup0=" alt="Product" />
                        </div>
                        <div className="p-2">
                            <h3 class="text-base md:text-2xl font-sans font-bold md:font-normal text-gray-900 mt-4">Ultimate Travel Guide</h3>
                            <p className='font-sans text-sm italic'>Seville, Spain</p>
                        </div>
                        <div class="flex items-center justify-end  p-2">
                            <p class="text-sm font-sans flex-1 ">Seville is a beautiful Andalusian city located in the South of Spain, known for its..</p>
                            <a href="https://www.hostelhop.blog/post/as-one-of-the-big-cities-in-spain-barcelona-is-a-vibrant-city-known-for-its-stunning-architecture" target="_blank" rel="noopener noreferrer">
                                <button class="bg-gray-900 text-white py-2 px-4 text-sm m-2 rounded-full hover:bg-gray-800">Read More</button>
                            </a>
                        </div>
                    </div>
                    <div class={`bg-[#E78C2F] shadow-xl rounded-[16px] p-3 max-w-[24.125rem] max-h-[29.5rem]  ${showAll ? '' : 'hidden lg:block'}`}>
                        <div class="relative overflow-hidden">
                            <img class="w-full h-64 object-cover rounded-[16px]" src="https://w0.peakpx.com/wallpaper/459/92/HD-wallpaper-high-angle-of-black-bag-beside-cameras-portable-d-and-black-leather-lace-up-boots.jpg" alt="Product" />
                        </div>
                        <div className="p-2">
                            <h3 class="text-base md:text-2xl font-sans font-bold md:font-normal text-gray-900 mt-4">Solo Travel Essentials</h3>
                            <p className='font-sans text-sm italic'>Travel Essentials</p>
                        </div>
                        <div class="flex items-center justify-end p-2">
                            <p class="text-sm font-sans flex-1 ">Top 5 items which you must always carry on your solo trip but often tend to forget ...</p>
                            <a href="https://www.hostelhop.blog/post/essentials-to-take-on-your-first-solo-trip" target="_blank" rel="noopener noreferrer">
                                <button class="bg-gray-900 text-white py-2 px-4 text-sm m-2 rounded-full hover:bg-gray-800">Read More</button>
                            </a>
                        </div>
                    </div>
                    <div class={`bg-[#CA76CC] shadow-xl rounded-[16px] p-3 max-w-[24.125rem] max-h-[29.5rem] ${showAll ? '' : 'hidden lg:block'}`}>
                        <div class="relative overflow-hidden">
                            <img class="w-full h-64 object-cover rounded-[16px]" src="https://campwildhawk.com/wp-content/uploads/2023/09/pool-party-800x500.jpg" alt="Product" />                    
                        </div>
                        <div className="p-2">
                            <h3 class="text-base md:text-2xl font-sans font-bold md:font-normal text-gray-900 mt-4">Ultimate Hostel Experience</h3>
                            <p className='font-sans text-sm italic'>For Solo Travelers</p>
                        </div>
                        <div class="flex items-center justify-end p-2">
                            <p class="text-sm font-sans flex-1 ">As a solo traveler, you need to stay at hostels. The hostel experience is one of the best...</p>
                            <a href="https://www.hostelhop.blog/post/the-ultimate-hostel-experience-for-solo-travellers-what-to-expect-from-hostels-why-to-stay-there" target="_blank" rel="noopener noreferrer">
                                <button class="bg-gray-900 text-white py-2 px-4 text-sm m-2 rounded-full hover:bg-gray-800">Read More</button>
                            </a>
                        </div>
                    </div>            
                </div>
                <div className="flex justify-center lg:justify-end mt-6 lg:pr-14">
                    {size.width >= 1000 ? (
                        <a href="https://www.hostelhop.blog/blog" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#FEC446] px-6 py-2 rounded-[25px] text-sm md:text-base font-sans font-medium">
                            {showAll ? 'See less' : 'See all'}
                        </button>
                        </a>
                    ) : (
                        <button onClick={toggleShowAll} className="bg-[#FEC446] px-6 py-2 rounded-[25px] text-sm md:text-base font-sans font-medium">
                        {showAll ? 'See less' : 'See all'}
                        </button>
                    )}
                </div>
            </div>
        </div>

    )
}

export default BlogTestimonials;