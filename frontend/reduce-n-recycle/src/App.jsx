import { useEffect, useState } from 'react';
import LoadingState from './components/onBoarding/LoadingState';
import SignIn from './components/onBoarding/SignIn';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-screen h-screen antialiased font-poppins overflow-x-hidden'>
      {isLoading ? <LoadingState/> : <SignIn/>}
    </div>
  )
}

export default App