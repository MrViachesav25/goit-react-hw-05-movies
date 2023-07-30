import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/get_movies';
import { MovieContainer, MovieTitle, MovieAlmostTitle, MovieReviewsList, MovieContent, MovieReviewsItem  } from './Reviews.styled';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

const Reviews = () => {
    const {movieId} = useParams();
    const [movieReviews, setMovieReviews] = useState({});
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getReviews = async id => {
            try {
                setIsLoading(true);
                const data = await getMovieReviews(id);
                setMovieReviews(data);
            }
            catch (error) {
                setError(error);
                setHereError(true);
            }
            finally {
                setIsLoading(false);
            }
        };
        getReviews(movieId);
    }, [movieId]);
    return (
        <>
           {isLoading && <Loader/>}
           {hereError && <ErrorMessage message={error}/>}
           <MovieContainer>
                <MovieTitle>Reviews</MovieTitle>
                {!movieReviews.results?.length > 0 && <MovieAlmostTitle>Sorry, no reviews!</MovieAlmostTitle>}
                {movieReviews?.results && 
                <MovieReviewsList>
                    {movieReviews.results.map(review => (
                        <MovieReviewsItem key={review.id}>
                            <MovieAlmostTitle>Author: {review.author}</MovieAlmostTitle>
                            <MovieContent>{review.content}</MovieContent>
                        </MovieReviewsItem>
                    ))}
                </MovieReviewsList>}
           </MovieContainer>
        </>
    )
};
export default Reviews;