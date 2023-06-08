import './whatwedo.css';
import whatwedo3 from '../images/what we do 3.svg'

export default function Whatwedo3() {
    return (
        <div className='whatwedo-wrapper'>
            <img src={whatwedo3} alt='Pay-Per-Click (PPC) Advertising' className='whatwedo-img' />
            <div className='content'>
                <h3 className='sub-heading'>Pay-Per-Click (PPC) Advertising</h3>
                <p>Our PPC services help you reach your target audience quickly and effectively. 
                We create targeted and cost-effective PPC campaigns that drive traffic and generate 
                leads and sales for your business.</p>
            </div>
        </div>
    );
}