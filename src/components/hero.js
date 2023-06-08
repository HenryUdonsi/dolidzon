import './hero.css';
import HeroImg from '../images/hero.svg';

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='Hero-content'>
                <h1 className='Hero-heading'>We bring your brands to life with 
                Design and strategy</h1>
                <p>We are a team of experienced digital experts, passionate about delivering innovative and impactful solutions that
                    drive growth for your business. Our goal is to help you succeed in today's fast-paced 
                    and constantly evolving digital landscape.
                </p>                
            </div>
            <img src={HeroImg} alt='Hero-image' className='Hero-img'/>
        </div>
    );
}