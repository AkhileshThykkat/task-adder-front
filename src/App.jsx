import Header from './components/Header';
import SideBar from './components/SideBar';
import TaskList from './components/TaskList';
export default function App() {
  return (
    <>
      <Header />
      <div className='w-full mt-5'>
        <span className='ml-7  text-xl border-b-4 border-blue-600 font-bold text-blue-600'>
          Schedule
        </span>
        <hr />
        <div className='w-full flex'>
          <SideBar />
          <TaskList />
        </div>
      </div>
    </>
  );
}
