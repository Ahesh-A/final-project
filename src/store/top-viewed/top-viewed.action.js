import {TOP_VIEWED_ACTION_TYPES} from './top-viewed.type.js';
import { createAction } from '../../utils/reducer/reducer.util.js';

export const setTopViewedProductsSuccess = (products) => createAction(TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_SUCCESS, products);
export const setTopViewedProductsStart = (product) => createAction(TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_START, product);
export const setTopViewedProductsFailed = (error) => createAction(TOP_VIEWED_ACTION_TYPES.TOP_VIEWED_FAILED, error);