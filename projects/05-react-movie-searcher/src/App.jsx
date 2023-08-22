
import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies';
import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it'

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

  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(debounce(search => {
    getMovies({ search });
  }, 300), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className='page'>
      <header>
        <h1>Search Movie</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, Star Wars...' />
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div >
  )
}
export default App
