import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

export const Loader = ({
  heightLoader,
  widthLoader,
  colorLoader = '#2054c5',
}) => {
  return (
    <Circles
      height={widthLoader}
      width={heightLoader}
      color={colorLoader}
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  heightLoader: PropTypes.string.isRequired,
  widthLoader: PropTypes.string.isRequired,
  colorLoader: PropTypes.string,
};
