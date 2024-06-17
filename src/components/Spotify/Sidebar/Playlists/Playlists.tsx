import { useStateProvider } from '@utils/StateProvider';
import { reducerCases } from '@utils/constants.js';
import { useEffect } from 'react';
import axios from 'axios';

const Playlists = () =>{
    const [{ token, playlists }, dispatch] = useStateProvider();

    useEffect(()=>{
        const getPlaylistData = async () => {
            const res = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers:{
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );

            const { items } = res.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id }
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists});
        };
        getPlaylistData();
    },[token, dispatch]);

    const handleChangeCurrentPlaylist = (selectedPlaylistId) =>{
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    }; 

    return(
        <div className='text-[#b3b3b3] h-full overflow-hidden'>
            <ul className='list-none felx flex-col gap-4 h-[55vh] max-h-full overflow-auto'>

            </ul>
        </div>
    );
};

export default Playlists;