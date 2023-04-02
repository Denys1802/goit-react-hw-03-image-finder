import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

import { WrapLoader } from './Loader.styled';

export const Loader = ({
  heightLoader,
  widthLoader,
  colorLoader = '#2054c5',
}) => {
  return (
    <WrapLoader>
      <Circles
        height={widthLoader}
        width={heightLoader}
        color={colorLoader}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapLoader>
  );
};

Loader.propTypes = {
  heightLoader: PropTypes.string.isRequired,
  widthLoader: PropTypes.string.isRequired,
  colorLoader: PropTypes.string,
};
