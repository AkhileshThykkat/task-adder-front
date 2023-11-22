const DateTime = ({ label, placeholder }) => {
  return (
    <div className='flex flex-col'>
      <label className='ml-2 text-sm font-semibold text-black'>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
      />
    </div>
  );
};
export default DateTime;
