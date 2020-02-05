import React from "react";
import { connect } from 'react-redux'
// import { bindActionCreators } from "redux";

import { fetchListOrg, selectOrg, deleteOrgAPI, fetchFilterList } from '../actions/orgAction'
import { fetchListEmpl, selectEmpl, deleteEmplAPI } from '../actions/emplAction'

import Table from '../components/table'

const thListOrg = {
    capt:'организаций', 
    th1: 'Название организации', 
    th2:'Головная организация', 
    th3:'Количество сотрудников'
}

const thListEmpl = {
    capt: 'сотрудников', 
    th1: 'ФИО',
    th2: 'Организация', 
    th3: 'Руководитель'
}

class SmartTable extends React.Component {

    componentWillMount() {
        this.props.fetchDataOrg()
        if(!this.props.isOrg)
            this.props.fetchDataEmpl()
    }



    render() {
        if(this.props.isOrg)
            return(
                <Table
                    thList = {thListOrg}
                    list = {this.props.orgList} 
                    select = {this.props.selectOrg}
                    delete = {this.props.deleteDataOrg}
                    isDelete = {this.props.isDeleteOrg}
                    fetchList = {this.props.fetchDataOrg}
                    fetchFilterList = {this.props.fetchFilterList}/>
            );
        else
            return(
                <Table
                    thList = {thListEmpl}
                    list = {this.props.emplList} 
                    select = {this.props.selectEmpl}
                    delete = {this.props.deleteDataEmpl}
                    isDelete = {this.props.isDeleteEmpl}
                    fetchList = {this.props.fetchDataEmpl}/>
            );
    }
}

function matchDispatchToProps(dispatch) {
    return { 
        fetchDataOrg: () => dispatch(fetchListOrg()),
        selectOrg: (org) => dispatch(selectOrg(org)),
        deleteDataOrg: (data) => dispatch(deleteOrgAPI(data)),
        fetchFilterList: (filter, list) => dispatch(fetchFilterList(filter, list)),

        fetchDataEmpl: () => dispatch(fetchListEmpl()),
        selectEmpl: (empl) => dispatch(selectEmpl(empl)),
        deleteDataEmpl: (data) => dispatch(deleteEmplAPI(data)),
    }
}

function mapStateToProps(state){
    return{
        orgList: state.organizations,
        org: state.org,
        isDeleteOrg: state.isActionOrganization,

        emplList: state.employees,
        empl: state.empl,
        isDeleteEmpl: state.isActionEmployee
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartTable)