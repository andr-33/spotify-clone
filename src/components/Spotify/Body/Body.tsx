import { useStateProvider } from "@utils/StateProvider";
import { Playlist, reducerCases } from "@utils/reducer";
import axios from "axios";
import { useEffect } from "react";

const Body = () =>{
    const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider();

    const playTrack = async (id, name, artists, image, context_uri, track_number) =>{
        const res = await axios.put('https://api.spotify.com/v1/me/player/play', 
            {
                context_uri,
                offset: {
                    position: track_number - 1,
                },
                position_ms: 0,
            },
            {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            },
        );

        if(res.status === 204) {
            const currentPlaying = {
                id,
                name,
                artists,
                image
            };

            dispatch({type: reducerCases.SET_PLAYING, payload: currentPlaying});
            dispatch({type: reducerCases.SET_PLAYER_STATE, payload: true});
        }
        else{
            dispatch({type: reducerCases.SET_PLAYER_STATE, payload: true});
        }
    };

    const milisecondsToMinutesAndSeconds = (ms: number) =>{
        let minutes = Math.floor(ms / 60000);
        let seconds = Math.round((ms % 60000) / 1000);
        
        return `${minutes}: ${(seconds < 10) ? '0':''} ${seconds}`
    };

    useEffect(()=>{
        const getInitialPlaylist = async () =>{
            const res = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
                {
                    headers:{
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    }
                },
            );

            const selectedPlaylist: Playlist = {
                id: res.data.id,
                name: res.data.name,
                description: res.data.description
            }
        };
    },[]);

    return(
        <div>Body</div>
    );
};

export default Body;