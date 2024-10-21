import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { LogInLogOut } from "../UserReducer";



export default function LoginButton() {

    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch()


    return (
        <button
            className='relative left-[25%]  w-[60%] p-2 rounded-full border-2 border-indigo-500'
            onClick={() => { loginWithRedirect(); dispatch(LogInLogOut(true)) }}>
            Log In
        </button>
    )
}
