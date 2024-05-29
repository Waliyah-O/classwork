import { dummyData } from "./assets/dummyData";
import { useSelector } from "react-redux";
import ChangeTextButton from "./components/CustomButton";
import CardComponent from "./components/CardComponent";

import {
  getCartItemCount,
  getCartTotalPrice,
} from "./redux/slices/addToCartSlice";

const App = () => {
  const displayedPrice = useSelector((state) => state.product.displayedPrice);
  const cartItemCount = useSelector(getCartItemCount);

  const cartTotalPrice = useSelector(getCartTotalPrice);

  const dollarButtonStyle = {
    backgroundColor: "red",
    color: "white",
    width: "200px",
  };
  const nairaButtonStyle = {
    backgroundColor: "green",
    color: "white",
    width: "200px",
  };
  const containerStyle = {
    display: "flex",
    width: "100vw",
    height: "80vh",
    gap: "2em",
  };

  const flexedStyle = { display: "flex", flexDirection: "column", gap: "2em" };

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "2em" }}>
        {dummyData.map((product, index) => (
          <CardComponent
            key={index}
            product={product}
            displayedPrice={displayedPrice}
          />
        ))}
      </div>
      <div style={flexedStyle}>
        <div style={flexedStyle}>
          <ChangeTextButton buttonText="NGN" buttonStyle={nairaButtonStyle} />
          <ChangeTextButton buttonText="USD" buttonStyle={dollarButtonStyle} />
        </div>
        <p>Total items in cart: {cartItemCount}</p>
        <p>Total price of items in cart: {cartTotalPrice}</p>
      </div>
    </div>
  );
};

export default App;
