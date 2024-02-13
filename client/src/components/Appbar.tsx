import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";
import { userState } from "../store/atoms/user";

function Appbar() {
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading); 
    const userEmail = useRecoilValue(userEmailState); 
    const setUser = useSetRecoilState(userState); 

    // useEffect(() => {
    //     function callback2(data: any) { 
    //         if (data.username) {
    //             setUserEmail(data.username)
    //             console.log(data.username); 
                
    //         }
    //     }
    //     function callback1(res: any) { 
    //         res.json().then(callback2)
    //     }
    //     console.log("token - " + localStorage.getItem("token"));
    //     fetch("http://localhost:4000/auth/me", { 
    //         method: "GET",
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     }).then(callback1)
    // }, []);

    if(userLoading) { 
        return <></> 
    }



    if (userEmail){
        return <div className="flex justify-center h-16 px-10 shadow items-center mt-10">


            <div className="flex items-center space-x-8 mr-24">
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer" style={{fontFamily: 'Cookie', fontSize: "50px", color: 'white'}}
                onClick={() => {
                    navigate("/")
                }}
                >ToDo...</h1>
                <div className="hidden md:flex justify-around space-x-4"></div>
            </div>

            <div className="flex space-x-4 items-center ml-24">
                <a 
                    href="#" 
                    className="bg-green-600 px-4 py-4 rounded-xl text-white hover:bg-green-800 text-sm" 
                    style={{fontFamily: 'Cookie', fontSize: "35px", color: 'white'}}
                    onClick={() => {
                        // @ts-ignore 
                        localStorage.setItem("token", null); 
                        setUser({ 
                            isLoading: false, 
                            userEmail: null 
                        })
                    }}
                    >Logout</a>
            </div>


        </div>
    } else {
        return <div className="flex justify-center h-16 px-10 shadow items-center mt-10">


            <div className="flex items-center space-x-8 mr-20">
                <h1 className="text-xl lg:text-2xl font-bold cursor-pointer" style={{fontFamily: 'Cookie', fontSize: "50px", color: 'white'}} 
                onClick={() => {
                    navigate("/")
                }}>ToDo...</h1>
                <div className="hidden md:flex justify-around space-x-4"></div>
            </div>


            <div className="flex space-x-4 items-center ml-20">

                <a className="text-gray-800 text-sm cursor-pointer" 
                style={{fontFamily: 'Cookie', fontSize: "35px", color: 'white'}}
                onClick={() => {
                    navigate("/signin")
                }}
                >Login</a>

                <a
                className="bg-green-600 px-4 py-4 rounded-xl text-white hover:bg-green-800 text-sm cursor-pointer" 
                style={{fontFamily: 'Cookie', fontSize: "35px", color: 'white'}}
                onClick={() => {
                    navigate("/signup")
                }}
                >Signup</a>

            </div>
            

        </div>
    }
}

export default Appbar;
