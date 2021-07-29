import React from 'react'
import {Route} from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection-page.component";

import {firestore} from "../../firebase/firebase.utils";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

import {connect} from "react-redux";
import {shopUpdate} from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {

    state = {
        loading: true
    }
    unsubscribeSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;
        const shopCollectionRef = firestore.collection('collection')
        shopCollectionRef.get()
            .then( snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

            updateCollections(collectionsMap)
            this.setState({loading: false})
        })

    }

    render() {
        const {match} = this.props
        const {loading} = this.state
        return (
            <div className="shop">
                <Route exact path={`${match.path}`}
                       render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)}/>
                <Route path={`${match.path}/:catId`}
                       render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)}/>
            </div>
        )


    }

}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(shopUpdate(collections))
})
export default connect(null, mapDispatchToProps)(Shop)

