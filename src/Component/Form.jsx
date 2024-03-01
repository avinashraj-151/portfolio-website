import { TextField, CircularProgress, Snackbar, Alert, AlertTitle } from "@mui/material"
import { useState } from "react"
import emailjs from '@emailjs/browser';
function Form() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Message, setmessage] = useState('')
    const [openSnackbar, setopenSnackbar] = useState(false);
    // const [subject, setsubject] = useState('')
    let css_button = 'px-6 py-2 rounded-md  border-[#CF2025] border-2  hover:bg-[#CF2025]  hover:text-[#F7ECDE] '
    const [submitcheck, setsubmitcheck] = useState(false)
    function handelSnackbar() {
        setopenSnackbar(true);
    }
    function handlesnackClose() {
        setopenSnackbar(false);
    }
    function handelSubmit(e) {
        e.preventDefault()
        setsubmitcheck(true);
        const service_id = 'service_gj6eeut'
        const template_id = 'template_vky2np5'
        const publicKey = '1Pi-lWjeBmWvqUpUs'

        const template_params = {
            from_email: email,
            from_name: name,
            to_name: 'avinashraj',
            message: Message
        }

        // console.log({ name, email, Message, subject })
        emailjs.send(service_id, template_id, template_params, publicKey)
            .then((result) => {
                setopenSnackbar(true);
                setsubmitcheck(false);
                setemail('')
                setname('')
                setmessage('')
            }, (error) => {
                console.log(error.text)
            })
    }
    return (
        <div className="p-2">
            <form className="flex flex-col p-5" onSubmit={handelSubmit}>
                <TextField
                    label="Your Name"
                    sx={{ marginBottom: '20px' }}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                />
                <TextField
                    label="Your Email"
                    sx={{ marginBottom: '20px' }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    required
                />
                {/* <TextField
                    label="Subject"
                    sx={{ marginBottom: '20px' }}
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                    required
                /> */}
                <TextField
                    label="Message"
                    multiline
                    rows={9}
                    sx={{ marginBottom: '20px' }}
                    value={Message}
                    onChange={(e) => setmessage(e.target.value)}
                    required
                />
                <button type="submit" className=
                    {
                        `${css_button}${submitcheck == true ? ' bg-[#CF2025] text-[#F7ECDE]' : 'bg-transparent text-black'}`
                    }>
                    {
                        submitcheck == true ?
                            <div className="flex flex-row gap-1 justify-center justify-items-center">
                                <CircularProgress
                                    size={20}
                                    thickness={2}
                                >
                                </CircularProgress>
                                <span>sending...</span>
                            </div>
                            : 'Send'
                    }
                </button>
                <Snackbar
                    open={openSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    autoHideDuration={1500}
                    onClose={handlesnackClose}
                >
                    <Alert
                        onClose={handlesnackClose}
                        sx={{ width: '100%' }}
                        severity="success"
                        variant="filled"
                    >
                        <AlertTitle>Success</AlertTitle>
                        Thanks! We'll get back to you ASAP
                    </Alert>
                </Snackbar>
            </form>
        </div>
    )
}

export default Form