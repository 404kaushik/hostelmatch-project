
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
// require('dotenv').config()
import Preview from "../components/Preview";
import Spinner from "../components/Spinner";
import OnefamBanner from "../components/OnefamBanner";
import OnefamBannerMobile from "../components/OnefamBannerMobile";

const HostelsList = (p) => {

    let { city, travellerType, hostelType, startDate, endDate } = useParams();
    const [hostelsList, sethostelsList] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [loadMore, setloadMore] = useState(false);
    const [showGetAll, setShowGetAll] = useState(false);
    const [totalHostels, setTotalHostels] = useState("");
    const [showHostelsFound, setShowHostelsFound] = useState(false);

    // const backend_url = process.env.BACKEND_URL;
    // console.log("backend_url",backend_url)

    //FIXME: URL should come from .env
    //FIXME: configure LOADMORE functionality
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    document.title = "HostelHop | " + city;

    let params = { "city": city, "travellerType": travellerType, "hostelType": hostelType, "startDate": startDate, "endDate": endDate }
    useEffect(() => {
        axios.get("/hostels", { params: params })
            .then(response => {
                sethostelsList(response.data.data);
                setTotalHostels(response.data.totalHostels);
                if (totalHostels > hostelsList.length) { setShowGetAll(true); }
                if (response.data.data.length == 0) { setShowHostelsFound(true) }
                setSpinner(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // toast.error('Error: ' + error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // });
            });
    }, [totalHostels]);

    const getAllHostels = () => {
        params = { "city": city, "startDate": startDate, "endDate": endDate }
        axios.get("/hostels/all", { params: params })
            .then(response => {
                sethostelsList(response.data.data);
                setSpinner(false)
                setShowGetAll(false)
                setShowHostelsFound(false)
            })
            .catch(error => {
                console.error('Error fetching all hostels data:', error);
                // toast.error('Error: ' + error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // });
            });
    }



    return (
        <div>

            {city == "Madrid" || city == "Seville" || city == "Barcelona" ?
                <div className="hidden md:block">
                    <OnefamBanner />
                </div>
                : null
            }
            {city == "Madrid" || city == "Seville" || city == "Barcelona" ?
                <div className="md:hidden">
                    <OnefamBannerMobile />
                </div>
                : null
            }


            <div class="flex flex-col gap-8 px-4 py-6 sm:px-8">
                {/* ONE FAM BANNER */}

                <div class="text-center font-bold text-3xl sm:text-left">Hostels in {city}: {totalHostels}</div>
                {/* <div class="text-center  text-xl sm:text-left">Total Hostels: {totalHostels}</div> */}
                {showHostelsFound ? <div class="text-center  text-l sm:text-left">No hostels found for your search</div> : null}
                <div class="flex flex-col gap-8">


                    {hostelsList.map((hostel) => (
                        <Preview
                            key={hostel.id} // Make sure to provide a unique key when rendering a list of components
                            id={hostel.id}
                            name={hostel.name}
                            image={hostel.image}
                            travellerType={hostel.travellerType}
                            hostelType={hostel.hostelType}
                            hw_url={hostel.hw_url}
                            booking_url={hostel.booking_url}
                            // urls={hostel.urls}
                            reviewCount={hostel.reviewCount}
                            rating={hostel.rating}
                            onSelect={p.onSelect}
                            lowestAveragePricePerNight={hostel.lowestAveragePricePerNight}
                            lowestAveragePrivatePricePerNight={hostel.lowestAveragePrivatePricePerNight}
                        ></Preview>)
                    )}
                </div>
                {
                    spinner ?
                        <div class="flex justify-center items-center">
                            <Spinner />
                        </div> : null
                }
                {
                    showGetAll ?
                        <button
                            class="bg-black text-white rounded-full py-1 px-16 w-fit"
                            onClick={getAllHostels}
                        >
                            Get All Hostels
                        </button> : null
                }

                {/* {loadMore ?
                <button
                    class="bg-black text-white rounded-full py-1 px-16 w-fit self-center"
                    // onClick={onLoadMore}
                >
                    Load More
                </button>
                : null} */}
            </div >
        </div>
    );
}

export default HostelsList;