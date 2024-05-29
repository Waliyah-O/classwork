import { useState } from 'react';

const ConditionalForm = () => {
  const [productType, setProductType] = useState('');
  const [additionalField, setAdditionalField] = useState('');

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
    // Reset the additional field when the product type is changed
    setAdditionalField('');
  };

  const handleAdditionalFieldChange = (event) => {
    setAdditionalField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Product Type:', productType);
    console.log('Additional Field:', additionalField);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Type:</label>
        <select value={productType} onChange={handleProductTypeChange}>
          <option value="">Select a product type</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>

      {productType === 'electronics' && (
        <div>
          <label>Electronics Additional Field:</label>
          <input
            type="text"
            value={additionalField}
            onChange={handleAdditionalFieldChange}
            placeholder="Enter additional field for electronics"
          />
        </div>
      )}

      {productType === 'clothing' && (
        <div>
          <label>Clothing Additional Field:</label>
          <input
            type="text"
            value={additionalField}
            onChange={handleAdditionalFieldChange}
            placeholder="Enter additional field for clothing"
          />
        </div>
      )}

      {productType === 'books' && (
        <div>
          <label>Books Additional Field:</label>
          <input
            type="text"
            value={additionalField}
            onChange={handleAdditionalFieldChange}
            placeholder="Enter additional field for books"
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ConditionalForm;

// import { useReducer, useState } from "react";
// import formReducer from "../reducers/formReducer";
// import { ACTIONS } from "../reducers/formReducer";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   showNextParts: false,
//   showAll: false,
// };

// const Form = () => {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (state.firstName !== "" && state.lastName !== "") {
//       dispatch({ type: ACTIONS.SHOW_NEXT_PARTS });
//     } else {
//       alert("Please provide both first name and last name.");
//     }
//   };

//   const showAll = (e) => {
//     e.preventDefault();
//     if (state.email !== "" && state.password !== "") {
//       dispatch({ type: ACTIONS.SHOW_ALL });
//     } else {
//       alert("Please provide both email and password.");
//     }
//   };

//   function changeFIrstName(e) {
//     dispatch({ type: ACTIONS.ADD_FIRSTNAME, payload: e.target.value });
//   }
//   function changeLastName(e) {
//     dispatch({ type: ACTIONS.ADD_LASTNAME, payload: e.target.value });
//   }
//   function changeEmail(e) {
//     dispatch({ type: ACTIONS.ADD_EMAIL, payload: e.target.value });
//   }
//   function changePassword(e) {
//     dispatch({ type: ACTIONS.ADD_PASSWORD, payload: e.target.value });
//   }

//   return (
//     <>
//       <form>
//         <div style={{ marginBottom: "2em" }}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             onInput={changeFIrstName}
//             type="text"
//             value={state.firstName}
//           />
//           <br />
//           <label htmlFor="lastName">Last Name</label>
//           <input onInput={changeLastName} type="text" value={state.lastName} />
//         </div>
//         {state.showNextParts ? (
//           <div style={{ marginBottom: "2em" }}>
//             <label htmlFor="email">Email</label>
//             <input onInput={changeEmail} type="text" value={state.email} />
//             <br />
//             <label htmlFor="password">Password</label>
//             <input
//               onInput={changePassword}
//               type="password"
//               value={state.password}
//             />
//             <button onClick={showAll}>Submit</button>
//           </div>
//         ) : null}
//         {state.showAll ? (
//           <div>
//             <p>First Name: {state.firstName}</p>
//             <p>Last Name: {state.lastName}</p>
//             <p>Email: {state.email}</p>
//             <p>Password: {state.password}</p>
//           </div>
//         ) : null}
//       </form>
//     </>
//   );
// };

// export default Form;
