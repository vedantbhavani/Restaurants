import cardsapi from './CardApi'
import Re_Cards from './Re_Cards'
import './App.css'
import { useState } from 'react'
import cardsApi from './CardApi'

function App() {
  const [menuData, setmenuData] = useState(cardsApi)

  const changemode = (category) => {
    const updatedlist = cardsApi.filter((currElem) => {
      return currElem.category === category
    })
    setmenuData(updatedlist)
  }

  return (
    <div className='main-part'>
      <div className="nav">
        <div className="inner-nav" onClick={()=> setmenuData(cardsApi)}>All</div>
        <div className="inner-nav" onClick={() => changemode("breakfast")}>BreakFast</div>
        <div className="inner-nav" onClick={() => changemode("lunch")}>Lunch</div>
        <div className="inner-nav" onClick={() => changemode("dinner")}>Dinner</div>
      </div>
      <Re_Cards key={cardsapi.id} menuData={menuData} />
    </div>
  )
}
export default App