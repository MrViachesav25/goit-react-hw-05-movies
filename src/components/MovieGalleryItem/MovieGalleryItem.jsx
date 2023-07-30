import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, MovieLink} from './MovieGalleryItem.styled';

const MovieGalleryItem = ({id, title, name}) => {
    const location = useLocation();
    return (
        <Item>
            <MovieLink to={`movies/${id}`} state={{from: location}}>
                {title || name}
            </MovieLink>
        </Item>
    )
};

MovieGalleryItem.propTypes = {
   id: PropTypes.number,
   title: PropTypes.string,
   name: PropTypes.string,
};

export default MovieGalleryItem;
