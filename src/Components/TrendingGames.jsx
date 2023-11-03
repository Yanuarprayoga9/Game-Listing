import React from 'react'

const TrendingGames = ({ game }) => {
    console.log(game)
    return (
        <div className='mt-5'>
                <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
            <div className='grid md:grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
                {game.map((item, index) =>index < 8 && (
                    <div key={index} className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer pb-3">
                        <img src={item.background_image} alt="" className='h-[270px] rounded-lg object-cover mb-3' />
                        <h2 className='dark:text-white text-[20] font-bold text-center'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames