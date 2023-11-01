import { useState } from 'react';
import logo from '../assets/code.jpg'
import { HiMagnifyingGlass, HiMoon, HiMiniSun } from "react-icons/hi2";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='flex items-center p-3 '>
            {/* <img src={logo} alt="logo" width={60}/> */}
            <h3>Yanuar</h3>
            <div className='flex bg-slate-300 p-2 w-full items-center mx-5 rounded-full mt-2 m-2'>
                <HiMagnifyingGlass />
                <input type="text" name="" id="" className='px-2 dark:bg-rose-800 bg-transparent outline-none' placeholder='Search Games' />
            </div>
            <div className="">
                <button onClick={handleToggle}>{toggle ? <HiMoon className='bg-slate-300 rounded-full text-[30px] text-black p-1' /> : <HiMiniSun className='bg-slate-300 rounded-full text-[30px] text-black p-1' />}</button>
            </div>
        </div>

    )
}

export default Header