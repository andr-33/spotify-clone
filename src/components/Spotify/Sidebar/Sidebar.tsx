import { Home, Search, Library } from 'lucide-react'

const Sidebar = () =>{
    return(
        <div className="bg-black flex flex-col h-full w-full text-[#b3b3b3]">
            <div className="flex flex-col ">
                <div className="text-center my-4">
                    <img 
                        className='w-2/3 h-1/3'
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="spotify"
                    />    
                </div>
                <ul className='p-4 flex flex-col gap-4 list-none'>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-colors hover:text-white'>
                        <Home />
                        <span>Home</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-colors hover:text-white'>
                        <Search />
                        <span>Search</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer ease-in-out transition-colors hover:text-white'>
                        <Library />
                        <span>Your library</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;