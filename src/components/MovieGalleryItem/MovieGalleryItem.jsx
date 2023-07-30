import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, MovieGalleryItemImage, MovieGalleryItemTitle, MovieLink} from './MovieGalleryItem.styled';
import { getInfo, getPoster } from 'service/func';

const MovieGalleryItem = (props) => {
    const { movie: { title, poster_path, name, id } } = props;
    const poster = getPoster(poster_path);
    const info = getInfo([title, name]);
    const location = useLocation();
    return (
        <Item>
            <MovieLink key={id} to={`movies/${id}`} state={{from: location}}>
                <MovieGalleryItemImage src={poster} alt={info} />
                <MovieGalleryItemTitle>{info}</MovieGalleryItemTitle>
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
