import React from "react";

const Login = () =>{
    const handleClick = () =>{
        const clientId = "";
    };

    return(
        <div className="flex justify-center items-center flex-col h-screen w-screen gap-1 bg-[#1db954]">
            <img 
                className="h-52"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" 
                alt="Spotify logo"    
            />
            <button className="px-20 py-4 rounded-2xl bg-black text-[#49f585] border-none text-lg cursor-pointer">
                Connect to Spotify
            </button>
        </div>
    );
};

export default Login;