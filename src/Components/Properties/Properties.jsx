import './Properties.css'
import Cards from '../Cards/Cards'
import Data from '../Data'

const Properties = () => {



  return (
    <>
    <div className="properties__container">
        <div className="properties__text">
                <span>| Properties</span>
                <h3>We Provide The Best Property You Like</h3>
        </div>

        <div className="card__container">
            {Data.map((card) => {              
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

    </div>

    </>
  )
}

export default Properties