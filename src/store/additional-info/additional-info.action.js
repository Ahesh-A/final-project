import { ADDITIONAL_INFO_ACTION_TYPES } from "./additional-info.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const addAdditionalStart = () =>
  createAction(ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_START);
export const addAdditionalSuccess = (addInfo) =>
  createAction(ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_SUCCESS, addInfo);
export const addAdditionalFalied = (error) =>
  createAction(ADDITIONAL_INFO_ACTION_TYPES.SET_ADD_INFO_FAILED, error);
