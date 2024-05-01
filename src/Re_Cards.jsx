/* eslint-disable react/prop-types */

const Re_Cards = ({menuData}) => {
  return (
    <>
      <div key={menuData} className="main-container">
        {menuData.map((currElem)=>{
          return (
            <>
              <div key={currElem.id} className="container">
                <div>
                  <h2 key={currElem.id} className="title-name">{currElem.cardName}</h2>
                  <img className="card-img" src={currElem.cardImg} alt="show real" />
                  <h3 className="title-name">{currElem.category}</h3>
                  <p className="title-desc">{currElem.benifits}</p>
                  <button className="btn">Order Now</button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default Re_Cards
