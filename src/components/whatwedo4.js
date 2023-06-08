import './whatwedo.css';
import whatwedo4 from '../images/what we do 4.svg'

export default function Whatwedo4() {
    return (
        <div className='whatwedo-wrapper'>
            <div className='content'>
                <h3 className='sub-heading'>Social Media Marketing</h3>
                <p>We help you connect with your target audience on social media, build your brand, 
                and drive engagement and conversions. Our social media marketing services include strategy 
                development, content creation, and community management.</p>
            </div>
            <img src={whatwedo4} alt='Social Media Marketing' className='whatwedo-img' />
        </div>
    );
}