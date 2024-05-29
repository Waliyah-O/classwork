import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const CardComponent = ({ product }) => {
  const dispatch = useDispatch();

  const displayedPrice = useSelector((state) => state.product.displayedPrice);

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  // const handleTogglePrice = () => {
  //   dispatch(toggleDisplayedPrice());
  // };
  const divStyles = {
    height: "400px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={divStyles}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product[displayedPrice]}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* <button onClick={handleTogglePrice}>Toggle Price</button> */}
    </div>
  );
};

export default CardComponent;
