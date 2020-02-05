import React from "react";
import { connect } from 'react-redux'

import { postOrgAPI, putOrgAPI, fetchListOrg } from '../actions/orgAction'
import { postEmplAPI, putEmplAPI, getListEmplOrg, fetchListEmpl } from '../actions/emplAction'

import CreateOrganization from '../components/create_element'
import CreateEmployee from '../components/createEmpl'

class SmartCreate extends React.Component {

    componentWillMount() {
        this.props.fetchDataOrg()
        if(!this.props.isOrg)
            this.props.fetchDataEmpl()
    }

    render() {
        switch (window.location.pathname)
        {
            case '/organization/create':
                return(
                    <CreateOrganization 
                        isCreate = {this.props.isCreate}
                        org = {this.props.org}
                        list = {this.props.orgList} 
                        handleFormSubmit = {this.props.postDataOrg}/>
                        
                );
            case '/organization/update':
                return(
                    <CreateOrganization
                        isCreate = {this.props.isCreate}
                        org = {this.props.org}
                        list = {this.props.orgList}
                        handleFormSubmit = {this.props.putDataOrg}/>
                );
            case '/employee/create':
                return(
                    <CreateEmployee
                        isCreate = {this.props.isCreate}
                        empl = {this.props.empl}
                        listOrg = {this.props.orgList}
                        listEmpl = {this.props.emplList} 
                        handleFormSubmit = {this.props.postDataEmpl}
                        fetchEmplOrg = {this.props.fetchDataEmplOrg}/>
                );
            case '/employee/update':
                return(
                    <CreateEmployee 
                        isCreate = {this.props.isCreate}
                        empl = {this.props.empl}
                        listOrg = {this.props.orgList}
                        listEmpl = {this.props.emplList} 
                        handleFormSubmit = {this.props.putDataEmpl}
                        fetchEmplOrg = {this.props.fetchDataEmplOrg}/>
                );
            default: 
        }
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchDataOrg: () => dispatch(fetchListOrg()),
        postDataOrg: (data) => dispatch(postOrgAPI(data)),
        putDataOrg: (data) => dispatch(putOrgAPI(data)),

        fetchDataEmpl: () => dispatch(fetchListEmpl()),
        postDataEmpl: (data) => dispatch(postEmplAPI(data)),
        putDataEmpl: (data) => dispatch(putEmplAPI(data)),
        fetchDataEmplOrg: (idOrg) => dispatch(getListEmplOrg(idOrg))
    }
}

function mapStateToProps(state){
    return{
        org: state.org,
        orgList: state.organizations,

        empl: state.empl,
        emplList: state.employees
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartCreate)
