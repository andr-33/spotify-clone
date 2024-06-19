import { useStateProvider } from '@utils/StateProvider'
import { FC, useState } from 'react';
import { Search } from 'lucide-react'

interface NavbarProps{
    navBackground: boolean;
}

const Navbar:FC<NavbarProps> = ({ navBackground }) =>{
    const [{ userData }] = useStateProvider();
    const [showUsername, setShowUsername] = useState(false);

    const handleWidth = () =>{
        setShowUsername(prev => !prev);
    };

    return(
        <div className={`flex justify-between items-center p-2 h-[15vh] sticky top-0 ${navBackground?'bg-navbar':'bg-none'}`}>
            <div className='flex items-center gap-2 bg-white w-1/3 py-2 px-4 rounded-3xl'>
                <Search />
                <input type='text' className='border-none h-8 w-full focus:outline-none' placeholder='Artists, songs, or podcasts'/>
            </div>
            <div className={`flex items-center bg-black p-2 rounded-full transition-width overflow-hidden ${showUsername?'w-48':'w-14'}`}
              onMouseEnter={handleWidth}
              onMouseLeave={handleWidth}
            >
                <img src={userData?.images[0]?.url} className='rounded-full w-10 h-10 cursor-pointer'/>
                <a href={userData?.url} className='text-white font-bold whitespace-nowrap ml-2 text-ellipsis'>
                    <span>{userData?.name}</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;