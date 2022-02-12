import { Suspense, lazy } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Themes from "../components/custom/themes";
import SkeletonLayout from "../components/skeleton/skeletonLayout";

const Home = lazy( () => import('../views/home'))
const Bitcoin = lazy( () => import('../views/bitcoin'))
const Profile = lazy( () => import('../views/profile'))
const Weather = lazy( () => import('../views/weather'))
const Notes = lazy( () => import('../views/notes'))
const Map = lazy( () => import('../views/map'))
const Covid = lazy( () => import('../views/covid'))
const Contacts = lazy( () => import('../views/contacts'))
const Post = lazy( () => import('../views/post'))
const Pomodoro = lazy( () => import('../views/pomodoro'))
const SleepTracker = lazy( () => import('../views/sleepTracker'))
const TimeZone = lazy( () => import('../views/timeZone'))
const Wizard = lazy( () => import('../views/wizard'))
const News = lazy( () => import('../views/news'))

const Routes = () => {

  return (
    <Suspense fallback={<SkeletonLayout />}>
      <Router>
        <nav className="sidebar">
          <h1>Dashboard {/* <span>Demo</span> */}</h1>
          
          <ul className="sidebar__list">
              <li className="sidebar__list-item">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/weather">Weather</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/covid">Covid</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/notes">Notes</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/contacts">Contacs</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/map">Map</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/post">Post</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/cryptos">Cryptos</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/pomodoro">Pomodoro</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/sleep-tracker">Sleep Daily</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/timezone">Time zone</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/wizard">Wizard</NavLink>
              </li>
              <li className="sidebar__list-item">
                <NavLink to="/news">News</NavLink>
              </li>
          </ul>
          <Themes />
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/wizard">
            <Wizard />
          </Route>
          <Route path="/timezone">
            <TimeZone />
          </Route>
          <Route path="/sleep-tracker">
            <SleepTracker />
          </Route>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/cryptos">
            <Bitcoin />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/notes">
            <Notes /> 
          </Route>
          <Route path="/covid">
            <Covid/> 
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;