import React from 'react'
import Loading from '../common/loading'
import Themes from '../custom/themes'

const SkeletonLayout = () => {
  return (
    <div className='layout-dasboard skeleton-layout'>
      <nav className='sidebar'>
        <h1>Dashboard </h1>

        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <span>Home</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Profile</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Weather</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Covid</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Notes</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Contacs</span>
          </li>
          {/* <li className='sidebar__list-item'>
            <span>Map</span>
          </li> */}
          <li className='sidebar__list-item'>
            <span>Post</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Cryptos</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Pomodoro</span>
          </li>
          {/* <li className='sidebar__list-item'>
            <span>Sleep Daily</span>
          </li> */}
          <li className='sidebar__list-item'>
            <span>Time zone</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Wizard</span>
          </li>
          <li className='sidebar__list-item'>
            <span>News</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Rgb Game</span>
          </li>
          <li className='sidebar__list-item'>
            <span>Observer api</span>
          </li>
        </ul>
        <Themes />
      </nav>
      <div className='layout-dasboard__skeleton'>
        <Loading />
      </div>

    </div>
  )
}

export default SkeletonLayout
