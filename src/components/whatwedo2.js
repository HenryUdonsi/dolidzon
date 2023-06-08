import './whatwedo.css';
import whatwedo2 from '../images/what we do 2.svg'

export default function Whatwedo2() {
    return (
        <div className='whatwedo-wrapper'>
            <div className='content'>
                <h3 className='sub-heading'>Search Engine Optimization (SEO)</h3>
                <p>Our SEO services help your website rank higher in search engine results pages, 
                making it easier for your target audience to find you. We use data-driven and ethical
                SEO strategies to improve your website's visibility, attract more organic traffic, and 
                drive more leads and sales for your business.</p>
            </div>
            <img src={whatwedo2} alt='Search Engine Optimization' className='whatwedo-img' />
        </div>
    );
}