
const LoadingState = () => {
    return (
        <div className=' bg-[url("../../../loadingBg.svg")] bg-no-repeat bg-cover bg-center h-full w-full flex justify-center items-center relative -z-20'>
            <div className=' absolute inset-0 bg-black opacity-60 -z-40'></div>
            <div className=' animate-pulse '>
                <img src='../../../loadingIcon.svg' />
            </div>
        </div>
    )
}

export default LoadingState