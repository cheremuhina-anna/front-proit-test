import React from "react";
import { connect } from 'react-redux';
import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { bindActionCreators } from "redux";

import { fetchPageListOrg, selectOrg, deleteOrgAPI, fetchFilterListOrg, changeFilterOrg } from '../actions/orgAction'
import {
    fetchPageListEmpl,
    selectEmpl,
    deleteEmplAPI,
    fetchFilterListEmpl,
    changeFilterEmpl
} from '../actions/emplAction'

import Table from '../components/table'
import HeadBody from "../components/head_body";

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

class SmartBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            offset: 0,
            limit: 5,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePageFilterClick = this.handlePageFilterClick.bind(this);
    }

    handlePageFilterClick = (e) => {
        console.log();
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.limit;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            if (this.props.isOrg)
                this.props.fetchFilterListOrg(this.props.orgFilter, this.state.offset, this.state.limit)
            else
                this.props.fetchFilterListEmpl(this.props.emplFilter.type, this.props.emplFilter.filter, this.state.offset, this.state.limit)
        });

    };

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.limit;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            if (this.props.isOrg)
                this.props.fetchDataOrg(this.state.offset, this.state.limit)
            else
                this.props.fetchDataEmpl(this.state.offset, this.state.limit)
        });

    };

    componentWillMount() {
        if (this.props.isOrg)
            this.props.fetchDataOrg(this.state.offset, this.state.limit)
        else
            this.props.fetchDataEmpl(this.state.offset, this.state.limit)
    }

    render() {
        if(this.props.isOrg)
            return(
                <div className={'container'}>
                    <HeadBody
                        isOrg ={true}
                        fetchFilterList = {this.props.fetchFilterListOrg}
                        fetchList = {this.props.fetchDataOrg}
                        changeFilter = {this.props.changeFilterOrg}
                        filter = {this.props.orgFilter}
                        offset = {this.state.offset}
                        limit = {this.state.limit}/>
                    <Table
                        thList = {thListOrg}
                        list = {this.props.pageOrganizations.listOnPage}
                        select = {this.props.selectOrg}
                        delete = {this.props.deleteDataOrg}
                        offset = {this.state.offset}
                        limit = {this.state.limit}
                        isDelete = {this.props.isDeleteOrg}
                        fetchList = {this.props.fetchDataOrg}
                        fetchFilterList = {this.props.fetchFilterList}/>
                    <div className={'row justify-content-center'}>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(this.props.pageOrganizations.countOrgs / this.state.limit)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.props.orgFilter === '' ? this.handlePageClick : this.handlePageFilterClick}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-link'}
                        nextClassName={'page-link'}
                        activeClassName={"active"}/>
                    </div>
                </div>
            );
        else
            return(
                <div className={'container'}>
                    <HeadBody
                        isOrg = {false}
                        fetchFilterList = {this.props.fetchFilterListEmpl}
                        fetchList = {this.props.fetchDataEmpl}
                        changeFilter = {this.props.changeFilterEmpl}
                        filter = {this.props.emplFilter}
                        offset = {this.state.offset}
                        limit = {this.state.limit}/>
                    <Table
                        thList = {thListEmpl}
                        list = {this.props.pageEmployees.listOnPage}
                        select = {this.props.selectEmpl}
                        delete = {this.props.deleteDataEmpl}
                        offset = {this.state.offset}
                        limit = {this.state.limit}
                        isDelete = {this.props.isDeleteEmpl}
                        fetchList = {this.props.fetchDataEmpl}/>
                     <div className={'row justify-content-center'}>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(this.props.pageEmployees.countEmpls / this.state.limit)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.props.emplFilter.filter === '' ? this.handlePageClick : this.handlePageFilterClick}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-link'}
                        nextClassName={'page-link'}
                        activeClassName={"active"}/>
                     </div>
                </div>
            );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchDataOrg: (offset, limit) => dispatch(fetchPageListOrg(offset, limit)),
        selectOrg: (org) => dispatch(selectOrg(org)),
        deleteDataOrg: (data, offset, limit) => dispatch(deleteOrgAPI(data, offset, limit)),
        fetchFilterListOrg: (filter, offset, limit) => dispatch(fetchFilterListOrg(filter, offset, limit)),
        changeFilterOrg: (filter) => dispatch(changeFilterOrg(filter)),

        fetchDataEmpl: (offset, limit) => dispatch(fetchPageListEmpl(offset, limit)),
        selectEmpl: (empl) => dispatch(selectEmpl(empl)),
        deleteDataEmpl: (data, offset, limit) => dispatch(deleteEmplAPI(data, offset, limit)),
        fetchFilterListEmpl: (type, filter, offset, limit) => dispatch(fetchFilterListEmpl(type, filter, offset, limit)),
        changeFilterEmpl: (type, filter) => dispatch(changeFilterEmpl(type, filter))
    }
}

function mapStateToProps(state){
    return{
        pageOrganizations: state.pageOrganizations,
        org: state.org,
        isDeleteOrg: state.isActionOrganization,
        orgFilter: state.orgFilter,

        pageEmployees: state.pageEmployees,
        emplList: state.employees,
        empl: state.empl,
        isDeleteEmpl: state.isActionEmployee,
        emplFilter : state.emplFilter
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartBody)