import about from '../assets/about_me3.png'
import { Fab } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function About() {
    return (
        <div className="lg:px-12 px-4 py-22 bg-[#E7DFD8]">
            <div className='flex items-center justify-between flex-col-reverse gap-12 md:flex-row'>
                <div className="md:w-1/2 px-10 py-20">
                    <p className="text-xl font-semibold mb-5">About</p>
                    <h2 className="md:text-5xl text-4xl font-bold mb-8">About me</h2>
                    <p className="px-8 text-pretty text-xl">
                        Hi, I'm Avinash Raj, a dedicated software developer passionate about turning ideas into digital solutions.
                        <br></br>
                        With expertise in web technologies like React.js, HTML5, and CSS, and proficiency
                        in languages such as C++, Python, C, and JavaScript, I bring a versatile skill set to the table.
                        <br></br>
                        I excel in well-structured algorithms and problem-solving on platforms
                        like LeetCode, GeekForGeeks, and HackerRank.
                        <br></br>
                        As a dynamic team player with organizational skills,
                        Let's collaborate and bring your ideas to life!
                    </p>
                    {/* <ul className='px-8 mt-4'>
                        <li className='block py-3'>
                            <span className='font-bold'>Name :</span>
                            <span className='ml-5 leading-3 text-[#999999]'>Ronaldo Fredrickson</span>
                        </li>
                        <li className='block py-3  '>
                            <span className='font-bold'>Date of birth :</span>
                            <span className='ml-5 leading-3 text-[#999999]'>November 28, 1989</span>
                        </li>
                        <li className='block py-3  '>
                            <span className='font-bold'>Address :</span>
                            <span className='ml-5 leading-3 text-[#999999]'></span>Ronaldo Fredrickson
                        </li>
                        <li className='block py-3  '>
                            <span className='font-bold'>Name:</span>
                            <span className='ml-5 leading-3 text-[#999999]'></span>Ronaldo Fredrickson
                        </li>
                        <li className='block py-3  '>
                            <span className='font-bold'>Name:</span>
                            <span className='ml-5 leading-3 text-[#999999]'></span>Ronaldo Fredrickson
                        </li>
                        <li className='block py-3  '>
                            <span className='font-bold'>Name:</span>
                            <span className='ml-5 leading-3 text-[#999999]'></span>Ronaldo Fredrickson
                        </li>
                    </ul> */}
                    <div className="flex gap-3 px-8 py-4 mt-5">
                        <a href='https://www.linkedin.com/in/avinashraj1/' target='_blank'>
                            <Fab color="primary" sx={{ mr: 2 }} >
                                <LinkedInIcon />
                            </Fab>
                        </a>
                        <button className='px-6 py-2 rounded-md text-black border-[#CF2025] border-2
                      hover:bg-[#CF2025] hover:text-[#F7ECDE]
                    '>
                            Download Cv
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img src={about} className='w-full'></img>
                </div>
            </div>

        </div>
    )
}

export default About