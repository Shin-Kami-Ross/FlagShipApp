import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import LogoutButton from "./LogoutPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolicies } from "../UserReducer";


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const policies = useSelector((state) => state.LogInState.data);
    const dataLoaded = useSelector((state) => state.LogInState.Loaded);
    console.log(dataLoaded)
    console.log(policies)
    useEffect(() => { dispatch(fetchPolicies()) }, [dispatch])
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton />
                <div>{dataLoaded}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Claims Name</th>
                            <th>Insurance Company</th>
                            <th>Beneficiary Person</th>
                            <th>Policy Numer</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataLoaded && policies.map((policy, index) =>
                            <tr key={index}>
                                <td>{policy.policyName}</td>
                                <td></td>
                                <td>{policy.policyHolder}</td>
                                <td></td>
                                <td><button>View</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    );
};

export default Profile;