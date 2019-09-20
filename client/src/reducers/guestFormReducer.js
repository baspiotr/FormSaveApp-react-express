import { NEW_GUEST_FORM } from "../actions/types";

const initialState = {
  newGuestFormInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_GUEST_FORM:
      return {
        ...state,
        newGuestFormInfo: action.payload
      };
    default:
      return state;
  }
}
