import { Loader } from 'components/Loader/Loader';
import { Btn } from './Button.styled';
const LoadMoreBtn = ({ onClick, isLoading }) => {
  return (
    <Btn type="button" disabled={isLoading} onClick={onClick}>
      Load more
      {isLoading && (
        <Loader widthLoader={'25'} heightLoader={'25'} colorLoader={'#fff'} />
      )}
    </Btn>
  );
};

export default LoadMoreBtn;
