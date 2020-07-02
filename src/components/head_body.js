import React from "react";
import { useHistory} from "react-router-dom";

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
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({filter: event.target.value});
    }

    handleFilterClick = () => {
        if (this.state.filter === '') alert("Введите фильтр для поиска!");
        else
        {
            let sel = document.getElementById('select-filter-for-empl');
            this.props.fetchFilterList(sel.value, this.state.filter, this.props.offset, this.props.limit)
        }
    }

    render(){
        return (
            <div>
                {/* <select>
                    <option>Список</option>
                    <option>Дерево</option>
                </select> */}
                <UseButtonCreate clear = {this.props.clearOrg}/>   
                <label>
                    Фильтр:
                    <input
                        value = {this.state.filter}
                        onChange = {this.handleInputChange} />
                </label>
                <select id='select-filter-for-empl' hidden={this.props.isOrg}>
                    <option value={'name'}>ФИО</option>
                    <option value={'org'}>Организация</option>
                </select>
                {/*<button onClick={()=>this.props.fetchFilterList(document.getElementById('select-filter-for-empl').value, this.state.filter, this.props.offset, this.props.limit)}>Найти</button>*/}
                <button onClick={this.handleFilterClick}>Найти</button>
                <button onClick={()=>this.props.fetchList(this.props.offset, this.props.limit)}>Сброс</button>
            </div>
        );
    }
}


export default HeadBody
