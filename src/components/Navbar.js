import React from "react";
import './humsafar.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
export default function Navbar() {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <p class="p1" style={{ color: 'red' }}>Play </p>
                    <p style={{ color: 'blue', position: 'absolute', left: '49%', fontSize: '25px', fontWeight: 'bold' }}>Tube</p>
                    <GoogleOAuthProvider clientId=" 232472265669-0mguam7h0gv3t4a5km21luseo3o80ptr.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const details = jwt_decode(credentialResponse.credential)
                                console.log(details)
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>;
                </div>

            </nav>
            <marquee>please click on images to saw video and all the things which you have been seen in this website all of them are working so please give your feedback</marquee>

        </>
    )
}