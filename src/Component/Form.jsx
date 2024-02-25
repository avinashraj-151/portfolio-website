import { Card, Box, TextField, InputLabel, OutlinedInput, InputAdornment, Button } from "@mui/material"

function Form() {
    return (
        <div className="p-2">
            <form className="flex flex-col p-5">
                <TextField label="Your Name" sx={{ marginBottom: '20px' }} />
                <TextField label="Your Email" sx={{ marginBottom: '20px' }} />
                <TextField label="Subject" sx={{ marginBottom: '20px' }} />
                <TextField
                    label="Message"
                    multiline
                    rows={7}
                    sx={{ marginBottom: '20px' }}
                />
                <button className='bg-transparent px-6 py-2 rounded-md text-black border-[#CF2025] border-2
                      hover:bg-[#CF2025] hover:text-[#F7ECDE]
                    '>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Form