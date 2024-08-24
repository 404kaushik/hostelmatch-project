import { useEffect, useState } from "react";
import Images from "../components/Images";
import RatingBadge from "../components/RatingBadge";
import BookHostel from "../components/BookHostel";
import ShowMore from "../components/ShowMore";
import Amenities from "../components/Amenities";
import Ratings from "../components/Ratings";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
import ReviewList from "../components/ReviewList";

const HostelDetail = () => {
    // const [reviews] = useState(hostel.getReviews);
    const { id } = useParams();
    const location = useLocation();
    // has dorm and pvt price from previous page
    const state = location.state;

    const [hostelDetail, sethostelDetail] = useState({});
    const [hostel, setHostel] = useState({});
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [reviewSpinner, setReviewSpinner] = useState(true);


    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios.get("/hostels/" + id)
            .then(response => {
                sethostelDetail(response.data.data);
                setHostel(response.data.hostel);
                document.title = "HostelHop | "+response.data.hostel.city+" | "+response.data.hostel.name;
                hostelDetail.urls = { "hw_url": response.data.hostel.hw_url, "booking_url": response.data.hostel.booking_url }
                setSpinner(false)

            })
            .catch(error => {
                setSpinner(false)
                console.error('Error fetching data:', error);
            });


        //getReviews
        axios.get("/hostels/reviews/" + id)
            .then(response => {
                setReviewSpinner(false)
                setReviews(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching reviews data:', error);
                setReviewSpinner(false)

            });
    }, []);

    return (
        <div class="sm:pl-[3rem] pb-6 sm:py-6  mx-auto">


            {spinner ? <Spinner /> : <div>
                {hostelDetail?.images?.length > 0 ?
                    <div class="sm:pr-[3rem] mb-6">
                        <Images images={hostelDetail.images} />
                    </div>
                    : null
                }

                <div class="flex flex-col gap-6 sm:flex-row">
                    {/* <div class="mr-auto"> */}
                    <div >
                        <div class="flex gap-2 px-4">
                            <div class="flex flex-col justify-center">
                                <div class="text-xl font-semibold"> {hostel.name} </div>
                                <div class="flex gap-1"> <MapIcon /> {hostelDetail.address} </div>
                            </div>
                            <div class="ml-auto sm:hidden">
                                <RatingBadge
                                    class="w-12 h-12"
                                    rating={hostel.rating}
                                    reviewCount={hostel.reviewCount}
                                />
                            </div >
                        </div>
                        <div class="px-4">
                            <div class="flex gap-1 mt-2 font-medium">
                                <span class="">Traveller Type:</span>
                                <span class="text-sun-400">{hostel.travellerType.join(", ")}</span>
                            </div>
                            <div class="flex gap-1 font-medium">
                                <span class="">Hostel Type:</span>
                                <span class="text-sun-400">{hostel.hostelType.join(", ")}</span>
                            </div>
                        </div>
                        <div class="mt-2 sm:hidden">
                            <BookHostel urls={{ "hw_url": hostel.hw_url, "booking_url": hostel.booking_url }} pricing = {{...state}} />
                        </div>
                        <div class="mt-6 px-4">
                            <div class="text-2xl text-center sm:text-left text-gray-800 font-semibold mb-2">Description</div>
                            <ShowMore clamp={12}>
                                <div innerHTML={hostelDetail.additional_description} />
                            </ShowMore>
                        </div>
                    </div>

                    <div class="flex-col hidden gap-2 mx-auto items-center min-w-[40%] sm:flex">
                        <RatingBadge
                            rating={hostel.rating}
                            reviewCount={hostel.reviewCount}
                        />
                            <BookHostel urls={{ "hw_url": hostel.hw_url, "booking_url": hostel.booking_url }} pricing = {{...state}} />
                    </div>
                </div>

                <div class="mt-6 px-4 ">
                    <Amenities {...hostelDetail.amenities} />
                </div>
                </div>}

            {/* FIXME ADD REVIEWS */}
            <div class="mt-6">
                <div class="text-2xl text-center sm:text-left text-gray-800 font-semibold mb-4">Reviews</div>
                <div>
                    {/* <Ratings {...hostel.ratings} /> */}
                    <Ratings {...hostelDetail.rating_breakdown} />
                </div>
            </div>
            <div class="mt-8 sm:ml-[-3rem] px-2">

                {reviewSpinner ?
                    <Spinner />
                    : null}
                {reviews.length > 0 ?
                    <ReviewList reviews={reviews} />
                    : null}
            </div>
        </div >
    );

    function MapIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-5 h-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
            </svg>
        );
    };

}

export default HostelDetail;