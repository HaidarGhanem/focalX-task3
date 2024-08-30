import './Infobar.css'

const Infobar = () => {
  return (
    <div className="infobar">
        <div className="infobar__container">
            <ul className="info__box">
                <li><i className="fa fa-envelope"></i>info@company.com</li>
                <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
            </ul>

            <ul className="info__social">
                <li><a href="#"><i className='fab fa-facebook'></i></a></li>
                <li><a href="#"><i className='fab fa-twitter'></i></a></li>
                <li><a href="#"><i className='fab fa-linkedin'></i></a></li>
                <li><a href="#"><i className='fab fa-instagram'></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Infobar