import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button className='relative left-[25%]  w-[60%] p-2 rounded-full border-2 border-indigo-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    );
};

export default LogoutButton;