import Hero from "./components/hero";
import Whatwedo from "./components/whatwedo";
import Footer from "./components/footer";
import Contact from "./contact";
import './home.css';

const Home = () => {
    return (
      <>
        <Hero />
        <Whatwedo />
        <div className='app-para'>
          <p>
            Our approach is data-driven, and our solutions are customized to meet the unique needs of 
            each of our clients. We work closely with you to understand your goals, target audience, 
            and competition,  and use this information to create a tailored digital strategy that 
            delivers results. With our team of experts has a proven track record of success, and 
            we are committed to delivering exceptional results and outstanding customer service. 
            Whether you are looking to launch a new website, increase online visibility, or drive 
            more sales, we have the skills and experience to help you succeed. Don't settle for just 
            any digital agency. Choose a partner that is dedicated to your success. Contact us today 
            to learn more about our services and how we can help you grow your business.
          </p>
          <a className='btn' href={Contact}>Book a consultation</a>
        </div>
        <Footer />
      </>
    )
  };
  
  export default Home;