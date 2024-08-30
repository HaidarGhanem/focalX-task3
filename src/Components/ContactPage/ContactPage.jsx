
import Footer from '../Footer/Footer'
import InfoBar from '../Infobar/Inforbar'
import Navbar from '../Navbar/Navbar'
import Panel from '../Panel/Panel'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
        <InfoBar />
        <Navbar />
        <Panel title="Home / Contact Us" hero="CONTACT US" />
        <div className="contact__page__container">
            <div className="contact__page__content">
                <div className="content__text">
                    <span>| BEST DEAL</span>
                    <h1>Get In Touch With Our Agents</h1>
                    <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>

                    <div className="content__details">
                        <div className="content__details__box">
                            <img src="images/phone-icon.png" alt="phone-icon" />
                            <div className="box__text">
                                <h3>010-020-0340</h3>
                                <h6>Phone Number</h6>
                            </div>
                        </div>
                        <div className="content__details__box">
                            <img src="images/email-icon.png" alt="email-icon" />
                            <div className="box__text">
                                <h3>info@Villa.co</h3>
                                <h6>Business Email</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__inputs">
                    <div className="inputs__box">
                                
                                
                        <div className="content__input">
                            <label htmlFor='FullName'>Full Name</label>
                            <input type="text"  placeholder='Your Name ...' />
                        </div>
                        <div className="content__input">
                            <label htmlFor='FullName'>Email Address</label>
                            <input type="text"  placeholder='Your E-mail ...' />
                        </div>
                        <div className="content__input">
                            <label htmlFor='FullName'>Subject</label>
                            <input type="text"  placeholder='Subject ...' />
                        </div>
                        <div className="content__input">
                            <label htmlFor='FullName'>Message</label>
                            <input type="text"  placeholder='Message ...' />
                        </div>

                       
                        
                        <button className='contact__btn'>Send Message</button>
                    </div>
                </div>
            </div>

            <div className="contact__page__map">
                <div className="map__box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"></iframe>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactPage