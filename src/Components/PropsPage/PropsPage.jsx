import InfoBar from '../Infobar/Inforbar'
import Navbar from '../Navbar/Navbar'
import Panel from '../Panel/Panel'
import Cards from '../Cards/Cards'
import Data from '../Data'
import './PropsPage.css'
import { useState } from 'react'
import Footer from '../Footer/Footer'

const PropsPage = () => {

  const [type , setType] = useState(null)
  const filterData = type ? Data.filter((card)=> card.type === type) : Data

  return (
    <>
    <InfoBar />
    <Navbar />
    <Panel title="Home / Properties" hero="PROPERTIES" />
    <div className="btn__box__container">
      <button className="bar__btn" onClick={()=>setType(null)}>Show All</button>
      <button className="bar__btn" onClick={()=>setType('Apartment')}>Apartment</button>
      <button className="bar__btn" onClick={()=>setType('Luxury Villa')}>Villa House</button>
      <button className="bar__btn" onClick={()=>setType('Penthouse')}>Penthouse</button>
    </div>
    <div className="card__props__container"> 
            {filterData.map((card) => {            
                return (
                    <Cards
                        key={card.id}
                        img={card.img}
                        type={card.type}
                        prise={card.prise}
                        location={card.location}
                        bathrooms={card.bathrooms}
                        bedrooms={card.bedrooms}
                        area={card.area}
                        floor={card.floor}
                        parking={card.parking}  
                    />
                )
            })}
      </div>
      <div className="pagination">
        <div className="pagination__boxes">1</div>
        <div className="pagination__boxes">2</div>
        <div className="pagination__boxes">3</div>
        <div className="pagination__boxes"><i class='fas fa-angle-double-right'></i></div>
      </div>
      <Footer />
    </>
  )
}

export default PropsPage