import avatar from '../assets/download.jpg';
import trash from '../assets/trash.png';
import plus from '../assets/plus.png';
import DateTime from './DateTime';
const TaskDue = () => {
  return (
    <div className='flex flex-col border-[1px] border-gray-200 w-full h-[160px] justify-around  bg-white rounded-sm p-4 '>
      <div className={`flex justify-between `}>
        <div className='flex w-[125px] justify-around items-start'>
          <img
            className='rounded-full'
            src={avatar}
            alt='avatar img'
            width='50px'
            height='50px'
          />
          <span className='mt-2 ml-2 text-xl'>Name</span>
        </div>

        <img
          className='mt-1 mr-2 w-[35px] h-[35px]'
          src={trash}
          alt='trash-loading'
        />
      </div>
      <div className='flex  justify-between'>
        <div className='flex space-x-4'>
          <DateTime
            label='Start Date & Time'
            placeholder='DD/MM/YY'
          />
          <DateTime
            label='End Date & Time'
            placeholder='DD/MM/YY'
          />
        </div>
        <div className='w-[50px] h-[50px] p-1 rounded-lg mt-2 border-black border-[1px] bg-slate-100'>
          <img
            className='mx-2 my-2'
            width='25px'
            height='25px'
            src={plus}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDue;
