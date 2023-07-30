import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/Message';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import SearchBar from 'components/SearchBar/SearchBar';

import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovie } from 'service/get_movies';

const Movies = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [totalHits, setTotalHits] = useState(0);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [final, setFinal] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');

    const handleSubmit = query => {
        if(searchValue !== query) {
            setMovies([]);
            setPage(1);
            setTotalHits(0);
            setFinal(false);
            setSearchParams({query: query});
            setSearchValue('');
        }
    };

    useEffect(() => {
        if(!searchQuery || final) {
          setIsLoading(false);
          return;
        }
        const takeMovies = async () => {
          try {
            setIsLoading(true);
            const data = await getSearchMovie({query: searchQuery, page: page});
            if (data.results.length && page === 1 ) {
              toast.success(<span>Excellent! We found {data.total_results} movies</span>, {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
              });
            }
            if(!data.results.length) {
              return toast.error(<span>Oops! We didn't find any movies, my friend!</span>, {
                position: toast.POSITION.TOP_LEFT,
                theme: "colored",
              });
            }
            let theFinal = false;
            if(!data.results.length || data.results.length < 12) theFinal = true;
            setFinal(theFinal);
            setMovies(prevMovies => [...prevMovies, ...data.results]);
            setTotalHits(data.total_results);
            setIsLoading(false);
            setError(null);
          } catch (error) {
            setError(error);
            setHereError(true);
          } finally {
            setIsLoading(false);
          }
        };
    
        takeMovies();
      }, [searchQuery, page, final]);

      const infiniteScroll = useRef(null);
      useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              setPage(prevPage => prevPage + 1);
            }
          },
          { threshold: 1 }
        );
    
        if (infiniteScroll.current) {
          observer.observe(infiniteScroll.current);
        }
      }, [infiniteScroll]);
    
      return (
        <>
          <SearchBar onSubmit={handleSubmit}/>
          {movies.length > 0 && <MovieGallery
            movies={movies}
            searchValue={searchValue}
            totalHits={totalHits} />}
          {isLoading && <Loader/>}
          {final && movies.length > 0 && <Message searchValue="Final" totalHits={totalHits} />}
          <div className='bottom' ref={infiniteScroll} />
          {hereError && <ErrorMessage message={error} />}
          <ToastContainer hideProgressBar />
        </>
      )
}

export default Movies;