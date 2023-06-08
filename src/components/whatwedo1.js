import './whatwedo.css';
import whatwedo1 from '../images/what we do 1.svg'

export default function Whatwedo1() {
    return (
        <div className='whatwedo-wrapper'>
            <img src={whatwedo1} alt='web design and development' className='whatwedo-img' />
            <div className='content'>
                <h3 className='sub-heading'>Website Design and Development</h3>
                <p>We design and build beautiful and user-friendly websites that engage your 
                target audience and effectively communicate your brand message. Our websites 
                are responsive, optimized for search engines, and built to deliver a seamless 
                user experience on all devices.</p>
            </div>
        </div>
    );
}