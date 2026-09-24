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

function DriveForm({ onAddDrive }) {

  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [isNight, setIsNight] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    onAddDrive({ id: Date.now(), date: date, hours: Number(hours), isNight: isNight });
    setDate("");
    setHours("");
    setIsNight(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Hours
        <input type="number" min="0.5" step="0.5" value={hours} onChange={(event) => setHours(event.target.value)} />
      </label>
      <label>
        Night Drive?
        <input type="checkbox" checked={isNight} onChange={(event) => setIsNight(event.target.checked)} />
      </label>
      <button type="submit">Add drive</button>
    </form>
  );
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

  const isComplete = (totalHours >= 50) && (nightHours >= 10)

  function addDrive(drive) {
    setDrives([...drives, drive]);
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={car} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          {isComplete ? <h1>🎉You Did It 🎉</h1> : <h1>You Can Do It</h1>}
          {isComplete ? <h2>You are ready for your drive test!</h2> : <h2></h2>}
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
          <DriveForm onAddDrive={addDrive}></DriveForm>
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
