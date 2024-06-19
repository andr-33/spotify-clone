import { useStateProvider } from '@utils/StateProvider';
import { reducerCases, Playlist } from '@utils/reducer';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

const Playlists:FC = () =>{
    const [{ token, playlists }, dispatch] = useStateProvider();
    const [showScrollbar, SetShowScrollbar] = useState(false);

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
            const playlistsData: Array<Playlist> = items.map(({ name, id, images }:Playlist) => {
                return { name, id, images }
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, payload: playlistsData});
        };
        getPlaylistData();
    },[token, dispatch]);

    const handleChangeCurrentPlaylist = (selectedPlaylistId:string) =>{
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, payload: selectedPlaylistId });
    }; 

    const handleOverflow = () =>{
        SetShowScrollbar(prev => !prev);
    };

    return(
        <div className={`text-white h-full my-1 ${showScrollbar ? 'overflow-auto scrollbar':'overflow-hidden'}`}
          onMouseEnter={handleOverflow}
          onMouseLeave={handleOverflow}
        >
            <div className='list-none felx flex-col px-2 h-[55vh]'>
                {playlists.map(({name, id, images})=>{
                    return(
                        <div key={id} 
                          className='flex w-full flex-row items-center rounded mb-2 cursor-pointer transition-colors hover:bg-stone-700' 
                          onClick={()=> handleChangeCurrentPlaylist(id)}
                        >
                            <img src={images[2].url} width={images[2].width} height={images[2].height} className='rounded scale-75'/>
                            <span className='ml-1'>{name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Playlists;