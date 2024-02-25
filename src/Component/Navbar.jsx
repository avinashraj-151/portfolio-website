import logo from '../assets/logo3.png'

const Navbar_data = [{
    id: 1,
    title: 'Home',
    link: 'home'
}, {
    id: 2,
    title: 'Education',
    link: 'Education'
}, {
    id: 3,
    title: 'Skills',
    link: 'skills'
}, {
    id: 4,
    title: 'Portfolio',
    link: 'portfolio'
}, {
    id: 5,
    title: 'About',
    link: 'about'
}, {
    id: 6,
    title: 'Testimonial',
    link: 'testimonials'
}]

function ResponsiveAppBar() {
    return (
        <header>
            <nav className='py-4 md:px-12 px-4 bg-[#E7DFD8]'>
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
                                    <a className='block text-xl text-pretty px-4 py-2 cursor-pointer hover:text-[#CF2025] hover:underline transition-all duration-100' key={data.id}>{data.title}</a>
                                )
                            })
                        }
                    </div>
                    {/* button #2970DB bg-[#CF2025] */}
                    <button className='lg:block  hidden bg-transparent px-6 py-2 rounded-md text-black border-[#CF2025] border-2
                      hover:bg-[#CF2025] hover:text-[#F7ECDE]
                    '>
                        Contact Me
                    </button>
                </div>
            </nav>
        </header>
    );
}
export default ResponsiveAppBar;
