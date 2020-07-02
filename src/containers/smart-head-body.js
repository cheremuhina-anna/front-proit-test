import React from "react";
import { connect } from 'react-redux'
import { useHistory} from "react-router-dom";

import {clearOrg, fetchFilterList } from "../actions/orgAction"
import HeadBody from "../components/head_body";

function UseButtonCreate({
                             clear=()=>{}
                         }) {
    let history = useHistory();

    function handleClick() {
        clear()
        history.push(`${window.location.pathname}/create`);
    }

    return(
        <button type="button" onClick={handleClick}>Добавить</button>
    );
}

class SmartHeadBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filter: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({filter: event.target.value});
    }

    render(){
        return (
<HeadBody

        );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        clearOrg: () => dispatch(clearOrg()),
        fetchFilterList: (filter, list) => dispatch(fetchFilterList(filter, list))
    }
}

function mapStateToProps(state){
    return{
        org: state.org,
        pageOrganizations: state.pageOrganizations,

        empl: state.empl,
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartHeadBody)