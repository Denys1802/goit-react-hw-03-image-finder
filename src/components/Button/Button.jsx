import PropTypes from 'prop-types';

import { Loader } from 'components/Loader/Loader';
import { LoadBtn } from './Button.styled';
export const Button = ({ clickLoadMore, toggleLoader }) => {
  return (
    <LoadBtn type="button" disabled={toggleLoader} onClick={clickLoadMore}>
      Load more
      {toggleLoader && (
        <Loader widthLoader={'25'} heightLoader={'25'} colorLoader={'#fff'} />
      )}
    </LoadBtn>
  );
};

Button.propTypes = {
  clickLoadMore: PropTypes.func.isRequired,
  toggleLoader: PropTypes.bool.isRequired,
};
