import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';
import { MovieTitle } from 'components/Reviews/Reviews.styled';
import PropTypes from 'prop-types';

const Message = ({ value, totalHits }) => {
  return (
    <MovieBox>
      <MovieTitle> {value}
        <sup style={{ fontSize: "initial" }}> {totalHits} movies</sup>
      </MovieTitle>
    </MovieBox>
  )
}

Message.propTypes = {
  value: PropTypes.string.isRequired,
  totalHits: PropTypes.number.isRequired,
}

export default Message;