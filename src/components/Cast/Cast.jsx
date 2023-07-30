import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/get_movies';
import { MovieContainer, MovieTitle, MovieAlmostTitle } from 'components/Reviews/Reviews.styled';
import { MovieCastList, MovieCastImage, MovieCastTitle, MovieCastItem } from './Cast.styled';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { getPoster } from 'service/func';

const Cast = () => {
    const {movieId} = useParams();
    const [movieCast, setMovieCast] = useState({});
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCast = async id => {
            try {
                setIsLoading(true);
                const data = await getMovieCredits(id);
                setMovieCast(data);
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
                {!movieCast.cast?.length > 0 && <MovieAlmostTitle>Sorry, no actors!</MovieAlmostTitle>}
                {movieCast?.cast && 
                <MovieCastList>
                    {movieCast.cast.map(actor => (
                        <MovieCastItem key={actor.id}>
                            <MovieCastImage src={getPoster(actor.profile_path)} alt={actor.name}/>
                            <MovieCastTitle>Actor name: {actor.name}</MovieCastTitle>
                            <MovieCastTitle>Popularity: {actor.popularity}</MovieCastTitle>
                            <MovieCastTitle>{actor.character}</MovieCastTitle>
                        </MovieCastItem>
                    ))}
                </MovieCastList>}
           </MovieContainer>
        </>
    )
};
export default Cast;