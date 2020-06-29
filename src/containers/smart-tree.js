import React from "react";

import TreeView from "../components/tree";
import {fetchTreeOrg} from "../actions/orgAction";
import {fetchTreeEmpl} from "../actions/emplAction"
import {connect} from "react-redux";

class SmartTree extends React.Component {

    componentWillMount() {
        if(this.props.isOrg)
            this.props.fetchTreeOrg();
        else
            this.props.fetchTreeEmpl();
    }

    render() {
        if(this.props.isOrg)
            return(
                <TreeView
                    tree = {this.props.treeOrganizations}
                />
            );
        else
            return(
                <TreeView
                    tree = {this.props.treeEmployees}
                />
            );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchTreeOrg: () => dispatch(fetchTreeOrg()),

        fetchTreeEmpl: () => dispatch(fetchTreeEmpl())
    }
}

function mapStateToProps(state){
    return{
        treeOrganizations: state.treeOrganizations,

        treeEmployees: state.treeEmployees
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartTree)