import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate
import NameLogo from '../assets/images/NameLogo.svg';
import menuLogo from '../assets/icons/menu.svg';
import closeLogo from '../assets/icons/close.svg';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // 使用 useNavigate 钩子

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const handleNavigation = (path) => {
        navigate(path); // 使用 navigate 函数进行页面跳转
        window.scrollTo(0, 0); // 重置滚动位置到顶部
        setToggle(false); // 关闭移动设备上的菜单
    };

    return (
        <header className="header">
            <nav 
                className={`fixed top-0 z-20 w-full flex items-center py-5 ${
                    scrolled ? "bg-blue-200" : "bg-white bg-opacity-30"} text-lg gap-7 font-medium left-0 right-0`}
            >
                <div className='w-full flex justify-between items-center max-w-5xl mx-auto max-container nav-div'>
                    <div className="flex items-center justify-center" onClick={() => handleNavigation("/")}>
                        <img src={NameLogo} alt="Logo" className="h-10 w-auto " />
                    </div>

                    <ul className='list-none hidden sm:flex flex-row gap-8'>
                        <li>
                            <div onClick={() => handleNavigation("/about")} className='cursor-pointer'>
                                About
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleNavigation("/works")} className='cursor-pointer'>
                                Works
                            </div>
                        </li>
                        <li>
                            <div onClick={() => handleNavigation("/contact")} className='cursor-pointer'>
                                Contact
                            </div>
                        </li>
                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img
                            src={toggle ? closeLogo : menuLogo}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain navbar-icon'
                            onClick={() => setToggle(!toggle)}
                        />

                        <div className={`${ !toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                                <li>
                                    <div onClick={() => handleNavigation("/about")} className='cursor-pointer'>
                                        About
                                    </div>
                                </li>
                                <li>
                                    <div onClick={() => handleNavigation("/works")} className='cursor-pointer'>
                                        Works
                                    </div>
                                </li>
                                <li>
                                    <div onClick={() => handleNavigation("/contact")} className='cursor-pointer'>
                                        Contact
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
