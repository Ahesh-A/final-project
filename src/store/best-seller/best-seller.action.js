import { createAction } from "../../utils/reducer/reducer.util"
import { BEST_SELLER_SCTION_TYPES } from "./best-seller.types"

export const setBestSeller = (products) => createAction(BEST_SELLER_SCTION_TYPES.SET_BEST_SELLER, products);

