import { Box, Fab } from '@mui/material'
// import background from '../assets/bg_round.png'
import banner from '../assets/banner9.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Home() {
    return (
        <Box class='
        md:flex-row-reverse flex-col  lg:px-12 px-4 flex md:py-32 justify-between items-center gap-8 bg-[#E7DFD8]' id='home' >
            <Box class='w-full md:w-1/2'>
                <img src={banner} alt='' className=''></img>
            </Box>
            <Box class='w-full md:w-1/2 items-center'>
                <Box class='p-4'>
                    <Box class='mb-7'>
                        <h1 className='text-black font-semibold text-xl mb-5'>Hey, I am Avinash Raj</h1>
                        <h1 className='lg:text-6xl text-6xl  font-bold leading-snug md:leading-[76px] mb-6'>I Am A <span className='text-[#93A9FF]'>Software Developer</span></h1>
                        <p className='text-xl leading-9 '>Welcome to my portfolio! I'm passionate about crafting innovative solutions and creating seamless user experiences. As a dedicated software developer, I thrive on turning ideas into reality. Explore below to learn more about my skills, projects, and journey in the world of technology.</p>
                    </Box>
                    <Box class='mt-6'>
                        {/* <Fab color="primary" sx={{ mr: 2 }} > */}
                        <a href='https://www.linkedin.com/in/avinashraj1/' target='_blank'>
                            <Fab color="primary" sx={{ mr: 2 }} >
                                <LinkedInIcon />
                            </Fab>
                        </a>
                        <a href='https://github.com/avinashraj-151' target='_blank'>
                            <Fab color="primary" sx={{ mr: 2 }}>
                                <GitHubIcon />
                            </Fab>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home