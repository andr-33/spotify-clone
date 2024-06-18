import { Home, Search, Library } from 'lucide-react'
import Playlists from './Playlists/Playlists';
import { FC } from 'react';

const Sidebar:FC = () =>{
    return(
        <div className="bg-black flex flex-col h-full w-full text-[#b3b3b3]">
            <div className="flex flex-col ">
                <div className="text-center my-4">
                    <img 
                        className='px-8'
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="spotify"
                    />    
                </div>
                <ul className='p-4 flex flex-col gap-4 list-none'>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-all hover:text-white hover:font-bold'>
                        <Home />
                        <span>Home</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-all hover:text-white hover:font-bold'>
                        <Search />
                        <span>Search</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-all hover:text-white hover:font-bold'>
                        <Library />
                        <span>Your library</span>
                    </li>
                </ul>
            </div>
            <hr className='bg-[#b3b3b3] mx-1'/>
            <Playlists />
        </div>
    );
};

export default Sidebar;