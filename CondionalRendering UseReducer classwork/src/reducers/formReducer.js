export const ACTIONS = {
  ADD_FIRSTNAME: "add-firstName",
  ADD_LASTNAME: "add-lastName",
  ADD_EMAIL: "add-email",
  ADD_PASSWORD: "add-password",
  SHOW_NEXT_PARTS: "show-next",
  SHOW_ALL: "show-all",
  COUNT: "count",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case ACTIONS.ADD_LASTNAME:
      return { ...state, lastName: action.payload };
    case ACTIONS.ADD_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.ADD_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.SHOW_NEXT_PARTS:
      return { ...state, showNextParts: true };
    case ACTIONS.SHOW_ALL:
      return { ...state, showAll: true };
    case ACTIONS.COUNT:
      return { ...state, count: state.count + 1 };
  }
  return state;
};

export default formReducer;
