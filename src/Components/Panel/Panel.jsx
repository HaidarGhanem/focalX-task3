import './Panel.css'

const Panel = ({title , hero}) => {
  return (
    <>
        <div className="panel__container anime">
            <img src="/images/page-heading-bg.jpg" alt="" />
            <div className="panel__text">
               <div className="text__box"><span>{title}</span></div>
               <h1>{hero}</h1> 
            </div>
        </div>
    </>
  )
}

export default Panel