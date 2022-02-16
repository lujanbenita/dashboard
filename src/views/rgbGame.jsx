import { useEffect, useState, useRef } from 'react'
import LayoutDashboard from '../layout/layoutDashboard'

function getRandomInt (int, max) {
  int = Math.floor(Math.random() * (max - 0 + 1) + 0)
  return int
}

function rgbTitle () {
  const r = getRandomInt(0, 255)
  const g = getRandomInt(0, 255)
  const b = getRandomInt(0, 255)
  return `${r},${g},${b}`
}

const createArrayElementsRGB = (numberElement, currentMainrgb) => {
  const arrayElements = []
  for (let index = 0; index < numberElement; index++) {
    const getNumberRGB = rgbTitle()
    arrayElements.push(getNumberRGB)
  }

  const int = Math.floor(Math.random() * numberElement)
  arrayElements[int] = currentMainrgb
  return arrayElements
}

const RgbGame = () => {
  const [rgbData, setRgbData] = useState()
  const [refresh, setRefresh] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(3)
  const [items, setItems] = useState([])

  const itemRef = useRef([])
  itemRef.current = []

  const addToRefs = (el) => {
    if (el && !itemRef.current.includes(el)) {
      itemRef.current.push(el)
    }
  }

  useEffect(() => {
    const rgbMain = rgbTitle()
    setRgbData(rgbMain)
    setItems(createArrayElementsRGB(currentLevel, rgbMain))
  }, [currentLevel, refresh])

  const getRefItem = (dataElement, index) => {
    if (rgbData === dataElement) {
      itemRef.current.map(el => (el.childNodes[2].className = 'opacity-off'))
      itemRef.current[index].childNodes[0].className = 'correct'
      return
    }
    itemRef.current[index].childNodes[1].className = 'incorrect'
  }

  return (
    <LayoutDashboard title='RGB Game'>
      <div className='rgb'>

        <section className='rgb__header'>
          <div className='rgb__container'>
            <h1>
              <span className='red'>R</span>
              <span className='green'>G</span>
              <span className='blue'>B </span>
              GAME
            </h1>

            <div id='rgb'>
              RGB({rgbData})
            </div>
          </div>
        </section>
        <section className='rgb__options'>
          <div className='rgb__container'>
            <div id='reset' onClick={() => setRefresh(!refresh)}>NEW COLORS</div>

            <div id='message' />

            <div className='dificult'>
              <button onClick={() => setCurrentLevel(3)}> EASY </button>
              <button onClick={() => setCurrentLevel(6)}> MEDIUM </button>
              <button onClick={() => setCurrentLevel(9)}> HARD </button>
            </div>
          </div>
        </section>

        <section className='rgb__items'>
          <div className='rgb__container'>
            {items.map((el, i) => (
              <div
                className='item'
                style={{ backgroundColor: `rgb(${el})` }}
                key={el}
                ref={addToRefs}
                onClick={() => getRefItem(el, i)}
              >
                <img className='' src='https://img.icons8.com/nolan/96/checkmark.png' />
                <img className='' src='https://img.icons8.com/nolan/96/multiply.png' />
                <span className='results'> rgb({el})</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </LayoutDashboard>
  )
}

export default RgbGame
