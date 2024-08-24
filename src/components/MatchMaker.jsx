import { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import DoubleDropdown from '../pages/Home/Components/DoubleDropdownCountry';
import DateRangePicker from './DatePicker';
import '../components/MatchMaker.css';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange'; 
import ImageSlider from './ImageSlider';

const MatchMaker = (props) => {
    const [state, setState] = useState({
        city: null,
        travelerType: null,
        hostelType: null,
        startDate: null,
        endDate: null
    });
    
    const onCitySelect = (city) => {
        if (city !== 'Other') {
            setState((prevState) => ({
                ...prevState,
                city: city,
            }));
        } else {
            const body = encodeURIComponent([
                'Hello hostelhop,',
                '[details about your trip]',
                'Sincerely, [Your Name]'
            ].join('\n\n'));

            const href = "mailto:hello@hostelhop.net?subject=[your destination]&body=" + body;
            window.open(href, '_blank');
        }
    };

    return (
        <div>
            <div className="max-w-full relative">
                <ImageSlider />
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="text-center space-y-2 md:space-y-5">
                        <p
                            className="text-3xl md:text-5xl text-white font-poppins font-bold tracking-wide slide-text transition-opacity duration-500"
                        >
                            Find Your Hostel
                        </p>
                        <h3 className="text-sm md:text-4xl text-white font-poppins tracking-wide font-bold md:font-normal slide-text transition-opacity duration-500">
                            Get the perfect hostel that matches your vibe!
                        </h3>
                        {/* MATCHMAKER CONTAINER*/}
                        <div className="flex flex-col gap-8 px-4 sm:px-8 sm:mb-12">
                            <div className="grid grid-cols-2 md:flex md:flex-row gap-6 w-[340px] h-[200px] md:h-auto md:w-full lg:w-[1242px] relative bg-sun-300 items-center mt-6 p-5 rounded-xl mx-4 max-w-screen-xl">
                                <div className='w-full lg:w-1/4 flex-1 min-h-full'>
                                    <DoubleDropdown
                                        text="Where"
                                        onSelect={onCitySelect}
                                    />
                                </div>

                                <div className='w-full lg:w-1/4 flex-1 min-h-full whitespace-nowrap'>
                                    <Dropdown
                                        text="Traveler type"
                                        items={[
                                            { text: 'Solo Traveler', value: 'Solo Traveler' },
                                            { text: 'Female Solo Traveler', value: 'Female Solo Traveler' },
                                            { text: 'Family', value: 'Family' },
                                            { text: 'Digital Nomad', value: 'Digital Nomad' },
                                            { text: 'Groups (4+ people)', value: 'Groups (4+ people)' },
                                            { text: 'Couples', value: 'Couples' },
                                            { text: 'Older Traveler (50+ years)', value: 'Older Traveler (50+ years)' },
                                        ]}
                                        onSelect={travelerType => setState((prevState) => ({
                                            ...prevState,
                                            travelerType: travelerType,
                                        }))}
                                    />
                                </div>
                                <div className='w-full lg:w-1/4 flex-1 min-h-full whitespace-nowrap'>

                                    <Dropdown
                                        text="Hostel Vibe"
                                        items={[
                                            { text: 'Peaceful Retreat', value: 'Peaceful Retreat' },
                                            { text: 'Party Central', value: 'Party Central' },
                                            { text: 'Artsy Immersion', value: 'Artsy Immersion' },
                                            { text: 'Social Paradise', value: 'Social Paradise' },
                                            { text: 'Digital Nomad Haven', value: 'Digital Nomad Haven' },
                                            { text: 'Wallet Friendly Bargain', value: 'Wallet Friendly Bargain' },
                                            { text: 'Private Room', value: 'Private Room' },
                                            { text: 'Beachside Bliss', value: 'Beachside Bliss' },
                                            { text: 'Outdoor Excursions', value: 'Outdoor Excursions' },
                                            { text: 'Women Only Wing', value: 'Women Only Wing' }
                                        ]}
                                        onSelect={hostelType => setState((prevState) => ({
                                            ...prevState,
                                            hostelType: hostelType,
                                        }))}
                                    />
                                </div>

                                <div className='w-full lg:w-1/4 flex-1 min-h-full'>
                                    <DateRangePicker
                                        onSelect={dates =>
                                            setState((prevState) => ({
                                                ...prevState,
                                                startDate: dates.startDate,
                                                endDate: dates.endDate,
                                            }))
                                        }
                                    />
                                </div>

                                <button
                                    className="col-span-2 md:col-span-auto bg-black text-white rounded-[45px] md:rounded-xl py-3 md:py-5 px-5 self-center w-full md:w-[120px] lg:w-fit"
                                    disabled={state.city !== null && state.hostelType !== null && state.travelerType !== null}
                                    onClick={() => {
                                        console.log(state)
                                        // props.onMatchMe?.(state())
                                    }}
                                >
                                    {state.city !== null && state.hostelType !== null && state.travelerType !== null && state.startDate !== null && state.endDate !== null ?
                                        <Link to={'hostels/' + state.city + '/' + state.travelerType + '/' + state.hostelType + '/' + state.startDate + '/' + state.endDate}>
                                            Match Me
                                        </Link> : "Match Me"}
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center">
                            <div className="w-[360px] h-14 text-center md:flex md:items-center md:justify-center font-sans rounded-[16px] text-white text-sm bg-[#5B5F62] mt-4">
                                Don't see your destination? Consult our travel expert
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* MATCH MAKER CONTAINER */}
        </div>
    );
};

export default MatchMaker;