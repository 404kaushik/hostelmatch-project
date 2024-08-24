import React, { useState } from 'react';
import pic1 from "../assets/hannah.jpg";
import pic2 from "../assets/lily.jpg";
import pic3 from "../assets/jake.jpg";


const ReviewSection = () => {
    const cardData = [
        {
            image: pic1,
            rectangleColor: 'bg-[#FEC446]',
            quote: '"Love Their Curated Recommendations"',
            testimonial: 'Hostelmatch allowed me to streamline my travel planning during my recent trip to the UK. With their curated recommendations, I was able to stay at hostels close to all the tourist attractions, and meet some like-minded travellers, all within my budget.',
            name: 'Hannah',
            ratingColor: 'text-[#FEC446]',
            location: 'Netherlands',
            locationcolor: 'text-[#FEC446]',
            leftButtonColor: 'bg-white',
            rightButtonColor: 'bg-[#FEC446]',
        },
        {
            image: pic2,
            rectangleColor: 'bg-[#4BC1A7]',
            quote: '"HostelMatch Cared About My Interests"',
            testimonial: 'HostelMatch helped me find a great and affordable hostel in Vancouver that was central to a lot of cafes and restaurants. They really took my interests and needs into consideration and I could not be happier with the expeirence.',
            name: 'Lily',
            ratingColor: 'text-[#4BC1A7]',
            location: 'United Kingdom',
            locationcolor: 'text-[#4BC1A7]',
            leftButtonColor: 'bg-white', 
            rightButtonColor: 'bg-[#4BC1A7]', 
        },
        {
            image: pic3,
            rectangleColor: 'bg-[#00529C]',
            quote: '"Saved Me Hours And Hours Of Research"',
            testimonial: 'What I like is their transparency on hostel amenities and what is available around. I found some really social hostels through HostelMatch for my trip to Barcelona and Lisbon and not have to spend time doing research on my own.',
            name: 'Jake',
            ratingColor: 'text-[#00529C]',
            location: 'Canada',
            locationcolor: 'text-[#00529C]',
            leftButtonColor: 'bg-white', 
            rightButtonColor: 'bg-[#00529C]', 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollLeft = () => {
        setCurrentIndex((currentIndex - 1 + cardData.length) % cardData.length);        
    };

    const scrollRight = () => {
        setCurrentIndex((currentIndex + 1) % cardData.length);
    };

    const currentCard = cardData[currentIndex];

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return(
        <div className="mt-8 md:py-24">
            <div className="mb-16">
                <div className="max-w-[469px] md:max-w-[68.875rem] mx-auto md:h-3/4 flex flex-row items-center justify-center md:gap-32">
                    <div className="w-[230px] h-[250px] md:w-[390px] md:h-[540.26px] mx-3 flex items-center justify-center ">
                        <img
                        src={currentCard.image}
                        alt=""
                        className="w-full h-full md:w-full md:h-full rounded-t-[245px] rounded-b-[245px] object-cover ml-8"
                        />
                    </div>
                    <div className="w-[228.39px] h-[227px] md:w-[537px] md:h-[461px] flex flex-col m-10 space-y-2 mb-20 md:mb-0">
                        <div className="h-12">
                            <div className={`${currentCard.rectangleColor} w-12 md:w-20 h-2.5 mb-5 rounded-lg hidden md:block`} />
                        </div>
                        <div className="">
                            <h3 className="text-sm md:text-4xl font-sans text-left m-2">
                                {currentCard.quote}
                            </h3>
                        </div>
                        <div className="w-full ">
                            <p className="text-[0.6rem] md:text-lg font-normal font-sans text-black text-left m-2 md:p-3">
                                {currentCard.testimonial}
                            </p>
                        </div>
                        <div className="text-xl hidden md:block">
                            <span className={`${currentCard.ratingColor}`}>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                            </span>
                        </div>
                        <h1 className="font-sans font-medium sm:font-normal text-base sm:text-lg mr-3 lg:text-xl">
                            {currentCard.name}{' '} <span className={`${currentCard.ratingColor} md:hidden`}>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                            </span>                       
                        </h1>
                        <p className={`text-[0.625rem] md:text-xs text-left font-medium ${currentCard.locationcolor}`}>
                            {currentCard.location}
                        </p>
                    </div>
                </div>
                <div className="md:w-[85%] flex justify-end gap-2 pr-4">
                    <button
                    id="scroll-left"
                    className={`text-black text-xs sm:text-xl border border-black rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 font-thin ${currentCard.leftButtonColor}`}
                    onClick={scrollLeft}
                    >
                    &lt;
                    </button>
                    <button
                    id="scroll-right"
                    className={`text-black text-xs sm:text-xl rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 font-thin ${currentCard.rightButtonColor}`}
                    onClick={scrollRight}
                    >
                    &gt;
                    </button>
                </div>
            </div>
        </div>
          
    )
}


export default ReviewSection;