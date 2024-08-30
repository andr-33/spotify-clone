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
                description: res.data.description.startsWith("<a") ? "" : res.data.description,
                images: res.data.images,
                tracks: res.data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist) => artist.name),
                    image: track.album.images[2].url,
                    duration: track.duration_ms,
                    album: track.album.name,
                    context_uri: track.album.uri,
                    track_number: track.track_number,
                }))
            };
            dispatch({type: reducerCases.SET_PLAYLIST, payload: selectedPlaylist});
        };

        if(selectedPlaylistId){
            getInitialPlaylist();
        }
        
    },[token, dispatch, selectedPlaylistId]);

    return(
        <div>
            {selectedPlaylist && (
                <>
                    <div className="mx-8 flex items-center gap-8">
                        <div>
                            <img className="h-60 shadow-2xl" src={selectedPlaylist.images[0].url} alt="Selected playlist cover"/>
                        </div>

                        <div className="flex flex-col gap-4 text-[#e0dede]">
                            <span>PLAYLIST</span>
                            <h1>{selectedPlaylist.name}</h1>
                            <p>{selectedPlaylist.description}</p>
                        </div>
                    </div>
                    <div className="list">
                        <div>
                            <div className="header">
                                <div>
                                    <span>#</span>
                                </div>
                                <div>
                                    <span>TITLE</span>
                                </div>
                                <div>
                                    <span>ALBUM</span>
                                </div>
                                <div>
                                    <span>Icono</span>
                                </div>
                            </div>
                            <div className="tracks">
                                {selectedPlaylist.tracks?.map((
                                    {
                                        id,
                                        name,
                                        artists,
                                        image,
                                        duration,
                                        album,
                                        context_uri,
                                        track_number
                                    }, index )=>{
                                    return(
                                        <div 
                                            className="" 
                                            key={id}
                                            onClick={()=> playTrack(id, name, artists, image, context_uri, track_number)}
                                        >
                                            <div>
                                                <span>{index + 1}</span>
                                            </div>
                                            <div>
                                                <div>
                                                    <img src={image} alt="track" />
                                                </div>
                                                <div className="info">
                                                    <span>{name}</span>
                                                    <span>{artists}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>{album}</span>
                                            </div>
                                            <div>
                                                <span>{milisecondsToMinutesAndSeconds(duration)}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Body;