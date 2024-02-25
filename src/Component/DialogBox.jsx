// import certification_photo from '../assets/certificate1.jpeg'
import CloseIcon from '@mui/icons-material/Close';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DownloadIcon from '@mui/icons-material/Download';
import Dialog from '@mui/material/Dialog';
const Style_icons = {
    width: '25px',
    height: '24px',
    color: 'white'
}

function DialogBox({ open, handleClose, fullscreen, enterFullscreen, exitFullscreen, certification_photo }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    backdrop: {
                        style: { backgroundColor: 'rgba(0, 0, 0,1)' } // Adjust the opacity here
                    }
                }}
                class="-z-20"
            >
                <div className='bg-[rgba(0,0,0,1)] gap-4 flex flex-row py-4 px-4 ml-0 justify-end items-center'>
                    <div>

                        <button>
                            {
                                fullscreen == false ? <FullscreenIcon style={Style_icons} onClick={enterFullscreen} /> : <CloseFullscreenIcon style={Style_icons} onClick={exitFullscreen} />
                            }
                        </button>
                    </div>
                    <div>
                        <button><DownloadIcon style={Style_icons} /></button>
                    </div>
                    <div>
                        <button>
                            <CloseIcon style={Style_icons} onClick={handleClose} />
                        </button>
                    </div>
                </div>
                <img src={certification_photo}></img>
            </Dialog>
        </div>
    )
}

export default DialogBox