import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import GenreList from '../Components/GenreList';
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames';
import GamesByGenreId from '../Components/GamesByGenreId';
const Home = () => {
  const [gameListByGenres, setGameListByGenres] = useState([])
  const { theme, setTheme } = useContext(ThemeContext);
  const [allGames, setAllgames] = useState([]);
  useEffect(() => {
    getAllGames()
    getGameListByGenreId()
  }, [])
  const getAllGames = () => {
    GlobalApi.gameLIst
      .then(res => {
        setAllgames(res.data.results)
        setGameListByGenres(res.data.results)

      })
      .catch(err => console.log(err))
  }
  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(4)
    .then(res=>console.log(res.data.results))
    .catch(err=>console.log(err))
  }
  return (
    <div className={`${theme == 'dark' ? 'text-lime-50' : null} grid grid-cols-4 place-items-center-center`}>
      <div className="h-full  hidden md:block ml-5">
        <GenreList />
      </div>
      <div className=" w-full md:col-span-3 col-span-4 ">

        {allGames?.length>0&&gameListByGenres.length>0?
          <div className="">
            <Banner game={allGames[0]} />
            <TrendingGames game={allGames} />
            <GamesByGenreId GamesByGenreId={gameListByGenres}/>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default Home
