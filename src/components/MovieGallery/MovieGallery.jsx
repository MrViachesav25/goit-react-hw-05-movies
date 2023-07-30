import PropTypes from 'prop-types';
import { List } from './MovieGallery.styled';
import { MovieBox } from './MovieGallery.styled';
import MovieGalleryItem from 'components/MovieGalleryItem';


const MovieGallery = ({ movies}) => {
    return (
      <>
        <MovieBox>
          <List>
            {movies.map(movie => (
              <MovieGalleryItem 
              key={movie.id} 
              movie={movie}
              />
            ))}
          </List>
        </MovieBox>
      </>
  );
};

MovieGallery.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })).isRequired,
  };
  
export default MovieGallery;