import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/get_movies';
import { MovieContainer, MovieTitle, MovieAlmostTitle, MovieReviewsList, MovieContent  } from './Reviews.styled';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [hereError, setHereError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {movieId} = useParams();

    useEffect(() => {
        const getReviews = async id => {
            try {
                setIsLoading(true);
                const reviews = await getMovieReviews(id);
                setReviews([...reviews]);
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
                {!reviews?.length > 0 && <MovieAlmostTitle>Sorry, no reviews!</MovieAlmostTitle>}
                {reviews && 
                <MovieReviewsList>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <MovieAlmostTitle>Author: {review.author}</MovieAlmostTitle>
                            <MovieContent>{review.content}</MovieContent>
                        </li>
                    ))}
                </MovieReviewsList>}
           </MovieContainer>
        </>
    )
};
export default Reviews;