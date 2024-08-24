import loginImg from "../../assets/login.jpg"
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // checkbox: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const login = () => {
        if (formData.email == "") {
            toast.error("Please provide a valid email.")
            return
        }

        if (formData.password == "") {
            toast.error("Please provide your password.")
            return
        }

        axios.post("/users/login", { ...formData })
            .then(response => {
                toast.success("Login Successful!")
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))

                //go back to previous page
                navigate(-1)
                // window.location.reload();

            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error("Error: " + String(error.response.data.message))
            });

    }

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


        axios.post("/users/login", { ...userInfo })
            .then(response => {
                toast.success("Login Successful!")
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))

                //to reload header
                navigate('/')
                window.location.reload();

            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // toast.error("Error: " + String(error.response.data.message))
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
        <div class="flex flex-row items-center justify-center gap-8 px-4 py-6 sm:px-8 h-[50rem]">
            <div class="flex-1 max-w-sm items-center text-center">
                <div
                    class="text-3xl whitespace-nowrap text-slate-800 sm:text-4xl md:text-4xl pt-20 p-5 font-bold"
                    style={{ "line-height": "1" }}
                >
                    Log In
                </div>
                <div class="text-gray-700 p-5 text-[#6F6C90] text-left">
                    Unlock your hostel. Get the best deals and discounts on your travels.
                </div>

                <div className="flex items-center justify-center">
                    <div class="relative w-1/3 min-w-[300px] h-10">
                        <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                            <svg class="w-5 h-5 mr-2 " width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color">
                                </path>
                            </svg>
                        </div>
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            class=" border-2 border-[#FEC446] rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                            placeholder="Email" />
                    </div>
                </div>

                <div className="flex items-center justify-center p-5">
                    <div class="relative w-1/3 min-w-[300px] h-10">
                        <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4"
                            onClick={() => { setShowPassword(!showPassword) }}
                        >
                            <svg class="w-5 h-5 mr-2 " fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                width="800px" height="800px" viewBox="0 0 47 47" >
                                <g>
                                    <g>
                                        <path d="M37.076,19.748c-0.824,0-1.494,0.672-1.494,1.499v1.46h2.991v-1.46C38.573,20.42,37.9,19.748,37.076,19.748z" />
                                        <path d="M41.227,12.635H5.773C2.6,12.635,0,15.237,0,18.41v10.18c0,3.178,2.6,5.775,5.773,5.775h35.454
                                        C44.4,34.365,47,31.768,47,28.59V18.41C47,15.237,44.4,12.635,41.227,12.635z M12.56,25.077l1.385,1.508l-2.399,1.8l-0.984-1.8
                                        c-0.145-0.257-0.372-0.761-0.691-1.508c-0.349,0.821-0.581,1.321-0.696,1.508l-0.998,1.8l-2.466-1.8l1.491-1.508
                                        c0.42-0.415,0.827-0.771,1.229-1.063c-0.41-0.037-0.949-0.113-1.614-0.238l-2.065-0.336l0.958-2.812l1.852,0.842
                                        c0.195,0.088,0.68,0.365,1.452,0.824c-0.165-0.747-0.271-1.302-0.319-1.666l-0.263-2.013h2.941l-0.238,2.013
                                        c-0.052,0.49-0.166,1.045-0.335,1.666c0.339-0.17,0.563-0.283,0.669-0.345c0.372-0.207,0.659-0.35,0.852-0.442l1.853-0.879
                                        l0.918,2.812l-2.049,0.428c-0.375,0.072-0.931,0.119-1.67,0.146C11.874,24.406,12.266,24.758,12.56,25.077z M26.137,25.077
                                        l1.387,1.508l-2.399,1.799l-0.983-1.799c-0.145-0.257-0.372-0.761-0.69-1.508c-0.35,0.821-0.58,1.321-0.695,1.508l-1,1.799
                                        l-2.465-1.799l1.491-1.508c0.42-0.415,0.826-0.771,1.229-1.063c-0.408-0.037-0.949-0.113-1.614-0.238l-2.066-0.336l0.959-2.812
                                        l1.853,0.842c0.193,0.088,0.68,0.365,1.451,0.824c-0.169-0.747-0.275-1.302-0.32-1.666l-0.264-2.011h2.942l-0.239,2.011
                                        c-0.054,0.49-0.166,1.045-0.333,1.666c0.337-0.17,0.561-0.283,0.668-0.345c0.37-0.207,0.658-0.35,0.852-0.442l1.854-0.879
                                        l0.919,2.812l-2.051,0.428c-0.375,0.072-0.929,0.119-1.669,0.146C25.451,24.406,25.844,24.758,26.137,25.077z M41.35,27.625
                                        c0,0.619-0.507,1.125-1.125,1.125H33.93c-0.619,0-1.125-0.506-1.125-1.125v-3.794c0-0.619,0.506-1.125,1.125-1.125h0.152v-1.46
                                        c0-1.653,1.343-2.998,2.994-2.998c1.652,0,2.996,1.344,2.996,2.998v1.46h0.152c0.617,0,1.125,0.506,1.125,1.125V27.625z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            id="password"

                            class=" border-2 border-[#FEC446] rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                            placeholder="Password" />
                    </div>
                </div>

                <button type="button" onClick={login} class="min-w-[300px] bg-sun-300 text-black shadow-md font-bold p-3 rounded-full hover:bg-sun-500 focus:outline-none focus:shadow-outline-blue">Login</button>





                <div class="flex items-center p-10">
                    <div class="border-t border-sun-300 flex-grow"></div>
                    <span class="mx-4">or</span>
                    <div class="border-t border-sun-300 flex-grow"></div>
                </div>
                <button class=" rounded-full border-2 border-sun-300 px-8 py-2 transition duration-300 ease-in-out hover:bg-sun-500 hover:text-white hover:border-white"
                    onClick={loginGoogle}
                >
                    <div class="flex-row flex">
                        <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Login with Google
                    </div>
                </button>
                <div class="text-gray-700 pt-20">
                    Sign Up to agree to our   <Link to={"/terms_and_conditions/"}><u>terms and conditions</u></Link> and <Link to={"/terms_and_conditions/"}><u>privacy policy.</u></Link>
                </div>
                <div className=" p-10 font-bold underline cursor-pointer" onClick={() => { navigate("/signup") }}>Don't have an account? Sign Up!</div>

            </div>
            <div className="hidden md:flex max-w-2xl h-[45rem] mt-5 flex-1 ml-16">
                <img src={loginImg} className="h-full w-full object-cover"/>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Login;