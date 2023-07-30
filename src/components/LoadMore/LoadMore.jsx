import PropTypes from 'prop-types';

import { Button } from './LoadMore.styled';
import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';

const LoadMore = ({ onClick, title }) => {
  return (
    <MovieBox>
      <Button type="button" onClick={() => onClick()}>{title}</Button>
    </MovieBox>
  )
}

LoadMore.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default LoadMore;