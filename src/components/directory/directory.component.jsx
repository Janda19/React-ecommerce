import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss'

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {directoryDataSelector} from "../../redux/directory/directory.selectors";

const Directory = ({directory}) => {


    return (
        <div className="directory-menu">
            {directory.map(({id, ...otherParams}) =>
                <MenuItem key={id} {...otherParams} />)}

        </div>
    )


}

const mapStateToProps = createStructuredSelector({
    directory: directoryDataSelector
})

export default connect(mapStateToProps)(Directory)
