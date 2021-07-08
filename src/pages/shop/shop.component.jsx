import React from 'react'
import {Route} from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection-page.component";
const Shop = ({match}) => {
    return (
        <div className="shop">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:catId`} component={CollectionPage}/>
        </div>
    )


}

export default Shop

