import { FC } from "react";

const Login:FC = () =>{
    const handleSpotifyConnection = () =>{
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
        const apiUri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];

        window.location.href = `${apiUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };

    return(
        <div className="flex justify-center items-center flex-col h-screen w-screen gap-10 bg-[#1db954]">
            <img 
                className="h-52"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" 
                alt="Spotify logo"    
            />
            <button className="px-20 py-4 rounded-2xl bg-black text-[#1db954] font-bold border-none text-lg cursor-pointer"
                onClick={handleSpotifyConnection}>
                Connect to Spotify
            </button>
        </div>
    );
};

export default Login;