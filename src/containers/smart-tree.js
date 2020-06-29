import React from "react";

import TreeView from "../components/tree";
import { fetchRoots} from "../actions/orgAction";
import {connect} from "react-redux";

class SmartTree extends React.Component {

    componentWillMount() {
        this.props.fetchRootsOrg();
    }

    render() {
        return(
            <TreeView
                roots = {this.props.treeOrganizations}
            />
        );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchRootsOrg: () => dispatch(fetchRoots())
    }
}

function mapStateToProps(state){
    return{
        treeOrganizations: state.treeOrganizations,
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartTree)