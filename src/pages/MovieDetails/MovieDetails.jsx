import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';
import { MovieAlmostTitle, MovieContainer, MovieContent, MovieTitle } from 'components/Reviews/Reviews.styled';
import { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/get_movies';
import { ButtonBack, CurrentLink, MovieList, MovieDetailsImg, MovieDetailsList } from './MovieDetails.styled';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const linkRef = useRef(location.state?.from ?? "/movies");

    useEffect(() => {
        const fetchMovieDetails = async id => {
            try {
                setIsLoading(true);
                const data = await getMovieDetails(id);
                setMovieDetails(data);
            }
            catch(error) {
                setError(error);
                setHereError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchMovieDetails(movieId);
    }, [movieId]);

    const { poster_path, title, overview, vote_average, genres, production_countries } = movieDetails;

    return (
        <>
            <MovieBox>
                <ButtonBack to={linkRef.current}>Go back</ButtonBack>
            </MovieBox>
            {isLoading && <Loader/>}
            {hereError && <ErrorMessage message={error}/>}
            <MovieContainer>
                <MovieDetailsList>
                    <li>
                        <MovieDetailsImg src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                    </li>
                    <li>
                        <MovieTitle>{title}</MovieTitle>
                        <MovieContent>Score: {vote_average}%</MovieContent>
                        <MovieAlmostTitle>Overview</MovieAlmostTitle>
                        <MovieContent>{overview}</MovieContent>
                        <MovieAlmostTitle>Genres</MovieAlmostTitle>
                        <MovieContent>{genres && genres.length ? genres.map(genre => genre.name).join(', ')
                        : 'No genres'}</MovieContent>
                        <MovieAlmostTitle>Production Countries</MovieAlmostTitle>
                        <MovieContent>{production_countries}</MovieContent>
                        <MovieList>
                            <li>
                                <CurrentLink to={"cast"} state={{ from: location.state?.from ?? '/' }}>
                                Cast
                                </CurrentLink>
                            </li>
                            <li>
                                <CurrentLink to={"reviews"} state={{ from: location.state?.from ?? '/' }}>
                                Reviews
                                </CurrentLink>
                            </li>
                        </MovieList>
                    </li>
                </MovieDetailsList>
            </MovieContainer>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default MovieDetails;