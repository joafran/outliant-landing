
const ScheduleCall = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-4'>
      <h2 className='text-7xl text-center font-bold'>
        Your <span className='text-[color:var(--primary-color)]'>future,</span>
        <br/>
        together.
      </h2>
      <p className='my-4 text-xl font-thin'>
        We'd love to help bring your next idea to life. <br />
        Schedule a time with our founders.
      </p>
      <button className='bg-[#def858] text-[#212228] py-2 px-6 rounded-full mt-10 text-2xl font-bold'>
        Schedule a Call
      </button>
    </div>
  )
}

export default ScheduleCall