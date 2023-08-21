import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App() {


  const {fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={handleClick}>Get new fact</button>
      { fact && <p>{fact}</p>}
      { imageUrl && <img src={imageUrl} alt="Image extracted using three firsts words in the fact" />}
    </main>
  )
}

export default App
