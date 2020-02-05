import React from "react";

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreate: this.props.isCreate,
            empl: this.props.empl,
            listOrg: this.props.listOrg,
            listEmpl:  this.props.listEmpl,
        }
    }

    handleInputChange = (event) => {
        this.setState({empl: {...this.state.empl, name: event.target.value}});
    }

    handleSelectOrgChange = (event) => {
        // let list = EmplService.getListEmplOrg(event.target.value)
        this.setState({ 
            empl: {...this.state.empl, idOrg: event.target.value} 
        });
        this.props.fetchEmplOrg(event.target.value)
    }

    handleSelectHeadEmplChange = (event) => {
        this.setState({empl: {...this.state.empl, idHeadempl: event.target.value}});
    }

    buttonAction = () => {
        if (this.state.isCreate)
            return(
                // <button onClick={() => this.props.handleFormSubmit({name: this.state.name, idHeadorg: this.state.idHeadorg})}>Добавить</button>
                <button onClick={() => this.props.handleFormSubmit(this.state.empl)}>Добавить</button>
            )
        else
            return(
                // <button onClick={() => this.props.handleFormSubmit({id: this.state.id, name: this.state.name, idHeadorg: this.state.idHeadorg})}>Изменить</button>
                <button onClick={() => this.props.handleFormSubmit(this.state.empl)}>Изменить</button>
            )
    }

    render(){
        return (
            <form className='formContainer'>
                <label>
                    ФИО:
                    <input
                        // value = {this.state.name}
                        value = {this.state.empl.name}
                        onChange = {this.handleInputChange} />
                </label>
                <br />
                <label>
                    Организация:
                    {/* <select value={this.state.idHeadorg} onChange={this.handleSelectChange}> */}
                    <select value={this.state.empl.idOrg===null ? '' : this.state.empl.idOrg} onChange={this.handleSelectOrgChange}>
                        <option value=''>-нет-</option>
                         {this.props.listOrg.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                            })
                        }
                     </select>
                </label>
                <br />
                <label>
                    Руководитель:
                    {/* <select value={this.state.idHeadorg} onChange={this.handleSelectChange}> */}
                    <select value={this.state.empl.idHeadempl===null ? '' : this.state.empl.idHeadempl} onChange={this.handleSelectHeadEmplChange}>
                        <option value=''>-нет-</option>
                        {this.props.listEmpl.map(item => {
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

