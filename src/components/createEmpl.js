import React from "react";
import "../App.css"

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
                <button className={'btn btn-success'} onClick={() => this.props.handleFormSubmit(this.state.empl)}>Добавить</button>
            )
        else {
            return (
                // <button onClick={() => this.props.handleFormSubmit({id: this.state.id, name: this.state.name, idHeadorg: this.state.idHeadorg})}>Изменить</button>
                <button className={'btn btn-primary'} onClick={() => this.props.handleFormSubmit(this.state.empl)}>Изменить</button>
            )
        }
    }

    render(){
        return (
            <div className={'container'}>
                <div className={'row align-items-center'}>
                    <div className={'col'}></div>
                    <div className={'col border border-primary p-4'}>
            <form className='formContainer'>
                <label for={'inp-empl-create'}>ФИО:</label>
                    <input
                        id={'inp-empl-create'}
                        className={'form-control'}
                        value = {this.state.empl.name}
                        onChange = {this.handleInputChange} />

                <br />
                <label htmlFor={'sel-org-empl'}>Организация:</label>
                    <select id={'sel-org-empl'} className={'form-control'} value={this.state.empl.idOrg===null ? '' : this.state.empl.idOrg} onChange={this.handleSelectOrgChange}>
                        <option value=''>-нет-</option>
                         {this.props.listOrg.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                            })
                        }
                     </select>

                <br />
                <label htmlFor={'sel-head-empl'}></label>
                    Руководитель:
                    {/* <select value={this.state.idHeadorg} onChange={this.handleSelectChange}> */}
                    <select id={'sel-head-empl'} className={'form-control'} value={this.state.empl.idHeadempl===null ? '' : this.state.empl.idHeadempl} onChange={this.handleSelectHeadEmplChange}>
                        <option value=''>-нет-</option>
                        {this.props.listEmpl.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option> 
                            );
                            })
                        }
                     </select>

                <br />
                {this.buttonAction()}
            </form>
                    </div>
                    <div className={'col'}></div>
                </div>
            </div>
        );
    }
}

export default Create

