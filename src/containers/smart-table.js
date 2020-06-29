import React from "react";
import { connect } from 'react-redux';
import ReactPaginate from "react-paginate";
// import { bindActionCreators } from "redux";

import { fetchPageListOrg, selectOrg, deleteOrgAPI, fetchFilterList } from '../actions/orgAction'
import { fetchPageListEmpl, selectEmpl, deleteEmplAPI } from '../actions/emplAction'

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
    constructor(props){
        super(props)
        this.state = {
            offset: 0,
            limit: 5,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

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
                <div>
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
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(this.props.pageOrganizations.countOrgs / this.state.limit)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                    {/*<Pagination*/}
                    {/*    count = {this.props.pageOrganizations.countOrgs}*/}
                    {/*    fetchData = {this.props.fetchDataOrg}*/}
                    {/*/>*/}
                </div>
            );
        else
            return(
                <div>
                    <Table
                        thList = {thListEmpl}
                        list = {this.props.pageEmployees.listOnPage}
                        select = {this.props.selectEmpl}
                        delete = {this.props.deleteDataEmpl}
                        offset = {this.state.offset}
                        limit = {this.state.limit}
                        isDelete = {this.props.isDeleteEmpl}
                        fetchList = {this.props.fetchDataEmpl}/>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(this.props.pageEmployees.countEmpls / this.state.limit)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                    {/*<Pagination*/}
                    {/*    count = {this.props.pageEmployees.countEmpls}*/}
                    {/*    fetchData = {this.props.fetchDataEmpl}*/}
                    {/*/>*/}
                </div>
            );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchDataOrg: (offset, limit) => dispatch(fetchPageListOrg(offset, limit)),
        selectOrg: (org) => dispatch(selectOrg(org)),
        deleteDataOrg: (data, offset, limit) => dispatch(deleteOrgAPI(data, offset, limit)),
        fetchFilterList: (filter, list) => dispatch(fetchFilterList(filter, list)),

        fetchDataEmpl: (offset, limit) => dispatch(fetchPageListEmpl(offset, limit)),
        selectEmpl: (empl) => dispatch(selectEmpl(empl)),
        deleteDataEmpl: (data, offset, limit) => dispatch(deleteEmplAPI(data, offset, limit)),
    }
}

function mapStateToProps(state){
    return{
        pageOrganizations: state.pageOrganizations,
        org: state.org,
        isDeleteOrg: state.isActionOrganization,

        pageEmployees: state.pageEmployees,
        emplList: state.employees,
        empl: state.empl,
        isDeleteEmpl: state.isActionEmployee
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SmartTable)