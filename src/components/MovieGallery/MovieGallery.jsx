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
              id={movie.id}
              title={movie.title} 
              name={movie.name}
              />
            ) )}
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