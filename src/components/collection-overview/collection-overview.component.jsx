import React from "react";
import "./collection-overview.style.scss"

import {connect} from "react-redux";
import {CollectionPreview} from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {shopSelectorData} from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherParams}) => <CollectionPreview key={id} {...otherParams} />)
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: shopSelectorData
})

export default connect(mapStateToProps)(CollectionOverview)
