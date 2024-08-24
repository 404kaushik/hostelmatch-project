import signupImg from "../../assets/signup.png"
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Signup = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    const handleSuccess = async (response) => {
        //get user info from google
        const info = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: 'Bearer ' + response.access_token } },
        );

        var userInfo = {}
        userInfo.first_name = info.data.given_name
        userInfo.last_name = info.data.family_name
        userInfo.google_id = info.data.sub
        userInfo.email = info.data.email

        axios.post("/users/signup", { ...userInfo })
            .then(response => {
                toast.success("User registered successfully!")
            })
            .catch(error => {
                toast.error("Error: " + String(error.response.data.message))
                console.error('Error fetching data:', error);
            });


    }
    const handleFailure = (response) => {
        toast.error("Something went wrong. Please try again.")
        console.log(response)

    }
    const loginGoogle = useGoogleLogin({
        onSuccess: response => handleSuccess(response),
        onError: response => handleFailure(response),
    });

    return (
        <div class="flex flex-row gap-8 px-4 py-6 sm:px-8">
            <div class="flex-1 items-center text-center">
                <div
                    class="text-3xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-4xl pt-20 p-5 font-bold"
                    style={{ "line-height": "1" }}
                >
                    Sign Up!
                </div>
                <div class="text-gray-700 p-5">
                    Get to explore your hostels and meet other travellers.
                </div>
                <Link to={"/signup/email"}>
                    <button class=" rounded-full border-2 border-sun-300 px-8 py-2 transition duration-300 ease-in-out hover:bg-sun-500 hover:text-white hover:border-white">
                        <div class="flex-row flex">
                            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>
                            Sign Up with Email
                        </div>
                    </button>
                </Link>
                <div class="flex items-center p-10">
                    <div class="border-t border-sun-300 flex-grow"></div>
                    <span class="mx-4">or</span>
                    <div class="border-t border-sun-300 flex-grow"></div>
                </div>
                <button class=" rounded-full border-2 border-sun-300 px-8 py-2 transition duration-300 ease-in-out hover:bg-sun-500 hover:text-white hover:border-white"
                    onClick={() => { loginGoogle() }}
                >
                    <div class="flex-row flex">
                        <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Sign Up with Google
                    </div>
                </button>
                <div class="text-gray-700 p-20">
                    Sign Up to agree to our   <Link to={"/terms_and_conditions/"}><u>terms and conditions</u></Link> and <Link to={"/terms_and_conditions/"}><u>privacy policy.</u></Link>
                </div>
            </div>
            <div className="hidden md:block flex-1">
                <img src={signupImg} />
            </div>

            <ToastContainer />

        </div>
    )
}

export default Signup;