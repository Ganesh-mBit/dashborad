import { SET_MODAL_STATE } from "./actionTypes";

export const setModalState = (payload: boolean): any => {
  return { type: SET_MODAL_STATE, payload };
};