import { useEffect, useState } from 'react';
import { getTrend } from 'service/get_movies';
import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';
import { MovieTitle } from 'components/Reviews/Reviews.styled';

import LoadMore from 'components/LoadMore/LoadMore';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import Loader from 'components/Loader/Loader';

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const addPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        const fetchTrend = async () => {
            try {
                setIsLoading(true);
                const data = await getTrend(page);
                setTrendMovies(prevData => [...prevData, ...data.results]);
                setError(null);
            }
            catch (error) {
                setError(error);
                setHereError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchTrend();
    }, [page]);

    return (
        <>
           {isLoading && <Loader/>}
           <MovieBox>
                <MovieTitle>Trends</MovieTitle>
           </MovieBox>
           {trendMovies?.length > 0 && <MovieGallery movies={trendMovies}></MovieGallery>}
           <LoadMore onClick={addPage} title={'Load more'} />
           {hereError && <ErrorMessage message={error}/>}
        </>
    )
}

export default Home;
