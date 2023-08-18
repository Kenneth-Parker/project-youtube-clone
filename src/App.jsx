import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ut from "./assets/youtube-logo-png-transparent-image-5.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Hello Gang</h1>
      <div>
        <a href="https://youtu.be/ope1743gdAw" target="_blank">
          <img src={ut} className="logo" alt="YouTube logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1 className='ourNames'>Tyrell + Kenia + Ant + Natalie + Kenneth</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Helloooo</p>
    </>
  )
}

export default App
