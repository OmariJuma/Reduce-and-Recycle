
const SignIn = () => {
  return (
    <div className='bg-[url("../../../SignInBg.svg")] bg-no-repeat bg-cover bg-center h-full w-full relative -z-20'>
        <div className=' absolute inset-0 bg-black opacity-60 -z-40'></div>
        <div className='w-full flex justify-center pt-16'>
            <img src="../../../signInLogo.svg" alt="logo" />
        </div>
        <div className=' h-fit mt-28 px-6'>
            <div>
            <p className=' text-4xl text-white font-bold'>Learn proper waste disposal</p>
            </div>
        </div>
    </div>
  )
}

export default SignIn