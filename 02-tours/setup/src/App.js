import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const getTours = async () => {
    try {
      const res = await fetch(url)
      const json = await res.json()
      setTours(json)
      setIsLoading(false)
    } catch(e) {
      console.log(e)
    }
  }
  
  useEffect(()=>{
    
    getTours()  
  },[])

  const removeTour = (id) => {
    setTours(prevTours => {
      return prevTours.filter(tour => tour.id !== id)
    })
  }

  if(isLoading) {
    return (
      <Loading />
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => getTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  
  

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours}/>       
    </main>
  )
}

export default App
