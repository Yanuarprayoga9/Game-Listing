import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import GenreList from '../Components/GenreList';
const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(()=>{
    getAllGames()
  },[])
  const getAllGames = () => {
    GlobalApi.gameLIst
    .then(res=>console.log(res.data.results))
    .catch(err=>console.log(err))
  }
  return (
    <div className={`${theme=='dark'?'text-lime-50':null} grid grid-cols-4 place-items-center-center`}>
        <div className="h-full  hidden md:block ml-5">
          <GenreList />
        </div>
        <div className=" w-full md:col-span-3 col-span-4 ">
          items
        </div>
    </div>
  )
}

export default Home
