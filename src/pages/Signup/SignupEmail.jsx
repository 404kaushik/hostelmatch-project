import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupEmail = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        // Initialize form fields
        first_name: '',
        last_name: '',
        email: '',
        emailConfirm: '',
        phone_no: '',
        password: '',
        passwordConfirm: '',
        nationality: '',
        checkbox: false
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const signUp = () => {
        setError("")
        if (formData.first_name == ""){
            setError("Please provide first name.")
            return;
        }
        if (formData.last_name == ""){
            setError("Please provide last name.")
            return;
        }
        if (formData.email == ""){
            setError("Please provide email.")
            return;
        }

        if (formData.nationality == ""){
            setError("Please provide nationality.")
            return;
        }
        if (formData.password == "" || formData.password.length < 8){
            setError("Please provide password of atleast 8 characters.")
            return;
        }
        if (!formData.checkbox){
            setError("Please check terms and conditions.")
            return;
        }

        if(formData.password != formData.passwordConfirm){
            setError("Passwords dont match.")
            return;
        }
        if(formData.email != formData.emailConfirm){
            setError("Emails dont match.")
            return;
        }       

        let  params = formData;
        delete params.emailConfirm;
        delete params.passwordConfirm;
        delete params.checkbox;
        axios.post("/users/signup", { ...params })
            .then(response => {
                toast.success("User registered successfully!")
            })
            .catch(error => {
                toast.error("Error: "+String(error.response.data.message))
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div class="flex flex-col gap-8 px-4 py-6 sm:px-8">
            <div class="flex-1 items-center text-center ">
                <div
                    class="text-3xl whitespace-nowrap text-slate-800 sm:text-xl md:text-2xl  font-bold"
                    style={{ "line-height": "1" }}
                >
                    Sign Up Using Email
                </div>
                <div class="text-gray-700 p-5">
                    Get to explore your hostels and meet other travellers. Fill in the information below to create your profile.
                </div>

                {/* <div class="flex flex-row">

                    <input type="text" class="border-2 rounded-full border-gray-300 py-2 pl-8 pr-4 focus:outline-none focus:border-sun-300" placeholder="First Name" />
                    <svg class="w-5 h-5 mr-2" width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color">
                        </path>
                    </svg>
                </div> */}
                <form id="signupForm" action="#" method="post">

                    <div class="grid  md:grid-cols-2 gap-4  p-10 mx-auto max-w-2xl">
                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg class="w-5 h-5 mr-2 " width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color">
                                        </path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="First Name" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg class="w-5 h-5 mr-2 " width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color">
                                        </path>
                                    </svg>
                                </div>
                                <input
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    type="text"
                                    id="last_name"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Last Name" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 " viewBox="0 0 24 24"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445ZM16,11a1,1,0,0,0,1-1V8h2a1,1,0,0,0,0-2H17V4a1,1,0,0,0-2,0V6H13a1,1,0,0,0,0,2h2v2A1,1,0,0,0,16,11Z" />
                                    </svg>
                                </div>
                                <input
                                    value={formData.phone_no}
                                    onChange={handleChange}
                                    type="number"
                                    id="phone_no"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Phone No (Optional)" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg class="w-5 h-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>globe</title><g id="globe"><path d="M53.85,47.85A27,27,0,0,1,24,57.8V56l3-3V49l4-4V42l4,4h5l2-2h8Z" /><path d="M42,20.59v2.56L38.07,27H31l-5.36,5.26L31,37.51v5.06L27.44,39H22.86L16,32.11V24.2L11.8,20h-4A27,27,0,0,1,32,5a26.55,26.55,0,0,1,7.06.94L36,9H30v4l4,4h4.33Z" /><path d="M32,60A28,28,0,1,1,60,32,28,28,0,0,1,32,60ZM32,6A26,26,0,1,0,58,32,26,26,0,0,0,32,6Z" /></g></svg>
                                </div>
                                <input
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    type="text"
                                    id="nationality"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Nationality" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg class="w-5 h-5 mr-2 " width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                                        </g>
                                    </svg>
                                </div>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Email" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                    <svg class="w-5 h-5 mr-2 " width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                                        </g>
                                    </svg>
                                </div>
                                <input
                                    value={formData.emailConfirm}
                                    onChange={handleChange}
                                    type="email"
                                    id="emailConfirm"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Confirm Email" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4"
                                onClick={()=>{setShowPassword(!showConfirmPassword)}}
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
                                    type={showPassword ? "text":"password"}
                                    id="password"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Password" />
                            </div>
                        </div>

                        <div class="md:w-10">
                            <div class="relative w-full min-w-[300px] h-10">
                                <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4"
                                onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}
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
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                    type={showConfirmPassword ? "text":"password"}
                                    id="passwordConfirm"
                                    class=" border-2 border-sun-300 rounded-full w-full h-full     transition-all 
                            focus:outline-none focus:border-sun-500
                                 text-sm px-3 py-2.5   focus:border-sun-300"
                                    placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div class="font-bold space-x-4 pb-5">
                        <label for="checkbox" class="text-red-700">{error}</label>
                    </div>
                    <div class="items-center space-x-4 pb-5">
                        <input type="checkbox" id="checkbox" name="checkbox" class="accent-sun-300" onClick={()=> setFormData({...formData, checkbox:!formData.checkbox})} value={formData.checkbox}
                            // onChange={handleChange}
                             />
                        <label for="checkbox" class="text-gray-700">I agree to HostelHop's <u>terms and conditions</u> and <u>privacy policy</u></label>
                    </div>

                    <button type="button" onClick={signUp} class="min-w-[300px] bg-sun-300 text-black shadow-md font-bold p-3 rounded-full hover:bg-sun-500 focus:outline-none focus:shadow-outline-blue">Sign me up</button>
                    <div className="p-10 font-bold underline cursor-pointer" onClick={() => {navigate("/login")}}>Already have an account? Log In!</div>
                </form>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default SignupEmail;