import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Timeline from '@mui/lab/Timeline';
import { Avatar } from '@mui/material';
// npm install 
import SchoolIcon from '@mui/icons-material/School';
import SingleCardE from './SingleCardE';

const style_message = {
    width: '80px',
    height: '80px',
    backgroundColor: 'blue',
}
const Education_details = [
    {
        id: 1,
        year: "Sep'20 - Present",
        title: 'B.Tech. in Computer Science',
        School_name: 'Lovely Professional university',
        address: 'Lovely Professional University Private university in Phagwara, Punjab'
    }, {
        id: 2,
        year: "May18 - Mar '19",
        title: 'Higher secondary school',
        School_name: 'Marigold Public School',
        address: ' Marigold Public School, Kh No. 559, Katewara, Delhi'
    }, {
        id: 3,
        year: "May '17 - Mar '18",
        title: 'Secondary school',
        School_name: 'Bahera Public School',
        address: 'Bahera Bazar-Dharaura, Bashuham, Bihar 847201'
    }
]
function EductionCard() {
    return (
        <div>
            <Timeline>
                <TimelineOppositeContent>
                    <div className='flex flex-row gap-8 items-center justify-items-center'>

                        <Avatar style={style_message}>
                            <SchoolIcon />
                        </Avatar>
                        <h1 className='text-xl py-4 font-semibold'>Education</h1>
                    </div>
                </TimelineOppositeContent>{
                    Education_details.map((education) => {
                        return (
                            <SingleCardE key={education.id} education={education}></SingleCardE>
                        )
                    })
                }
            </Timeline>
        </div>
    )
}

export default EductionCard