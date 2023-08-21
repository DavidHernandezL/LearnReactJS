
import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies';
import { useEffect, useState, useRef } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError("Can't be empty");
      return;
    }

    if (search.match(/^[0-9]+$/)) {
      setError("Can't be a number");
      return;
    }

    if (search.length < 3) {
      setError("Must be at least 3 characters long");
      return;
    }

    setError(null);
  }, [search])

  return { search, setSearch, error }
}

function App() {

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className='page'>
      <header>
        <h1>Search Movie</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, Star Wars...' />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

//API KEY: b4918a02

export default App
