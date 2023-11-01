import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useEffect, useState } from 'react';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(()=>{
    console.log(localStorage.getItem('theme'))
  },[])
  return (
    <div className={`${theme=='dark'?'text-lime-50':null} grid grid-cols-4 place-items-center-center`}>
        <div className="h-full bg-red-600 hidden md:block">genre</div>
        <div className=" bg-blue-700 w-full md:col-span-3 col-span-4 ">
          items
        </div>
    </div>
  )
}

export default Home