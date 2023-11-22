import Avatar from './Avatar';
import arrow from '../assets/arrow.png';
import { useState } from 'react';
const SideBar = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className='flex flex-col h-screen border-r-[1px] w-1/4 border-gray-200'>
      <div className=' w-full mx-auto flex justify-between p-6 items-center h-[60px]'>
        <span className='text-xl'>Resources</span>
        <img
          onClick={() => setCollapse((prev) => !prev)}
          role='button'
          width='25px'
          height='25px'
          src={arrow}
          alt='collapse'
        />
      </div>
      <div className='sticky top-0 z-10 w-full bg-white'>
        <div className='flex items-center p-4'>
          <input
            className='w-[350px] rounded-md border border-gray-300 p-2'
            type='search'
            placeholder='Search resources'
          />
        </div>
      </div>
      <div
        className={`${
          collapse ? 'block' : 'hidden'
        } transition-all duration-100 flex-1 `}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
};

export default SideBar;
