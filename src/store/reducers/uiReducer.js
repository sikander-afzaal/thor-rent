import * as actionTypes from "../actions/actionTypes";
import img1 from "../../Assets/nft/heimdall.png";
import img2 from "../../Assets/nft/freya.png";
import img3 from "../../Assets/nft/thor.png";
import img4 from "../../Assets/nft/odin.png";
const initialState = {
  listingCards: [
    {
      name: "Heimdall",
      rented: false,
      img: img1,
    },
    {
      name: "Heimdall",
      rented: true,
      img: img1,
    },
    {
      name: "Heimdall",
      rented: false,
      img: img1,
    },
    {
      name: "Freya",
      rented: false,
      img: img2,
    },
    {
      name: "Freya",
      rented: true,
      img: img2,
    },
    {
      name: "Freya",
      rented: false,
      img: img2,
    },
    {
      name: "Odin",
      rented: true,
      img: img4,
    },
    {
      name: "Odin",
      rented: true,
      img: img4,
    },
    {
      name: "Odin",
      rented: false,
      img: img4,
    },
    {
      name: "Thor",
      rented: false,
      img: img3,
    },
    {
      name: "Thor",
      rented: true,
      img: img3,
    },
    {
      name: "Thor",
      rented: false,
      img: img3,
    },
  ],
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
  filterModal: {
    active: false,
    nameFilter: {
      heim: true,
      freya: true,
      thor: true,
      odin: true,
    },
  },
};

const setRentModal = (state, action) => {
  return { ...state, rentModal: action.payload };
};

const setAddModalVal = (state, { payload: { name, value } }) => {
  let name2 = "you",
    value2;

  if (value > 100 || value < 0) {
    return state;
  }

  if (name === "you") {
    name2 = "renter";
  }
  value2 = 100 - value;

  return {
    ...state,
    addModal: { ...state.addModal, [name]: value, [name2]: value2 },
  };
};

const setNameFilters = (state, action) => {
  return {
    ...state,
    filterModal: {
      ...state.filterModal,
      nameFilter: {
        ...state.filterModal.nameFilter,
        [action.payload]: !state.filterModal.nameFilter[action.payload],
      },
    },
  };
};

const addListingCards = (state, action) => {
  return { ...state, listingCards: [...state.listingCards, ...action.payload] };
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
    rentModal: { active: false, ...initialState.rentModal },
    addModal: { active: false, ...initialState.addModal },
    filterModal: { ...state.filterModal, active: false },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RENT_MODAL:
      return setRentModal(state, action);
    case actionTypes.SET_ADD_MODAL_VAL:
      return setAddModalVal(state, action);
    case actionTypes.ADD_LISTING_CARDS:
      return addListingCards(state, action);
    case actionTypes.SET_NAME_FILTERS:
      return setNameFilters(state, action);
    case actionTypes.OPEN_MODAL:
      return openModal(state, action);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
};

export default reducer;
