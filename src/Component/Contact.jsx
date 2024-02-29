import { Card, Box, TextField, InputLabel, OutlinedInput, InputAdornment } from "@mui/material"
import ContactCard from "./ContactCard"
import Form from "./Form"
import banner from '../assets/contact1.png'
function Contact() {
    return (
        <div className="lg:px-12 px-4 bg-[#E8E8E8] py-20" id='contact'>
            <div className=" text-headingcolor mb-20 text-center">
                <p className="text-xl font-semibold mb-5">Get In Touch </p>
                <h2 className="md:text-5xl text-4xl font-bold">Contact Me</h2>
                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <ContactCard></ContactCard>
            <Box class='flex flex-row mt-20 gap-8 shadow-lg'>
                <Box class='lg:w-1/2 lg:block w-full hidden'>
                    <img src={banner} className="mt-10"></img>
                </Box>
                <Box class='w-full lg:w-1/2'>
                    <Form></Form>
                </Box>
            </Box>
        </div>
    )
}

export default Contact