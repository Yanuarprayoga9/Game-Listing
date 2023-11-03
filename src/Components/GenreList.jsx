import { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi'

const GenreList = () => {
    const [genreList, setGenreList] = useState([])
    const [active, setSActive] = useState(0)
    useEffect(() => {
        console.log(localStorage.getItem('theme'))
        getGenre()
        console.log(genreList)
    }, [genreList])

    const getGenre = async () => {
        await GlobalApi.genreLIst
            .then(res => { setGenreList(res.data.results) })
            .catch(err => { console.log(err.message) })
    }

    return (
        <div className=''>
            <h1 className='text-[30px] font-bold text-center mb-5' >Genre</h1>
            {genreList.map((genre, index) => (
                <div onClick={()=>setSActive(index)} className={`flex gap-1 gap-x-2  items-center mb-2 cursor-pointer hover:bg-gray-400 rounded ${active == index ?"bg-gray-400 dark:bg-gray-600":null }`} key={genre.id}>
                    <img src={genre.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover::scale-105 transition-all' alt="" width={70} />
                    <h2 className='dark:white text-[20px] group-hover:font-bold transition-all'>{genre.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default GenreList