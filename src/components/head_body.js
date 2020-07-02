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
        <button  className={'btn btn-success'} type="button" onClick={handleClick}>Добавить</button>
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
                <div className={'container p-5'}>
                    <div className={'row'}>
                        <div className={'col input-group mb-3'}>
                            <div className="input-group-prepend">
                                <span className={'input-group-text'}  id="basic-addon1">Фильтр:</span>
                            </div>
                                <input
                                        id = 'input-filter'
                                        className={'form-control'}
                                        value = { this.props.isOrg ? this.props.filter : this.props.filter.filter}
                                        onChange = {this.handleInputChange}
                                        aria-describedby="basic-addon1"/>


                            <select id='select-filter-for-empl' className={'custom-select'} hidden={this.props.isOrg} onChange={this.handleSelectChange}>
                                <option value={'name'}>ФИО</option>
                                <option value={'org'}>Организация</option>
                            </select>
                            <div class="input-group-append">
                                <button className={'btn btn-primary'} onClick={this.handleFilterClick}>Найти</button>
                                <button className={'btn btn-secondary'} onClick={this.handleDropClick}>Сброс</button>
                            </div>
                        </div>
                        <div className={'col-2'}>
                            <UseButtonCreate clear = {this.props.clearOrg}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HeadBody
