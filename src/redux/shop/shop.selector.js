import {createSelector} from "reselect";
import memoize from 'lodash.memoize';
const shopSelector = state => state.shop

export const shopSelectorData = createSelector([shopSelector],
    data => {
        let collections = [];
        collections = data;
        return collections
    })



export const selectCollection = memoize( (collectionUrlParam: any) =>
    createSelector(
        [shopSelectorData],
        collections=> {

            return collections.find((item) => item.id === collectionUrlParam)
        }
    ));
