import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const shopSelector = state => state.shop.collections

export const shopSelectorData = createSelector([shopSelector],
    data => {
        let collections = [];
        collections = data;
        return collections ? collections: []
    })



export const selectCollection = memoize( (collectionUrlParam: any) =>
    createSelector(
        [shopSelector],
        collections=> {

            return collections ?  collections[collectionUrlParam]: null
        }
    ));
