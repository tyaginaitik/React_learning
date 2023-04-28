const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Naitik",
  address: {
    street: "726 New",
    city: "North DL",
    state: "DL",
  },
};

const UPDATE_ADDRESS = "UPDATE_ADDRESS";

const updateAddress = (street) => {
  return {
    type: UPDATE_ADDRESS,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Intial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(updateAddress("1402 Del"));
unsubscribe();
