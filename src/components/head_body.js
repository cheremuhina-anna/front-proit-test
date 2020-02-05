import React from "react";
import { connect } from 'react-redux'
import { useHistory} from "react-router-dom";

import {clearOrg } from "../actions/orgAction"

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

class HeadBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filter: ''
        }
    }

    // handleInputChange = (event) => {
    //     this.setState({filter: event.target.value});
    // }

    render(){
        return (
            <div>
                {/* <select>
                    <option>Список</option>
                    <option>Дерево</option>
                </select> */}
                <UseButtonCreate clear = {this.props.clearOrg}/>   
                {/* <label>
                    Фильтр:
                    <input
                        value = {this.state.filter}
                        onChange = {this.handleInputChange} />
                </label> 
                <button onClick={()=>this.props.fetchFilterList(this.state.filter, this.props.orgList)}>Найти</button> */}

            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return {
        clearOrg: () => dispatch(clearOrg()),
        // fetchFilterList: (filter, list) => dispatch(fetchFilterList(filter, list))
    }
}

function mapStateToProps(state){
    return{
        org: state.org,
        // orgList: state.organizations,

        empl: state.empl,
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(HeadBody)