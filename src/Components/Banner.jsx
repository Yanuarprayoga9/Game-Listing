import React from 'react'

const Banner = ({ game }) => {
    return (
        <div className='relative'>
            <h1 className='text-[30px] font-bold text-center mb-5'>Popular Games</h1>
            <div className="absolute bottom-0  bg-gradient-to-t from-slate-900 to-transparent w-full">
                <h1 className='text-[24px] font-bold ml-5' >{game.name}</h1>
                <button className='bg-blue-700 p-2 rounded-xl ml-5 mb-5'>Get Now!</button>
            </div>
            <img className="md:h-[320px] w-full rounded-2xl   object-cover" src={game.background_image} alt="" />
        </div>
    )
}


export default Banner