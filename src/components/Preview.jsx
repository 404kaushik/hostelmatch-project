import { Link } from "react-router-dom";
import RatingBadge from "./RatingBadge";
import { useNavigate } from 'react-router-dom';
import UseAnalyticsEventTracker from "../services/Analytics";

const Preview = (p) => {
    const navigate = useNavigate();
    const onSelect = (e) => {
        if (e.target.tagName === 'A') {
            UseAnalyticsEventTracker({ "category": "Hostels List Page", "action": "Hostel URL Button Click", "label": p.name })
            return;
        }
        UseAnalyticsEventTracker({ "category": "Hostels List Page", "action": "Hostel Button Click", "label": p.name })
        navigate('/hostels/' + p.id, { state: p });

    };

    return (
        <div
            class="flex flex-col bg-sun-100 rounded-xl sm:flex-row"
            onClick={onSelect}
        >
            <img src={p.image} class="w-full lg:w-64 md:w-64 sm:w-fit sm:h-40 rounded-xl cursor-pointer" />
            {/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/374992419.jpg?k=6c25a5880503f97c92ec82ddbc9be4613cd7f33a2dc431d379980dacb0a8c70d&o=&hp=1" class="w-full sm:w-fit sm:h-48 rounded-xl cursor-pointer" /> */}

            <div class="flex flex-col p-4 gap-1  sm:h-auto">
                <div class="font-semibold flex items-center justify-between cursor-pointer">
                    {p.name}
                    <div
                        class="bg-sun-300 text-sm font-semibold rounded-full flex items-center justify-center w-10 h-10 sm:hidden"
                    >
                        {p.rating ? (p.rating * 1).toFixed(1) : '-'}
                    </div>
                </div>

                <div class="flex gap-1 mt-2 text-gray-800 cursor-pointer">
                    <span class="hidden">Traveller Type:</span>
                    <span class="">{p.travellerType.join(", ")}</span>
                    {/* <span class="">TRAVELLER TYPE</span> */}
                </div>
                <div class="flex gap-1 text-gray-800">
                    <span class="hidden">Hostel Type:</span>
                    <span class="">{p.hostelType.join(", ")}</span>
                    {/* <span class="">HOSTEL TYPE</span> */}
                </div>
                <div class="flex flex row sm:hidden">
                    <div class="border-2 border-sun-300 p-2  w-full">
                        <p class="font-bold">Dorms</p>
                        <p class="font-bold text-sun-500">C${p.lowestAveragePricePerNight ? p.lowestAveragePricePerNight : "  -" }</p>
                    </div>
                    <div class="border-2 border-sun-300  p-2 w-full">
                        <p class="font-bold">Privates</p>
                        <p class="font-bold text-sun-500">C${p.lowestAveragePrivatePricePerNight ? p.lowestAveragePrivatePricePerNight : "  -"}</p>
                    </div>
                </div>

                {/* <div class="flex gap-4 mt-auto">
                    <a
                        // href={p.urls.hostelworld}
                        href={p.hw_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-semibold block border border-black py-1  text-center w-48 rounded-xl cursor-pointer"
                    > Hostelworld </a>
                    <a
                        href={p.booking_url}
                        // href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-semibold block border border-black py-1 text-center w-48 rounded-xl cursor-pointer"
                    > Booking.com </a>
                </div> */}
            </div>
            <div class="flex flex-col hidden justify-center items-center ml-auto sm:flex cursor-pointer" >
                <RatingBadge reviewCount={p.reviewCount} rating={p.rating} />
                <div class="flex flex row">
                    <div class="border-2 border-sun-300 p-2  w-full">
                        <p class="font-bold">Dorms</p>
                        <p class="font-bold text-sun-500">C${p.lowestAveragePricePerNight ? p.lowestAveragePricePerNight : "  -" }</p>
                    </div>
                    <div class="border-2 border-sun-300  p-2 w-full">
                        <p class="font-bold">Privates</p>
                        <p class="font-bold text-sun-500">C${p.lowestAveragePrivatePricePerNight ? p.lowestAveragePrivatePricePerNight : "  -"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;