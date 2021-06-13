import React from 'react'
import SHOP_DATA from './shopdata'
import {CollectionPreview} from "../../components/collection-preview/collection-preview.component"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        const collections=this.state.collections
        return (
           collections.map(({id, ...otherParams}) => <CollectionPreview key={id} {...otherParams} />)
        )
    }


}

export default Shop

