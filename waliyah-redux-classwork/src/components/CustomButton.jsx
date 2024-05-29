
import { useDispatch } from "react-redux";
import { toggleDisplayedPrice } from "../redux/slices/productSlice";

const ChangeTextButton = ({ buttonText, buttonStyle }) => {
  const dispatch = useDispatch();

  const handleTogglePrice = () => {
    dispatch(toggleDisplayedPrice());
  };

  return (
    <div>
      <button onClick={handleTogglePrice} style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

export default ChangeTextButton;
