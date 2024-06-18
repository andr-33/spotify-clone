import { useStateProvider } from '@utils/StateProvider';
import { reducerCases } from '@utils/reducer';
import { FC, useEffect } from 'react';
import axios from 'axios';

const Playlists:FC = () =>{
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
            const playlistsData = items.map(({ name, id }) => {
                return { name, id }
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, payload: playlistsData});
        };
        getPlaylistData();
    },[token, dispatch]);

    const handleChangeCurrentPlaylist = (selectedPlaylistId:string) =>{
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, payload: selectedPlaylistId });
    }; 

    return(
        <div className='text-[#b3b3b3] h-full overflow-hidden'>
            <ul className='list-none felx flex-col p-4 h-[55vh] max-h-full overflow-auto'>
                {playlists.map(({name, id})=>{
                    return(
                        <li className='cursor-pointer pb-3 transition-colors hover:text-white' key={id} onClick={()=> handleChangeCurrentPlaylist(id)}>
                            {name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Playlists;