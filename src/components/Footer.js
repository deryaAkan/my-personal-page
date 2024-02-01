import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import { faTwitter, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const icons = [
        { icon: faTwitter, className: 'text-[#4731D3]' },
        { icon: faCodepen, className: 'text-[#4731D3]' },
        { icon: faAt, className: 'text-[#4731D3]' },
        { icon: faInstagram, className: 'text-[#4731D3]' }
    ];

    return (
        <footer className='CommonThings bg-white text-[#777777]'>
            <div className='w-2/6 flex flex-col justify-center items-center'>
                <h3 className='font-bold text-[#4731D3] text-[48px]'>Send me a message!</h3>
                <p className='font-normal text-[24px]'>Got a question or proposal, or just want to say hello? Go ahead.</p>
                <a className='text-[20px] text-[#4731D3]'>almilasucode@gmail.com</a>
                <div className='ICONSSS flex flex-wrap gap-5'>
                    {icons.map((iconObject, index) => (
                        <FontAwesomeIcon key={index} icon={iconObject.icon} className={iconObject.className} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
