import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

const LoginButton = () => {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    console.log(user);

    return isAuthenticated ? (
        <>
            <img src={user.picture} alt={user.name} />
            <h2>Hello , {user.name}</h2>
            <h2>Your email address is {user.email}</h2>
            <LogoutButton />
        </>
    ) : (
        <>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </>
    )

};

export default LoginButton;