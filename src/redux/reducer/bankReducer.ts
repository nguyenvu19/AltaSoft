import { Action } from "../action";

const initialState = 0;

const backReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "bankrupt":
      return 0;
    default:
      return state;
  }
};

export default backReducer;
