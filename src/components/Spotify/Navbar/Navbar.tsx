import { useStateProvider } from '@utils/StateProvider'
import { FC } from 'react';
import { Search } from 'lucide-react'

interface NavbarProps{
    navBackground: string;
}

const Navbar:FC<NavbarProps> = ({ navBackground }) =>{
    const [{ userData }] = useStateProvider();
    return(
        <div className='flex justify-between items-center p-2 h-[15vh] sticky top-0'>
            <div className='flex items-center gap-2 bg-white w-1/3 py-2 px-4 rounded-3xl'>
                <Search />
                <input type='text' className='border-none h-8 w-full focus:outline-none' placeholder='Artists, songs, or podcasts'/>
            </div>
            <div className='flex justify-center items-center bg-black py-2 px-2 rounded-full cursor-pointer'>
                <img src={userData?.images[0]?.url} className='rounded-full w-9 h-9 mr-2'/>
                <a href={userData?.url} className=' text-white font-bold'>
                    <span>{userData?.name}</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;