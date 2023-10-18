import NavBar from "./NavBar"

const SignIn = () => {
  return (
    <div className='bg-[url("../../../SignInBg.svg")] md:bg-[url("../../../signInBgDesktop.svg")] bg-no-repeat bg-cover bg-center h-full w-full'>
        {/* <div className=' absolute inset-0 bg-black opacity-60 -z-40'></div> */}
       <NavBar/>
       <div className=" text-white w-1/2 mx-auto pt-16 hidden md:block">
        <p className=" font-bold md:text-3xl lg:text-4xl xl:text-5xl text-center">A world with less waste and a brighter future</p>
        <p className=" text-center w-[95%] mx-auto pt-4 leading-5 md:text-sm lg:text-base">At Recyclit, we envision a future where our planet is cleaner, out resources are preserved, and our communities thrive. But we can{"'"}t do it alone, we need you!</p>
       </div>
        <div className='w-full flex justify-center pt-16 md:hidden '>
            <img src="../../../signInLogo.svg" alt="logo"/>
        </div>
        <div className=' h-fit mt-28 px-6 md:hidden'>
            <div>
            <p className=' text-4xl text-white font-bold'>Learn proper waste disposal</p>
            </div>
        </div>
    </div>
  )
}

export default SignIn