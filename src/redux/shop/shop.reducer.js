import SHOP_DATA from "../../pages/shop/shopdata";

const INIT_STATE = SHOP_DATA

export const shopReducer = (state = INIT_STATE ,action)=> {
    switch (action.type){
        default :
            return state
    }
}
