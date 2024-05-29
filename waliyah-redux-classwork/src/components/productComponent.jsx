
import { useSelector, useDispatch } from 'react-redux';
import { selectObjectIndex, toggleDisplayedProperty } from '../redux/slices/priceSlice';
import { dummyData } from '../assets/dummyData';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { selectedObjectIndex, displayedProperty } = useSelector(
    (state) => state.product
  );

  const selectedProduct = dummyData[selectedObjectIndex];

  const handleToggleDisplay = () => {
    dispatch(toggleDisplayedProperty());
  };

  return (
    <div>
      <button onClick={handleToggleDisplay}>Toggle Display</button>
      <h3>{selectedProduct[displayedProperty]}</h3>
    </div>
  );
};

export default ProductComponent;
