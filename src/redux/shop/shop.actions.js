import {shopTypes} from "./shop.types";

export const shopUpdate  =(collections)=>({
    type : shopTypes.UPDATE_SHOP_COLLECTIONS,
    payload : collections
})
