import './PropPage.css'
import InfoBar from '../Infobar/Inforbar'
import Navbar from '../Navbar/Navbar'
import Panel from '../Panel/Panel'
import Footer from '../Footer/Footer'
import Deal from '../Deal/Deal'

const PropPage = () => {
  return (
    <>  
        <InfoBar />
        <Navbar />
        <Panel title="Home / Single Property" hero="SINGLE PROPERTY"/>
        <div>
        <div className="prop__feature">
        <div className="featured__container">
        <div className="featured__img">
            <div className="featured__img__box__prop"><img src="/images/property-01.jpg" alt=""/>        
        </div>
            
        </div>
        <div className="featured__content__prop">
        </div>
        <div className="featured__details">
            <div className="details__item">
                <img src="/images/info-icon-01.png" alt="" />
                <div className="text">
                    <h4>250 m2</h4>
                    <p>Total Flat Space</p>
                </div>
            </div>
            <div className="details__item">
                <img src="/images/info-icon-02.png" alt="" />
                <div className="text">
                    <h4>Contract</h4>
                    <p>Contract Ready</p>
                </div>
            </div>
            <div className="details__item">
                <img src="/images/info-icon-03.png" alt="" />
                <div className="text">
                    <h4>Payment</h4>
                    <p>Payment</p>
                </div>
            </div>
            <div className="details__item">
                <img src="/images/info-icon-04.png" alt="" />
                <div className="text">
                    <h4>Safety</h4>
                    <p>24/7 Under Control</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="prop__text">
            <div className="prise-box">
                <span className='type'>Apparment</span>
            </div>

            <h4>24 New Street Miami, OR 24560</h4>
            <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p> 
            <p>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
            <div className="featured__text">
                <span className='span2'>Best Useful Links ?</span>
                <p>
                    Get <strong>the best villa</strong> website template in HTML CSS
                    and Bootstrap for your business. TemplateMo
                    provides you the best free CSS templates in the
                    world. Please tell your friends about it.
                </p>
                <h5>How does this work ?</h5>
                <h5>Why is Villa Agency the best ?</h5>
            </div>
        </div>
        </div>
        <Deal />
        <Footer />
    </>
  )
}

export default PropPage