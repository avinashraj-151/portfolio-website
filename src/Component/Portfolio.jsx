import { Box } from '@mui/material'
import project1 from '../assets/project1_1.png'
import project2 from '../assets/project2_1.png'
import project3 from '../assets/project3_1.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import vercal from '../assets/vercel.png'
const projects = [{
    id: 1,
    name: 'Github Tracker',
    image: project1,
    url: 'https://github.com/avinashraj-151',
    date: '02-06-2024',
}, {
    id: 2,
    name: 'Place picker',
    image: project2,
    url: 'https://github.com/avinashraj-151',
    date: '02-06-2024',
}, {
    id: 3,
    name: 'React project managment',
    image: project3,
    url: 'https://github.com/avinashraj-151',
    date: '02-06-2024',
},]
function portfolio() {
    function handelClick() {
        console.log('Button clicked hogaya');
    }
    return (
        <div className="lg:px-12 px-4 py-32 bg-[#E8E8E8]">
            <Box class='mb-20'>
                <div className=" text-headingcolor " >
                    <p className="text-xl font-semibold mb-5">Recent Projects</p>
                    <h2 className="md:text-5xl text-4xl font-bold  ">My portfolio</h2>
                </div>
            </Box>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {

                    projects.map(function (project) {
                        return (
                            <Box class='shadow-2xl rounded-lg cursor-pointer mb-7' key={project.id}>
                                <div className='relative inline-block group'>
                                    <img src={project.image} className='mb-2 hover:opacity-15 bg-opacity-55 group'></img>
                                    <a className="absolute top-1/2 left-1/2 opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <h1 className='text-xl font-bold mb-5'>{project.name}</h1>
                                    </a>
                                </div>
                                <div className='p-4'>
                                    {/* <h1 className='text-xl font-bold mb-5'>{project.name}</h1> */}
                                    <div className='flex items-center justify-between gap-6'>
                                        <div className=' flex flex-row gap-3'>
                                            <button className='hover:scale-95'>
                                                <a href={project.url} target='_blank'>
                                                    <GitHubIcon class='w-12 h-12' />
                                                </a>
                                            </button>
                                            <button className='hover:scale-95'>
                                                <a>
                                                    <img src={vercal} className='w-10 h-10'></img>
                                                </a>
                                            </button>
                                        </div>
                                        <p className='text-[#2AD882] hover:text-red-600'>{project.date}</p>
                                    </div>
                                </div>
                            </Box>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default portfolio







{/* Your content here, including the button */ }
{/* <button
                                            className='px-6 py-2 rounded-md border-[#CF2025] border-2 bg-[#CF2025] text-[#F7ECDE]'
                                            onClick={handelClick}
                                        >
                                            Live Preview
                                        </button> */}