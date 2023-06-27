import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
  const CAT_PREFIX_URL = `https://cataas.com`
  const [fact, setFact] = useState()
  const [imageUrl, setImage] = useState()

  useEffect( () => {
    fetch(CAT_ENDPOINT_FACT)
      .then( response => response.json())
      .then( data => {
        const { fact } = data;
        setFact(fact)}) 
  },[])

  useEffect( () => {
    if (!fact) return
    const threeWord = fact.split(' ',3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeWord}?json=true`)
      .then( response => response.json())
      .then( data => {
        setImage(data.url)
      })
  },[fact])

  return (
    <main>
      <h1>Cats App</h1>
      { fact && <p>{fact}</p>}
      { imageUrl && <img src={`${CAT_PREFIX_URL}${imageUrl}`} alt="Image extracted using three firsts words in the fact" />}
    </main>
  )
}

export default App
