import './whatwedo.css';
import whatwedo5 from '../images/what we do 5.svg'

export default function Whatwedo5() {
    return (
        <div className='whatwedo-wrapper'>
            <img src={whatwedo5} alt='Branding' className='whatwedo-img' />
            <div className='content'>
                <h3 className='sub-heading'>Branding</h3>
                <p>We are committed to helping you build a strong and impactful brand presence 
                that resonates with your target audience and drives business growth. Our goal is 
                to create a cohesive and compelling brand identity that captures the essence of 
                your brand that differentiates you from competitors, and establishes a strong emotional 
                connection with your target market.</p>
            </div>
        </div>
    );
}