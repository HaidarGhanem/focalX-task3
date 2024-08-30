import './InfoBar.css'

const InfoBar = () => {
  return (
    <nav className="infobar">
        <div className="infobar__container">
            <div className="infobar__info">
                <div className="infobar__mail">
                    <img src="/icons/mail.png" alt="mail" className='topicon'  style={{paddingRight: "5px", paddingBottom:"4px"}}/>
                    <span >info@company.com</span>
                </div>
                <div className="infobar__map">
                    <img src="/icons/map.png" alt="map" className='topicon'  style={{paddingRight: "5px", paddingBottom:"5px"}}/>
                    <span >Sunny Isles Beach, FL 33160</span>
                </div>
            </div>
            
            <ul className="infobar__menu">                                                                  
                <li className="items"><div className="circle"><a href="#" className='infobar__links'><img src="/icons/facebook.png" alt="facebook" /></a></div></li>
                <li className="items"><div className="circle"><a href="#" className='infobar__links'><img src="/icons/twitter.png" alt="twitter" /></a></div></li>
                <li className="items"><div className="circle"><a href="#" className='infobar__links'><img src="/icons/linked.png" alt="linkedIn" /></a></div></li>
                <li className="items"><div className="circle"><a href="#" className='infobar__links'><img src="/icons/instagram.png" alt="instagram" /></a></div></li>
            </ul>
            
        </div>
    </nav>
  )
}

export default InfoBar