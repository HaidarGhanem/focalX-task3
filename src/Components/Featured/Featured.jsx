import './Featured.css'

const Featured = () => {
  return (
    <div className="featured__container">
        <div className="featured__img">
            <div className="featured__img__box"><img src="/images/featured.jpg" alt=""/>
                <div className="featured__icon__box"><img src="/images/featured-icon.png" alt=""/></div> 
            </div>
            
        </div>
        <div className="featured__content">
            <span className='span1'>| FEATURED</span>
            <h3>Best Appartment & Sea View</h3>
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
  )
}

export default Featured