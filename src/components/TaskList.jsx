import TaskDue from './TaskDue';

const TaskList = () => {
  return (
    <div className='w-3/4 flex flex-col'>
      <div className='w-full h-[500px] border-b-[1px] bg-gray-200 border-b-gray-200'>
        <TaskDue />
      </div>
      <div className='w-full h-[50px] flex justify-end'>
        <div className='mr-10 mt-7'>
          <button className='w-[100px] p-1 rounded-md border-[1px] mx-2 border-black bg-white text-black text-xl'>
            Cancel
          </button>
          <button className='w-[100px] p-[5px] rounded-md  mx-2  bg-blue-600 text-white text-xl'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
