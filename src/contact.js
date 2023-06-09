import './contact.css';
import Chat from './images/chat.svg'
import Footer from "./components/footer";
import Input from './components/input';
import SubmitBtn from './components/submitBtn';

export default function Contact() {
  return (
      <div>
          <div className='title'>
              <img src={Chat} className='title-img'/>
              <h1 className='Hero-heading'>Let's Talk</h1>
          </div>
          <p id='contact-para'>To initiate a fruitful discussion, please don't hesitate to contact 
          us via email at <span>info@dolidzon.com</span> or feel the form below and we would 
          promptly arrange a conversation to dive deeper into your potential 
          project.</p>
          {/* <ContactForm /> */}
          <div style={{ width:"65vw", margin: "20px auto" }}>
              <div style={{ display: 'flex' }}>
                  <div style={{ width:'80%' }}>
                      <Input label="First name" placeholder="Enter first name" />
                  </div>
                  <div style={{ width:'80%' }}>
                      <Input label="Last name" placeholder="Enter last name" />
                  </div>
              </div>
          </div>
          <div style={{ width:"65vw", margin: "20px auto" }}>
              <div style={{ display: 'flex' }}>
                  <div style={{ width:'80%' }}>
                      <Input label="Company name" placeholder="Company name" />
                  </div>
                  <div style={{ width:'80%' }}>
                      <Input label="Email" placeholder="Enter your email" />
                  </div>
              </div>
          </div>
          <div style={{ width:"65vw", margin: "20px auto" }}>
            <label className='label'>Budget</label>
            <div className='btn-btn' style={{ display: 'flex', justifyContent: 'space-between', width:'70%' }} >
                <input type='button' value='$25k - $50k'/>
                <input type='button' value='$50k - $100k'/>
                <input type='button' value='$100k - $300k'/>
                <input type='button' value='$300k - $1m'/>
                <input type='button' value='$1m+'/>
            </div>
          </div>
          <div style={{ width:"65vw", margin: "20px auto" }}>
            <label className='label' style={{display: 'block'}}>How did you here about us</label>
            <select name="platforms" id="platforms">
                <option value="none" selected disabled hidden>Select one</option>
                <option value="dribble">Dribble</option>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="behance">Behance</option>
                <option value="referral">Referral</option>
            </select>
          </div>
          <div style={{ width:"65vw", margin: "20px auto" }}>
            <label className='label' style={{display: 'block'}}>What do you want us to do for you</label>
            <textarea id="review" name="review" rows="6" cols="82">Your message</textarea>
            <br></br>
          </div>
          <div style={{ width:"65vw", margin: "20px auto" }}>
            <SubmitBtn value='Submit'/>
          </div>
          <Footer />
      </div>

  );
}