
import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <MovieBox>
      <div>
        <RotatingLines
          strokeColor={'#2f555'}
          strokeWidth="5"
          animationDuration="0.75"
          width="196"
          visible={true}
        />
      </div >
    </MovieBox>
  )
};
export default Loader;
