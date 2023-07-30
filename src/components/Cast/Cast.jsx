import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/get_movies';
import { MovieContainer, MovieTitle, MovieAlmostTitle, MovieContent  } from 'components/Reviews/Reviews.styled';
import { MovieCastList, MovieCastImage } from './Cast.styled';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {movieId} = useParams();

    useEffect(() => {
        const getCast = async id => {
            try {
                setIsLoading(true);
                const cast = await getMovieCredits(id);
                setCast([...cast]);
            }
            catch (error) {
                setError(error);
                setHereError(true);
            }
            finally {
                setIsLoading(false);
            }
        };
        getCast(movieId);
    }, [movieId]);
    return (
        <>
           {isLoading && <Loader/>}
           {hereError && <ErrorMessage massage={error}/>}
           <MovieContainer>
                <MovieTitle>Cast</MovieTitle>
                {!cast?.length > 0 && <MovieAlmostTitle>Sorry, no actors!</MovieAlmostTitle>}
                {cast && 
                <MovieCastList>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <MovieCastImage src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name}/>
                            <MovieAlmostTitle>{actor.name}</MovieAlmostTitle>
                            <MovieContent>{actor.character}</MovieContent>
                        </li>
                    ))}
                </MovieCastList>}
           </MovieContainer>
        </>
    )
};
export default Cast;