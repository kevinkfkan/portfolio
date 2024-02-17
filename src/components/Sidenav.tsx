import { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed top-8 right-8 z-[99] cursor-pointer md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#about" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>Profile/ Resume</span>
                        </a>
                        <a href="#work" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <MdOutlineWorkOutline size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a href="#projects" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                    </div>
                )
                : (
                    <div></div>
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20} />
                    </a>
                    <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <MdOutlineWorkOutline size={20} />
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Sidenav