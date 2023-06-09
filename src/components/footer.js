import './footer.css';
import logoBlk from '../images/logo (black).svg';
import whatsapp from '../images/whatsapp.svg';
import facebook from '../images/facebook.svg';
import youtube from '../images/youtube.svg';
import sms from '../images/sms.svg';
import Form from './form';

export default function Footer() {
    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='newsletter'>
                    <h3 className='sub-heading'>Newsletter</h3>
                    <p>Be the first one to know  about discounts, offers and events weekly in 
                    your mailbox. Unsubscribe whenever you like with one click.</p>
                    <div className='searchBar'>
                        <div className='name-logo'>
                            <img src={sms} alt='icon'/>
                            <Form />
                        </div>  
                        <button type="submit" className='btn' >Submit</button>                 
                    </div>
                </div>
                <div className='social'>
                    <img src={logoBlk} alt='logo' className='logo-blk'/>
                    <p>Follow us on our social. We would love to hear from you!</p>
                    <div className='social-wrapper'>
                        <a className='social-links' href='#'>
                            <img src={facebook}/>
                        </a>
                        <a className='social-links' href='#'>
                            <img src={youtube}/>
                        </a>
                        <a className='social-links' href='#'>
                            <img src={whatsapp}/>
                        </a>
                    </div>
                    <p>© 2000-2022, All Rights Reserved</p>
                </div>
             </div>
        </footer>
        
    );
}