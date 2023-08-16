import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FiCompass,FiStar} from 'react-icons/fi'
import {CiHome,CiCalendar} from 'react-icons/ci'
import {CiGrid41,CiHeart} from 'react-icons/ci'
import {BsChatSquareDots,BsPeople} from 'react-icons/bs'
import {IoTicketOutline} from 'react-icons/io5'
import {HiChevronRight} from 'react-icons/hi'

const Navbar = () => {
  const [nav,setNav] =useState(false)
  
  const handleNav = () =>{
    setNav(!nav)
  }
  return(
    <div className='flex justify-between items-center h-24 mx-w-[1240px] mx-auto px-4 text-white'>
    <h1 className='w-full text-3xl font-bold text-[#ffffff]'>BeeMusic</h1>
    <ul className='hidden md:flex'>
    <li className='p-4'>Home</li>
    <li className='p-4'>Company</li>
    <li className='p-4'>Resources</li>
    <li className='p-4'>About</li>
    <li className='p-4'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
    {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
    </div>
    <div className={!nav ?'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#e5e7eb] ease-in-out duration-500':'fixed left-[-100%]'}>
    <div className='flex ml-6 pt-4'>
<p className='w-[10px] h-[10px] bg-red-700 rounded-full'></p>
<p className='w-[10px] h-[10px] bg-orange-500 rounded-full ml-2'></p>
<p className='w-[10px] h-[10px] bg-green-600 rounded-full ml-2'></p>
    </div>
    <h1 className='flex items-center py-4 w-full text-3xl font-bold text-[#000300] m-4'><p className='text-orange-400'>Bee</p>Music</h1>
    <ul className='text-[#000300]'>
    <li className='flex items-center py-4 p-4'><CiHome/>Home</li>
    <li className='flex items-center py-4 p-4'><BsChatSquareDots/>Trends</li>
    <li className='flex items-center py-4 p-4'><FiCompass/>Feed</li>
    <li className='flex items-center py-4 p-4'><CiGrid41/>New and Notable</li>
<li className='flex items-center py-4 p-4'><CiCalendar/>Release calender</li>
<li className='flex items-center py-4 p-4'><IoTicketOutline/>Events</li>
<li className='flex items-center py-4 p-4'><CiHeart/>Favorite songs</li>
<li className='flex items-center py-4 p-4'><BsPeople/>Artists</li>
    <li className='flex items-center py-4 p-4 border-b border-gray-300'><FiStar/>Albums</li>
    </ul>
 <div className='text-black flex items-center justify-between'>
<p className='w-[30px] h-[30px] bg-pink-400 rounded-full'></p>
    <HiChevronRight/>
    </div>
    </div>
    </div>
    )
}
export default Navbar