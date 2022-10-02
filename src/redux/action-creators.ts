import { Dispatch } from "redux";
import { Action } from "./action";
import { ActionTypes } from "./action-types";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const withDrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankRuptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    });
  };
};
