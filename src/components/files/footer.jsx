import '../style/Footer.css';
import instagram from '/instagram.svg'
import mail from '/mail.svg'
import facebook from '/facebook.svg'
import location from '/location.svg'
import whatsapp from '/whatsapp.svg'
const Footer = () =>{
    return (
        
        <div className='Footer'>
            <div className='line'></div>
            <div className='footer-main'>
                <div className='text'>Jyotirling Resort</div>
                <div className='text-two'>Rudrapur Guptakashi Rudraprayag (246439)</div>                
            </div>
            <div className='footer-footer'>
            <div className='footer-section'>
                <h3>Company</h3>
                <a href="">About</a>
                <a href="">Cantact</a>
                <a href="">Feedback</a>                
            </div>
            <div className='footer-links'>
                <div className='heading'>Get in Touch</div>
                <div className='img'>
                <a><img src={instagram}  alt='' /></a>
                <a><img src={mail}  alt='' /></a>
                <a><img src={facebook}  alt='' /></a>
                <a><img src={whatsapp}  alt='' /></a>
                <a><img src={location}   alt='' /></a>

                </div>
            </div>
            </div>
            <div className='line'></div>


        </div>


    )
}

export default Footer;