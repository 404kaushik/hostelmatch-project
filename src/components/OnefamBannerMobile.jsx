import onefamlogo from "../assets/onefam-logo.png"

const OnefamBannerMobile = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const openOneFamWeb = () => {

        const externalURL = 'https://onefamhostels.com/'; // Replace with your desired external URL
        window.open(externalURL, '_blank');

    }

    return (
        <div class="p-5 flex flex-col h-50 shadow-lg bg-sun-50">
            <div class="text-xs font-bold text-sun-300 text-center">
                DISCOUNT ALERT
            </div>
            <div className="flex flex-row pt-5">
                <img class="w-1/2 pr-5" src={onefamlogo} />
                {
                    !user ?
                        <button 
                        onClick={() => { window.open("/login", "_self") }}
                        class="w-1/2 bg-sun-300 
                transition duration-300 ease-in-out hover:bg-sun-400
                ">
                            <div class="text-[8px] font-bold text-gray-500">
                                LOG IN TO
                            </div>
                            <div class="font-bold ">
                                See Code
                            </div>
                        </button>
                        : <div className="flex items-center justify-end w-1/2">
                            <div className="bg-sun-300 font-bold text-xs text-center p-1 rounded">
                                Code: ONEFAMHOPPERS
                            </div>
                        </div>
                }
            </div>
            <div class="font-bold text-xs pt-2">
                7% discount on the refundable and non - refundable rates.
            </div>
            <div className="text-[7px] text-center p-1 text-gray-500 font-bold">
                Use Code in "ALL CAPS" under the coupon code section on https://onefamhostels.com/. <br />  This code is not redeamable on booking platforms.
            </div>
            <button className="font-bold text-[14px] rounded-full py-[4px] px-8 w-fit self-center bg-sun-300
                        transition duration-300 ease-in-out hover:bg-sun-400
                        "
                onClick={openOneFamWeb}
            >
                Book Now!
            </button>



        </div>
    )
}

export default OnefamBannerMobile;