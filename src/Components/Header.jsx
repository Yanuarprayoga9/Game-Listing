import { useContext, useState } from 'react';
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    // const [toggle, setToggle] = useState(false)
    // const handleToggle = () => {
    //     setToggle(!toggle)
    // }
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={`${theme=='dark'? 'text-lime-50': ''} flex items-center p-3`}>
            {/* <img src={logo} alt="logo" width={60}/> */}
            <h2 >Yanuar</h2>
            <div className='flex bg-slate-300 p-2 w-full items-center mx-5 rounded-full mt-2 m-2'>
                <HiMagnifyingGlass />
                <input type="text" name="" id="" className='px-2  bg-transparent outline-none' placeholder='Search Games' />
            </div>
            <div>
                {theme == 'dark' ? <HiSun className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full "
                    onClick={() => setTheme('light')} />
                    :
                    <HiMoon className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
                        onClick={() => setTheme('dark')} />}
            </div>
        </div>

    )
}

export default Header