import React from "react";
import { connect } from 'react-redux'

import { postOrgAPI, putOrgAPI, fetchListOrg, fetchListOrgWithoutSub } from '../actions/orgAction'
import {postEmplAPI, putEmplAPI, getListEmplOrg, fetchListEmplWithoutSub, clearEmpl} from '../actions/emplAction'

import CreateOrganization from '../components/create_element'
import CreateEmployee from '../components/createEmpl'

class SmartCreate extends React.Component {

    componentWillMount() {
        if (this.props.isCreate) {
            this.props.fetchDataOrg()
        } else {
            if(this.props.isOrg)
                this.props.fetchListOrgWithoutSubOrg(this.props.org.id)
            else {
                this.props.fetchDataOrg()
                this.props.fetchListEmplWithoutSubEmpl(this.props.empl.id, this.props.empl.idOrg)
            }
        }
    }

    render() {
        switch (window.location.pathname)
        {
            case '/organization/create':
                return(
                    <CreateOrganization
                        isCreate = {this.props.isCreate}
                        org = {this.props.org}
                        list = {this.props.organizations}
                        handleFormSubmit = {this.props.postDataOrg}/>

                );
            case '/organization/update':
                return(
                    <CreateOrganization
                        isCreate = {this.props.isCreate}
                        org = {this.props.org}
                        list = {this.props.organizations}
                        handleFormSubmit = {this.props.putDataOrg}/>
                );
            case '/employee/create':
                return(
                    <CreateEmployee
                        isCreate = {this.props.isCreate}
                        empl = {this.props.empl}
                        listOrg = {this.props.organizations}
                        listEmpl = {this.props.emplList}
                        handleFormSubmit = {this.props.postDataEmpl}
                        fetchEmplOrg = {this.props.fetchDataEmplOrg}/>
                );
            case '/employee/update':
                return(
                    <CreateEmployee
                        isCreate = {this.props.isCreate}
                        empl = {this.props.empl}
                        listOrg = {this.props.organizations}
                        listEmpl = {this.props.emplList}
                        handleFormSubmit = {this.props.putDataEmpl}
                        fetchEmplOrg = {this.props.fetchDataEmplOrg}
                    />
                );
            default:
        }
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchDataOrg: () => dispatch(fetchListOrg()),
        fetchListOrgWithoutSubOrg: (id_org) => dispatch(fetchListOrgWithoutSub(id_org)),
        postDataOrg: (data) => dispatch(postOrgAPI(data)),
        putDataOrg: (data) => dispatch(putOrgAPI(data)),

        // fetchDataEmpl: () => dispatch(fetchListEmpl()),
        postDataEmpl: (data) => dispatch(postEmplAPI(data)),
        putDataEmpl: (data) => dispatch(putEmplAPI(data)),
        fetchDataEmplOrg: (idOrg) => dispatch(getListEmplOrg(idOrg)),
        fetchListEmplWithoutSubEmpl: (idEmpl, idOrg) => dispatch(fetchListEmplWithoutSub(idEmpl, idOrg)),
        clearEmpl: () => clearEmpl()
    }
}

function mapStateToProps(state){
    return{
        org: state.org,
        organizations: state.organizations,

        empl: state.empl,
        emplList: state.employees
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartCreate)
