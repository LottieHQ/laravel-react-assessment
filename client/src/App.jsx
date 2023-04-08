import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://127.0.0.1:8000/api/locations");
      let result = await response.json()
      setCount(result)
    }

    fetchMyAPI()
  }, [])

  return (
    <div className="App">
      Lottie assessment
    </div>
  )
}

export default App
