import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import modalimg from '../assets/modal-img.png'



const SignupModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const showPopup = () => {
        setTimeout(function () {
            //wait for 2 seconds
            openModal();
        }, 2000);
    };
    useEffect(() => {
        showPopup()
    }, []);

    return (

        // <div>
        //     {modalOpen ?
        //         <div
        //             // class="flex flex-row fixed inset-0 z-50 items-center justify-center 
        //             // top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-sun-300 rounded
        //             // sm:h-2/4 h-2/3 w-3/4 md:h-3/5 lg:h-3/5 xl:h-3/5 xl:w-1/3 backdrop-blur-md backdrop-filter 
        //             // "
        //             class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"

        //         >

        //             <div class="hidden md:block h-full border border-gray-500 relative w-1/2">
        //                 <img src={modalimg} class="h-full w-full" />
        //             </div>
        //             <div class="flex flex-col w-2/3 mx-auto h-full w-full">
        //                 <div className="ml-auto cursor-pointer p-2" onClick={closeModal}>
        //                     <svg class="w-5 h-5 mr-2" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        //                         viewBox="0 0 512 512" >
        //                         <g>
        //                             <g>
        //                                 <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
        // 	512,452.922 315.076,256 		"/>
        //                             </g>
        //                         </g>
        //                     </svg>
        //                 </div>
        //                 <div class=" items-center text-center p-5">
        //                     <div
        //                         class="text-xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-4xl  p-5 font-bold"
        //                         style={{ "line-height": "1" }}
        //                     >
        //                         HostelHop
        //                     </div>
        //                     <div class="italic font-bold text-xs">
        //                         Simplifying discovery, Improving your travel experience!
        //                     </div>
        //                     <div
        //                         class="text-2xl font-bold p-5"
        //                     >
        //                         Sign up to HostelHop and get 7% off on all OneFam hostels worldwide
        //                     </div>
        //                     <div class="text-xs p-5">
        //                         Sign up to receive a discount code that is redeamable at https://onefamhostels.com/ on all refundable and non-refundable rates.
        //                     </div>
        //                     <Link to={"/signup/"}>
        //                         <button
        //                             class="bg-black text-white rounded-full py-2 px-10 w-fit self-center"
        //                             onClick={() => {
        //                             }}
        //                         >
        //                             Sign Up Today!
        //                         </button>
        //                     </Link>
        //                 </div>
        //             </div>


        //         </div > : null}
        // </div>
        <div>
            {modalOpen ?
                <div class="min-w-screen h-screen animated fadeIn faster fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                    id="modal-id">
                    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
                    <div class="w-full  flex flex-row max-w-3xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-sun-300 ">
                        <div class="hidden md:block  border border-gray-500 relative w-2/3">
                            <img src={modalimg} class="h-full w-full" />
                        </div>
                        <div class="flex flex-col w-2/3 mx-auto h-full w-full">
                            <div className="ml-auto cursor-pointer p-2" onClick={closeModal}>
                                <svg class="w-5 h-5 mr-2" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512" >
                                    <g>
                                        <g>
                                            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
        	512,452.922 315.076,256 		"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class=" items-center text-center p-5">
                                <div
                                    class="text-4xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-4xl  p-5 font-bold"
                                    style={{ "line-height": "1" }}
                                >
                                    HostelHop
                                </div>
                                <div class="italic font-bold text-xs p-5">
                                    Simplifying discovery, Improving your travel experience!
                                </div>
                                <div
                                    class="text-2xl font-bold p-5"
                                >
                                    Sign up to HostelHop and get 7% off on all OneFam hostels worldwide
                                </div>
                                <div class="text-xs p-5">
                                    Sign up to receive a discount code that is redeamable at https://onefamhostels.com/ on all refundable and non-refundable rates.
                                </div>
                                <div className="p-8">
                                    <Link to={"/signup/"}>
                                        <button
                                            class="bg-black text-white rounded-full py-2 px-10 w-fit self-center"
                                            onClick={() => {
                                            }}
                                        >
                                            Sign Up Today!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>


    );
}

export default SignupModal;