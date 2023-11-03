import React from 'react'

function GamesByGenreId({ GamesByGenreId }) {
    console.log('a',GamesByGenreId)
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-[30]'>All Games</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4' >
                {GamesByGenreId.map(item => (
                    <div className='' key={item.id}>
                        <img src={item.background_image} alt="" className='rounded object-cover max-h-36 w-60' srcset="" />
                        <h2>{item.name}<span>{item.metacritic}</span></h2>
                        <h2>&#127775; {item.rating}</h2>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GamesByGenreId