import * as actionTypes from "./actionTypes";

export const openAddModal = () => {
  return { type: actionTypes.OPEN_MODAL, payload: "addModal" };
};

export const closeModals = () => {
  return { type: actionTypes.CLOSE_MODAL };
};

export const setRentModal = (name, rented) => {
  return {
    type: actionTypes.SET_RENT_MODAL,
    payload: { active: true, name, rented },
  };
};

export const setAddModal = (name, value) => {
  return {
    type: actionTypes.SET_ADD_MODAL,
    payload: { name, value },
  };
};
