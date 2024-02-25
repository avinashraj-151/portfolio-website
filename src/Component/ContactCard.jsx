
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import { Avatar } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';

const Style_icons = {
    width: '50px',
    height: '50px',
}
const style_message = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
}
const Contact_details = [{
    id: 1,
    title: 'Address',
    icon: <AlignHorizontalCenterIcon style={Style_icons} />,
    message: '123 Main Street, San Francisco, CA',
}, {
    id: 2,
    title: 'Contact Number',
    icon: <LocalPhoneIcon style={Style_icons} />,
    message: '+ 1235 2355 98',
}, {
    id: 3,
    title: 'Email Address',
    icon: <SendIcon style={Style_icons} />,
    message: 'avinashrajraj628@gmail.com',
}, {
    id: 4,
    title: 'Website',
    icon: <PublicIcon style={Style_icons} />,
    message: 'yoursite.com',
}]
function ContactCard() {
    return (
        <div className='grid lg:grid-cols-4 gap-4'>
            {
                Contact_details.map(function (contact) {
                    return (
                        <div className='bg-white px-3 py-5 shadow-md shadow-red-500 flex-col items-center justify-center cursor-pointer' key={contact.id}>
                            <div className='flex items-center justify-center'>
                                <Avatar style={style_message}>
                                    {contact.icon}
                                </Avatar>
                            </div>
                            <h1 className='text-base font-bold text-center mt-4 mb-4'>{contact.title}</h1>
                            <p className='text-pretty text-center text-[#3e64ff] cursor-pointer'>{contact.message}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactCard