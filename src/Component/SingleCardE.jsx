import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function SingleCardE({ education }) {
    return (
        <div>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{
                        bgcolor: '#F6B846'
                    }}></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <button className='bg-transparent px-1 rounded-md text-black border-[#f6b846] border-2 mb-2'>
                        {education.year}
                    </button>
                    <div className='mb-7'>
                        <h1 className='text-xl font-bold mb-2'>{education.School_name}</h1>
                        <h3 className='text-pretty'>India</h3>
                        <p className='text-xl font-mono mt-3'>
                            {education.title}
                        </p>
                        <p className='text-gray-700 mt-5'>
                            {education.address}
                        </p>
                    </div>
                    <hr className='mb-3'></hr>
                </TimelineContent>
            </TimelineItem>
        </div>
    )
}

export default SingleCardE