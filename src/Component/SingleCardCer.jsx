import { useState } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DialogBox from './DialogBox';
export default function SingleCardCer({ Certification }) {
    const [open, setopen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    function handelopen() {
        setopen(true);
    }
    function handleClose() {
        setopen(false);
        setFullscreen(false);
    }
    function enterFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

        setFullscreen(true);
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        setFullscreen(false);
    }
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
                        2010 - 2014
                    </button>
                    <div className=''>
                        <div className='flex flex-row justify-between gap-1'>
                            <h1 className='text-xl font-semibold mb-2 '>{Certification.Company}</h1>
                            <img src={Certification.image} className='w-10 cursor-point rounded-full border-red-600 border-x-2 '></img>
                        </div>
                        {/* <h3 className='text-pretty'>United States</h3> */}
                        <p className='text-gray-700 mt-5 font-mono'>
                            {Certification.message}
                        </p>
                        <button className='text-xl font-medium py-3 mt-3' onClick={handelopen}>Certification</button>
                        <DialogBox open={open} handleClose={handleClose}
                            fullscreen={fullscreen}
                            enterFullscreen={enterFullscreen}
                            exitFullscreen={exitFullscreen}
                            // image={Certification.link}
                            certification_photo={Certification.link}
                        ></DialogBox>
                    </div>
                    <hr className='mb-3'></hr>
                </TimelineContent >
            </TimelineItem >
        </div >
    )
}
