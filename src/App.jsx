import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import car from './assets/car-2901.svg'
import './App.css'

function ProgressBar({ title, currentBar, fullBar }) {

  return (

    <div className='progress-bar'>
      <label>{title} </label>
      <progress value={currentBar} max={fullBar}></progress>
      <span> {currentBar} out of {fullBar}</span>
    </div >
  )
}

function App() {
  const [drives, setDrives] = useState(
    [
      { id: 1, date: new Date(), hours: 5, isNight: false },
      { id: 2, date: new Date(), hours: 5, isNight: true },
      { id: 3, date: new Date(), hours: 5, isNight: false }
    ])

  const totalHours = drives.reduce((acc, drive) => acc + drive.hours, 0);

  const nightHours = drives
    .filter((drive) => drive.isNight)
    .reduce((acc, drive) => acc + drive.hours, 0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={car} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>🎉You Did It 🎉</h1>
          <h2>You are ready for your drive test!</h2>
          <ProgressBar title={'Total Driving Hours:'} currentBar={totalHours} fullBar={50}></ProgressBar>
          <ProgressBar title={'Nighttime Driving Hours:'} currentBar={nightHours} fullBar={10}></ProgressBar>
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section >

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Log Your Hours</h2>
          {/* <p>Your questions, answered</p> */}
          <ul>
            <li>
              {/* <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a> */}
            </li>
            <li>
              {/* <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a> */}
            </li>
          </ul>
        </div>
        <div id="social">
          <h2>View Your Logs</h2>
          {/* <p>Join the Vite community</p> */}
          <ul>
            <li>
              {/* <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a> */}
            </li>
            <li>
              {/* <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a> */}
            </li>
            <li>
              {/* <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a> */}
            </li>
            <li>
              {/* <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a> */}
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
