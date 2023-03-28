import { ADDITIONAL_INFO_ACTION_TYPES } from "./additional-info.types";

const INITAL_ADD_INFO = {
  add_info: null,
  isLoading: false,
  error: null,
};

export const additionalInfoReducer = (state = INITAL_ADD_INFO, action ) => {
  const { type, payload } = action;

  switch (type) {
    case ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_START:
      return {
        ...state,
        isLoading: true,
      };

    case ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_SUCCESS:
      return {
        ...state,
        add_info: payload,
        isLoading: false,
      };
    case ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
      default: return state;
  }
};
