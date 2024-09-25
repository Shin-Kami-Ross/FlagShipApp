import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInLogOut } from "../UserReducer";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const logged = useSelector((state) => state.LogInState.loggedIn)
    console.log(logged)
    const dispatch = useDispatch()
    dispatch(LogInLogOut(true))
    return (<button className='relative left-[25%]  w-[60%] p-2 rounded-full border-2 border-indigo-500' onClick={() => loginWithRedirect()}>Log In</button>)
};

export default LoginButton;