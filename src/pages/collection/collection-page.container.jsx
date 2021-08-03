import {connect} from "react-redux";
import CollectionPage from "./collection-page.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {compose} from "redux";
import { selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer

