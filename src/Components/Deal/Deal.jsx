import { useState } from 'react'
import './Deal.css'
const Deal = () => {
    const [i , setI ] = useState(1)
    const info = [
        {   
            //appatment
            title: 'Extra Info About Property',
            img : '/images/deal-01.jpg',
            space : '185 m2',
            floor : '26th',
            rooms : '4',
            parking : 'Yes',
            payment : 'Bank',
            extra : 'When you need free CSS templates, youcan simply type TeamplateMo in any search engine webiste. In additon, you can type TeplateMo Portfolio, TemplateMo One Page Layouts, etc.'
        },
        {
            //Penthouse
            title: 'Extra Info About Penthouse',
            img : '/images/deal-02.jpg',
            space : '320 m2',
            floor : '34th',
            rooms : '6',
            parking : 'Yes',
            payment : 'Bank' ,
            extra : 'Swag funny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shamad DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'    
        },
        {
            //Villa
            title: 'Details Info About Villa',
            img : '/images/deal-03.jpg',
            space : '250 m2',
            floor : '26th',
            rooms : '5',
            parking : 'Yes',
            payment : 'Bank',
            extra : 'Swag funny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shamad DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'    
        }

    ]


  return (
    <div className="deal__container" >
        <div className="deal__bar">

            <div className="bar__text">
                <span>| BEST DEAL</span>
                <h1>Find Your Best Deal Right Now!</h1>
            </div>    

            <div className="bar__menu">
                <button className="bar__btn" onClick={()=>setI(0)}>Appartment</button>
                <button className="bar__btn" onClick={()=>setI(1)}>Villa House</button>
                <button className="bar__btn" onClick={()=>setI(2)}>Penthouse</button>
            </div>

        </div>

        <div className="deal__content">
            <div className="deal__info__container">
                <div className="deal__info">
                    <div className="deal__info__item">
                        <p>Total Flat Space</p>
                        <h5>{info[i].space}</h5>
                    </div>

                    <div className="deal__info__item">
                        <p>Floor Number</p>
                        <h5>{info[i].floor}</h5>
                    </div>
                    <div className="deal__info__item">
                        <p>Number of Rooms</p>
                        <h5>{info[i].rooms}</h5>
                    </div>
                    <div className="deal__info__item">
                        <p>Parking Available</p>
                        <h5>{info[i].parking}</h5>
                    </div>
                    <div className="deal__info__item">
                        <p>Payment Process</p>
                        <h5>{info[i].payment}</h5>
                    </div>
                </div>
            </div>

            <div className="deal__img">
                    <img src={info[i].img} alt="" />
            </div>

            <div className="deal__info__extra">
                    <div className="extra__text">
                        <h4>{info[i].title}</h4>
                        <div>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p> </div> 
                        <div>   <p>{info[i].extra}</p> </div> 
                        <div className="navbar__items__btn"><i class='fas fa-calendar'></i><a href="">Schedule a visit</a></div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Deal