import onefamlogo from "../assets/onefam-logo.png"
import { Link } from 'react-router-dom';

const OnefamBanner = () => {
    const openOneFamWeb = () => {

        const externalURL = 'https://onefamhostels.com/'; // Replace with your desired external URL
        window.open(externalURL, '_blank');

    }
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div class="pt-5 flex flex-row h-40 shadow-lg">
            <img class="w-1/3 p-8" src={onefamlogo} />
            <div class="flex flex-col pl-10">
                <div class="text-xl font-bold text-sun-300 ">
                    DISCOUNT ALERT
                </div>
                <div class="font-bold text-sm pt-4">
                    7% discount on the refundable and non - refundable rates. Book using the discount code attached on the OneFam website!
                </div>
                <div class="pt-2 ">
                    <button className="font-bold text-[10px] rounded-full py-[1px] px-8 w-fit self-center bg-sun-300
                        transition duration-300 ease-in-out hover:bg-sun-400
                        "
                        onClick={openOneFamWeb}
                    >
                        Book Now!
                    </button>
                </div>
            </div>
            {!user ?

                <button class="w-1/3 bg-sun-300 
                transition duration-300 ease-in-out hover:bg-sun-400
                "
                    onClick={() => { window.open("/login", "_self") }}>
                    <div class="text-[8px] font-bold text-gray-500">
                        LOG IN TO
                    </div>
                    <div class="pt-2 font-bold ">
                        See Code
                    </div>
                </button>

                : <div class="w-1/3 flex flex-col items-center justify-center">
                    <div className="bg-sun-300 font-bold text-xs text-center p-1 rounded">
                        ONEFAMHOPPERS
                    </div>
                    <div className="text-[7px] text-center p-2 text-gray-500 font-bold">
                        Use Code in "ALL CAPS" under the coupon code section on https://onefamhostels.com/ 
                    </div>
                </div>
            }
        </div>
    )
}

export default OnefamBanner;