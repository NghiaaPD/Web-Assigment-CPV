import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '@/assets/img/logo.png'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Login_form() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const data = {
            username: username,
            password: password
        };

        axios.post('http://127.0.0.1:5000/api/v1/login', data)
            .then(response => {
                console.log('Response from API:', response.data);
                if (response.data.role === 1) {
                    navigate('/Admin');
                } else if (response.data.role === 2) {
                    navigate('/User')
                } else {
                    alert('Invalid username or password');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>

            <div className="h-[80px] flex flex-col items-center justify-center mt-10">
                <img src={logo} alt="logo" className="w-16 h-16" />
                <p className="uppercase text-6xl text-[#E7B824] font-bold transition duration-300 transform hover:text-[#299D47] hover:scale-110">
                    Login
                </p>
            </div>

            <div className="h-[350px] mt-4">
                <div className="flex flex-col items-center gap-6 mx-auto">
                    <div className="relative mt-10 h-14 w-[350px]">
                        <input
                            placeholder="Enter your username or email"
                            className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-bold text-blue-gray outline outline-0 transition-all placeholder-shown:border-black focus:border-[#299D47] focus:outline-0 disabled:border-0 disabled:bg-black"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <label
                            className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#299D47] after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-[#299D47] peer-focus:after:scale-x-100 peer-focus:after:border-[#299D47] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Username
                        </label>
                    </div>
                    <div className="relative mt-6 h-14 w-[350px]">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-bold text-black outline outline-0 transition-all placeholder-shown:border-black focus:border-[#FFC81B] focus:outline-0 disabled:border-0 disabled:bg-black"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label
                            className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFC81B] after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-[#FFC81B] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFC81B] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Password
                        </label>
                    </div>

                    <div className="flex justify-between ">
                        <div className="inline-flex mr-16">
                            <label
                                className="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="login"
                                data-ripple-dark="true"
                            >
                                <input
                                    id="login"
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#803F2B] checked:bg-[#E7B824] checked:before:bg-[#E7B824] hover:before:opacity-10"
                                />
                                <div
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </label>
                            <label
                                className="mt-2 font-light text-gray-700 cursor-pointer select-none"
                                htmlFor="login"
                            >
                                Remember Me
                            </label>
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger className="ml-10 normal-case text-base text-black hover:text-[#299D47] underline underline-offset-2 cursor-pointer">Forgot password?</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you forget password?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Please contact the administrator to reset your password!
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction className="bg-[#299D47] hover:bg-[#E7B824]">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>

                    <button
                        className="w-[350px] h-14 mt-2 middle none center rounded-lg bg-[#299D47] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-[#E7B824] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <div className="border-b-2 w-[300px] "></div>

                    <div className="flex items-center justify-center">
                        <p className="text-lg text-black mr-1">You do not have an account?</p>
                        <AlertDialog>
                            <AlertDialogTrigger className="text-lg text-black hover:text-[#299D47] underline underline-offset-2 cursor-pointer">Sign Up</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you do not have a account</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Please contact the administrator to help you create an account!
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction className="bg-[#299D47] hover:bg-[#E7B824]">Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
            <div className="h-[50px]"></div>
        </>
    );
}
