import * as actionTypes from "../actions/actionTypes";

const initialState = {
  rentModal: {
    active: false,
    name: "",
    rented: false,
  },
  addModal: {
    active: false,
    you: 70,
    renter: 30,
  },
};

const setRentModal = (state, action) => {
  return { ...state, rentModal: action.payload };
};

const setAddModal = (state, { payload: { name, value } }) => {
  let name2 = "you",
    value2;
  if (name === "you") {
    name2 = "renter";
  }
  value2 = 100 - value;
  return {
    ...state,
    addModal: { ...state.addModal, [name]: value, [name2]: value2 },
  };
};

const setFilterModal = (state, action) => {
  return { ...state };
};

const openModal = (state, action) => {
  return {
    ...state,
    [action.payload]: { ...state[action.payload], active: true },
  };
};

const closeModal = (state, action) => {
  return {
    ...state,
    rentModal: { active: false },
    addModal: { active: false },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RENT_MODAL:
      return setRentModal(state, action);
    case actionTypes.SET_ADD_MODAL:
      return setAddModal(state, action);
    case actionTypes.SET_FILTER_MODAL:
      return setFilterModal(state, action);
    case actionTypes.OPEN_MODAL:
      return openModal(state, action);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
};

export default reducer;
