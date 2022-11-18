import React from 'react'
import Image from 'next/image'
import { BeakerIcon, ChevronDownIcon, HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid'
import { StarIcon, BellIcon, ChatIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon, GlobeIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
    <div className='sticky top-0 flex z-50 bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image
          style={{ objectFit: 'contain', }}
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          alt='image'
          fill
        />
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      {/* Search Box */}
      <form className='flex flex-1 items-center space-x-2 border border-gray-200 bg-gray-100 px-3 py-1 rounded-sm' action="">
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input className='outline-none bg-gray-100 flex-1' type="text" placeholder='Search Reddit' />
        <button hidden type='submit' />
      </form>

      <div className='text-gray-500 space-x-2 items-center hidden lg:inline-flex mx-2 '>
        <SparklesIcon className='icon'/>
        <GlobeIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border boder-gray-100' />
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerphoneIcon className='icon'/>
      </div>

      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon'/>
      </div>

      {/* Sign in / Sign out button */}
      <div className='hidden lg:flex items-center space-x-2 border border-gray p-2 cursor-pointer'>
        <div className='relative h-5 w-5 flex-shrink-0'>
        <Image fill src="https://links.papareact.com/23l" alt="" />
        </div>
        <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  )
}

export default Header