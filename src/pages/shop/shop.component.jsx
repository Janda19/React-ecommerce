import React from 'react'
import {Route} from "react-router-dom";


import {connect} from "react-redux";

import {fetchCollectionsStart} from "../../redux/shop/shop.actions"


import CollectionPageContainer from "../collection/collection-page.container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

class Shop extends React.Component {
    componentDidMount() {
        const {fetchCollectionsStart} = this.props;

        fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:catId`}
                       component={CollectionPageContainer}/>
            </div>
        );

    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    null,
    mapDispatchToProps
)(Shop);



