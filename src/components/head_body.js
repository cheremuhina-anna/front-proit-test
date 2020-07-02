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

// function UseSelectView() {
//     let history = useHistory();
//
//     function handleChange(event) {
//         history.push(`${window.location.pathname}/${event.target.value}`);
//     }
//
//     return(
//         <select onChange={handleChange}>
//             <option value={''}>Список</option>
//             <option value={'tree'}>Дерево</option>
//         </select>
//     );
// }

class HeadBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filter: ''
        }
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleDropClick = this.handleDropClick.bind(this);
    }

    handleInputChange = (event) => {
        if (this.props.isOrg) {
            this.props.changeFilter(event.target.value)
        }
        else {
            let sel = document.getElementById('select-filter-for-empl');
            this.props.changeFilter(sel.value, event.target.value)
        }
    }

    handleSelectChange = (event) => {
        if (!this.props.isOrg) {
            let inp = document.getElementById('input-filter');
            this.props.changeFilter(event.target.value, inp.value)
        }
    }

    handleFilterClick = () => {
        if (this.props.isOrg) {
            if (this.props.filter === '') alert("Введите фильтр для поиска!");
            else this.props.fetchFilterList(this.props.filter, this.props.offset, this.props.limit)
        } else {
            if (this.props.filter.filter === '') alert("Введите фильтр для поиска!");
            else this.props.fetchFilterList(this.props.filter.type, this.props.filter.filter, this.props.offset, this.props.limit)
            }
    }

    handleDropClick = () => {
        if (this.props.isOrg) this.props.changeFilter('');
        else this.props.changeFilter('', '');
        this.props.fetchList(this.props.offset, this.props.limit)
    }

    render(){
        return (
            <div>
                {/*<UseSelectView/>*/}
                {/*<select>*/}
                {/*    <option>Список</option>*/}
                {/*    <option>Дерево</option>*/}
                {/*</select>*/}
                <UseButtonCreate clear = {this.props.clearOrg}/>   
                <label>
                    Фильтр:
                    <input
                        id = 'input-filter'
                        value = { this.props.isOrg ? this.props.filter : this.props.filter.filter}
                        onChange = {this.handleInputChange} />
                </label>
                <select id='select-filter-for-empl' hidden={this.props.isOrg} onChange={this.handleSelectChange}>
                    <option value={'name'}>ФИО</option>
                    <option value={'org'}>Организация</option>
                </select>
                {/*<button onClick={()=>this.props.fetchFilterList(document.getElementById('select-filter-for-empl').value, this.state.filter, this.props.offset, this.props.limit)}>Найти</button>*/}
                <button onClick={this.handleFilterClick}>Найти</button>
                <button onClick={this.handleDropClick}>Сброс</button>
            </div>
        );
    }
}


export default HeadBody
