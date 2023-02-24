import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

function openResume() {
    window.open('/data/Tyrone_Cloma_Resume.pdf')
}
function openGithub() {
    window.open('https://github.com/tcloma')
}
function openLinkedIn() {
    window.open('https://linkedin.com/in/tyronecloma/')
}



export default function MenuSocials() {
    return (
        <div>
            <div className="tooltip tooltip-bottom" data-tip="Resume">
                <button className='btn-ghost btn rounded-2xl text-3xl' onClick={openResume}>
                    <FaFilePdf />
                </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Github">
                <button className='btn-ghost btn rounded-2xl text-3xl' onClick={openGithub}>
                    <FaGithub />
                </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
                <button className='btn-ghost btn rounded-2xl text-3xl' onClick={openLinkedIn}>
                    <FaLinkedin />
                </button>
            </div>
        </div>
    )
}