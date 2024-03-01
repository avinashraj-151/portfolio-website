import { Box } from '@mui/material'
import { Skillcard } from './Skillcard';
import js from '../assets/js.png'
import rectjs from '../assets/react1.png'
import java from '../assets/java.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import python from '../assets/python3.png'
import node from '../assets/node.png'
import boot from '../assets/Boot.png'
import sql from '../assets/sql2.png'
import cpp from '../assets/cpp2.png'
import c from '../assets/c.png'
const skill_set = [
    {
        id: 1,
        name: 'C++',
        value: 80,
        Image: c,
    },
    {
        id: 2,
        name: 'Python',
        value: 80,
        Image: python,
    }, {
        id: 3,
        name: 'Java',
        value: 70,
        Image: cpp
    }, {
        id: 9,
        name: 'javascript',
        value: 60,
        Image: js
    },
    {
        id: 4,
        name: 'HTML',
        value: 80,
        Image: html
    }, {
        id: 5,
        name: 'CSS',
        value: 80,
        Image: css
    }, {
        id: 6,
        name: 'Bootstrap',
        value: 60,
        Image: sql
    }, {
        id: 7,
        name: 'React',
        value: 70,
        Image: rectjs
    }
    , {
        id: 8,
        name: 'Node.js',
        value: 60,
        Image: node
    },
]
function Skills() {
    return (
        <Box class='lg:px-12 px-4 py-40 bg-[#E8E8E8]' id='skills'>
            {/* Skills */}
            <Box class='mb-20'>
                <h1 className='text-xl font-semibold mb-5'>My Skills</h1>
                <h1 className='md:text-5xl text-4xl font-bold'>My Expertise</h1>
            </Box>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {
                    skill_set.map(function (skill) {
                        return (
                            <Skillcard key={skill.id} skill_name={skill.name} skill_value={skill.value} image_src={skill.Image} />
                        )
                    })
                }

            </div>
        </Box>
    )
}

export default Skills