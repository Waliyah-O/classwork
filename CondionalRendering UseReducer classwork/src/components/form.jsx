import { useReducer, useState } from "react";
import formReducer from "../reducers/formReducer";
import { ACTIONS } from "../reducers/formReducer";

//styles
import styles from "./styles.module.css";

const initialState = {
  count: 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  showNextParts: false,
  showAll: false,
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  //   const [index, setIndex] = useState(0);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (state.firstName !== "" && state.lastName !== "") {
  //       dispatch({ type: ACTIONS.SHOW_NEXT_PARTS });
  //     } else {
  //       alert("fields are empty!");
  //     }
  //   };

  //   const showAll = (e) => {
  //     e.preventDefault();
  //     if (state.showNextParts === true) {
  //       dispatch({ type: ACTIONS.SHOW_ALL });
  //     } else {
  //       alert("hmmmmmmmm!!!");
  //     }
  //   };

  //   console.log(state);

  function changeFIrstName(e) {
    dispatch({ type: ACTIONS.ADD_FIRSTNAME, payload: e.target.value });
  }
  function changeLastName(e) {
    dispatch({ type: ACTIONS.ADD_LASTNAME, payload: e.target.value });
  }
  function changeEmail(e) {
    dispatch({ type: ACTIONS.ADD_EMAIL, payload: e.target.value });
  }
  function changePassword(e) {
    dispatch({ type: ACTIONS.ADD_PASSWORD, payload: e.target.value });
  }

  function changePage() {
    dispatch({ type: ACTIONS.COUNT });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {state.count === 0 && (
          <div>
            <div>
              <label htmlFor="firstName">first name</label>
              <input
                onInput={changeFIrstName}
                type="text"
                value={state.firstName}
              />{" "}
              <br />
              <label htmlFor="lastName">last name</label>
              <input
                onInput={changeLastName}
                type="text"
                value={state.lastName}
              />
            </div>
            <button onClick={changePage}>next</button>
          </div>
        )}
        {state.count === 1 && (
          <div>
            <label htmlFor="email">email</label>
            <input onInput={changeEmail} type="text" value={state.email} />{" "}
            <br />
            <label htmlFor="password">password</label>
            <input
              onInput={changePassword}
              type="text"
              value={state.password}
            />{" "}
            <button onClick={changePage}>submit</button>
          </div>
        )}
        {state.count === 2 && (
          <div>
            <p>{state.firstName}</p>
            <p>{state.lastName}</p>
            <p>{state.email}</p>
            <p>{state.password}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
