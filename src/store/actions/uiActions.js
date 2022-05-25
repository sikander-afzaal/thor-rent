import * as actionTypes from "./actionTypes";

export const openAddModal = () => {
  return { type: actionTypes.OPEN_MODAL, payload: "addModal" };
};

export const openFilterModal = () => {
  return { type: actionTypes.OPEN_MODAL, payload: "filterModal" };
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

export const setAddModalVal = (name, value) => {
  return {
    type: actionTypes.SET_ADD_MODAL_VAL,
    payload: { name, value },
  };
};

export const addListingCards = (newCards) => {
  return {
    type: actionTypes.ADD_LISTING_CARDS,
    payload: newCards,
  };
};

export const setNameFilters = (name) => {
  return {
    type: actionTypes.SET_NAME_FILTERS,
    payload: name,
  };
};
