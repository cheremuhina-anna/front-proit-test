import React from "react";

// import SmartCreate from '../containers/smart-create'

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreate: this.props.isCreate,
            // id: this.props.id,
            // name: this.props.name,
            // idHeadorg: this.props.idHeadorg,
            org: this.props.org,
            list: this.props.list
        }
    }

    handleInputChange = (event) => {
        // this.setState({name: event.target.value});
        this.setState({org: {...this.state.org, name: event.target.value}});
    }

    handleSelectChange = (event) => {
        // this.setState({idHeadorg: event.target.value});
        this.setState({org: {...this.state.org, idHeadorg: event.target.value}});
    }

    buttonAction = () => {
        if (this.state.isCreate)
            return(
                // <button onClick={() => this.props.handleFormSubmit({name: this.state.name, idHeadorg: this.state.idHeadorg})}>Добавить</button>
                <button onClick={() => {this.props.handleFormSubmit(this.state.org)}}> Добавить </button>
            )
        else
            return(
                // <button onClick={() => this.props.handleFormSubmit({id: this.state.id, name: this.state.name, idHeadorg: this.state.idHeadorg})}>Изменить</button>
                <button onClick={() => this.props.handleFormSubmit(this.state.org)}>Изменить</button>
            )
    }

    render(){
        return (
            <form className='formContainer'>
                <label>
                    Название организации:
                    <input
                        // value = {this.state.name}
                        value = {this.state.org.name}
                        onChange = {this.handleInputChange} />
                </label>
                <br />
                <label>
                    Головная организация:
                    {/* <select value={this.state.idHeadorg} onChange={this.handleSelectChange}> */}
                    <select  value = {this.state.org.idHeadorg===null ? '' : this.state.org.idHeadorg} onChange={this.handleSelectChange}>
                        <option value=''>-нет-</option>
                        {this.props.list.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                            })
                        }
                     </select>
                </label>
                <br />
                {this.buttonAction()}
            </form> 
        );
    }
}

export default Create

