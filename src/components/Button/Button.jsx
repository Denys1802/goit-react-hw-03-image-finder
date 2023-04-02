import { Btn, WrapBtn } from "./Button.styled";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <WrapBtn>
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    </WrapBtn>
  );
};

export default LoadMoreBtn;
