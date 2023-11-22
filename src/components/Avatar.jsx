import { useState } from 'react';
import avatar from '../assets/download.jpg';
import tickMark from '../assets/tickMark.svg';
const Avatar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => {
        setClicked((prev) => !prev);
      }}
      className={`w-[300px] ml-4 rounded-sm p-4 flex justify-between ${
        clicked ? 'bg-green-100' : 'bg-white'
      }`}>
      <div className='flex w-[50%] justify-evenly'>
        <img
          className='rounded-full'
          src={avatar}
          alt='avatar img'
          width='50px'
          height='50px'
        />
        <span className='mt-2'>Name</span>
      </div>
      {clicked ? (
        <img
          className='mt-1 w-[35px] h-[35px]'
          src={tickMark}
          alt='tick-loading'
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Avatar;
