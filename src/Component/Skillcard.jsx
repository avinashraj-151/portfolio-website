import { CircularProgress, Box } from '@mui/material';
import { useEffect, useState } from 'react';
export function Skillcard({ skill_name, skill_value, image_src }) {
    const [progress, setProgress] = useState(0);

    const progressStyle = {
        width: '150px', // Set your desired width
        height: '150px', // Set your desired height
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= skill_value ? 0 : prevProgress + 10
            );
        }, 600);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Box class="relative inline-flex shadow-lg px-4 py-4 rounded-md bg-white items-center justify-center">
            <CircularProgress variant="determinate" value={progress} style={progressStyle} />
            <Box
                class='absolute flex items-center justify-center m-0 px-4 py-4 rounded-full border-red-600 border-x-2'
            >
                {/* <h1 className='text-xl font-bold text-center justify-center'>{skill_name}</h1> */}
                <img src={image_src} className='w-20'></img>
            </Box>
        </Box>
    );
}

