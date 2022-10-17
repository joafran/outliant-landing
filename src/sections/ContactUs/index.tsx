
const ContactUs = () => {
  return (
    <div className="bg-[#212228] border-t-[1px] border-[gray] border-solid">
      <div className="flex flex-col md:flex-row justify-center items-end text-[#212228]">
        <h2 className="text-7xl text-white mx-auto p-4 font-semibold cursor-pointer">Outliant</h2>
        <div className="w-full bg-[#def858] py-8 p-4 flex flex-col md:flex-row justify-around items-center">
          <h3 className="text-xl font-bold">Sign up to <br/>
          our newsletter
          </h3>
          <label className="w-full my-4 max-w-lg relative">
            <input className="w-full p-4 bg-[#212228] rounded-full text-gray-400 font-thin" placeholder="Enter your email..." type="email" />
            <button className=" absolute top-[50%] translate-y-[-50%] right-5 px-6 bg-[#212228] text-white text-lg border-[1px] border-[gray] border-solid uppercase rounded-full">Subscribe</button>
          </label>
          <p className="text-lg cursor-pointer">Privacy Policy</p>
        </div>
      </div>
      <div className="border-t-[1px] border-[gray] border-solid text-3xl text-center text-gray-100 py-4">
        This site is based on the <a className="text-[#def858]" href="https://www.outliant.com" target="_blank">Outliant</a> website. <br/>
        Developed by Joaquin Franco
      </div>
    </div>
  )
}

export default ContactUs