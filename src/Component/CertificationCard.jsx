import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Timeline from '@mui/lab/Timeline';
import { Avatar } from '@mui/material';
import SingleCardCer from './SingleCardCer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import gfg from '../assets/gfg.svg'
import udemy from '../assets/udemy.svg'
import gfg_cer from '../assets/gfg_cer1.png'
import udemy1 from '../assets/udemy1.jpg'
import udemy2 from '../assets/udemy2.jpg'
import udemy3 from '../assets/udemy3.jpg'

const style_message = {
    width: '80px',
    height: '80px',
    backgroundColor: 'blue',
    link: gfg_cer
}
const Certification_details = [{
    id: 1,
    Company: 'Geeks for Geeks',
    message: 'Data structures and algorithm course',
    image: gfg,
    link: gfg_cer
}, {
    id: 2,
    Company: 'Udemy',
    message: 'Oracle SQL Course',
    image: udemy,
    link: udemy3
}, {
    id: 3,
    Company: 'Udemy',
    message: 'C++ Programming Beginner to Beyond Course',
    image: udemy,
    link: udemy2
}, {
    id: 4,
    Company: 'Udemy',
    message: 'C++ Programming Beginner to Advance Course',
    image: udemy,
    link: udemy1
}]
function CertificationCard() {
    return (
        <div>
            <Timeline>
                <TimelineOppositeContent>
                    <div className='flex flex-row gap-8 items-center justify-items-center'>

                        <Avatar style={style_message}>
                            <WorkspacePremiumIcon />
                        </Avatar>
                        <h1 className='text-xl py-4 font-semibold'>Certification</h1>
                    </div>
                </TimelineOppositeContent>
                {
                    Certification_details.map((Certification) => {
                        return (
                            <SingleCardCer key={Certification.id} Certification={Certification}></SingleCardCer>
                        )
                    })
                }
            </Timeline>
        </div >
    )
}

export default CertificationCard