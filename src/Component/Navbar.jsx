import logo from '../assets/logo3.png'
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { AppBar, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar_data = [{
    id: 1,
    title: 'Home',
    link: 'home',
    to: 'home'
}, {
    id: 2,
    title: 'Education',
    link: 'Education',
    to: 'Education'
}, {
    id: 3,
    title: 'Skills',
    link: 'skills',
    to: 'skills',

}, {
    id: 5,
    title: 'About',
    link: 'about',
    to: 'about',
}, {
    id: 4,
    title: 'Portfolio',
    link: 'portfolio',
    to: 'portfolio'
}, {
    id: 6,
    title: 'Testimonial',
    link: 'testimonials',
    to: 'testimonials',
}]

function ResponsiveAppBar() {
    const [isopen, setopen] = useState(false);
    return (<>
        <AppBar position='fixed' sx={{
            boxShadow: 'none',
        }}>
            <header>
                <nav className={`py-4 md:px-12 px-4 text-black  bg-[#E7DFD8] `}>
                    <div className='flex justify-between items-center'>
                        {/* image */}
                        <div>
                            <img src={logo} alt='logo' className='w-[100px] h-16 cursor-pointer'></img>
                        </div>
                        {/* navbar */}
                        <div className=' lg:flex md:flex  gap-4 justify-between items-center hidden'>
                            {
                                Navbar_data.map((data) => {
                                    return (
                                        <Link
                                            to={data.to}
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            className='block text-xl text-pretty px-4 py-2 cursor-pointer hover:text-[#CF2025] hover:underline transition-all duration-100' key={data.id}>{data.title}</Link>
                                    )
                                })
                            }
                        </div>

                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={50}
                        >
                            <button className='lg:block  hidden bg-transparent px-6 py-2 rounded-md text-black border-[#CF2025] border-2
                      hover:bg-[#CF2025] hover:text-[rgb(247,236,222)]
                    '>
                                Contact Me
                            </button>
                        </Link>
                        {/*  mobile view menu button */}
                        <button className='lg:hidden outline-0' onClick={() => setopen(!isopen)}>
                            {
                                isopen == false ?
                                    <MenuIcon sx={{
                                        color: 'black'
                                    }} /> : <CloseIcon sx={{ color: 'black' }} />
                            }
                        </button>
                    </div>
                </nav>
            </header>
            {
                isopen &&
                <div className='bg-red-700 px-4 py-8 text-white'>
                    {
                        Navbar_data.map((data) => {
                            return (
                                <Link to={data.to} spy={true} key={data.id}
                                    smooth={true} activeClass="active"
                                    offset={-100} className='block py-2 px-4 cursor-pointer text-white hover:text-gray-400 text-xl'>
                                    {data.title}
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </AppBar>

    </>
    );
}
export default ResponsiveAppBar;
