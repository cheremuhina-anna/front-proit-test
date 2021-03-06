import React from "react";
import { useHistory } from "react-router-dom"

function UseButtonUpdate({
                           select = () => {},
                           element
                         })
{
  let history = useHistory();


  function handleClick() {
    select(element)
    let url = `${window.location.pathname}/update`
    history.push(url);
  }

  return(
      <button type="button" className={'btn btn-primary'} onClick={handleClick}>Изменить</button>
  );
}

function ButtonDelete({
                        id, offset, limit, countEmpl,
                        deleteElement = () => {},
                        isDel
                      }){

  function handleClick() {
      var canDelete = true;
     if (countEmpl !== null)
         if (countEmpl > 0)
            canDelete = window.confirm("В организации работают сотрудники. При удалении организации, сотрудники также будут удалены. " +
         "Вы действительно хотите удалить выбранную организацию?");
     if (canDelete) deleteElement(id, offset, limit)
  }

  return(
      <button type="button" className={'btn btn-danger'} onClick={handleClick}>Удалить</button>
  );
}


class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({filter: event.target.value});
  }

  handleSearchClick = () => {
    this.props.fetchFilterList(this.state.filter, this.props.list)
  }

  render() {
    return (
        <div>
          {/* <label>
          Фильтр:
          <input
            value = {this.state.filter}
            onChange = {this.handleInputChange} />
        </label>
        <button onClick={this.handleSearchClick}>Найти</button>
        <br /> */}
          <table class="table table-hover text-center" border="1">
            <caption>Список {this.props.thList.capt}</caption>
            <thead class="thead-light">
            <tr>
              {/*<th>№</th>*/}
              <th scope="col">{this.props.thList.th1}</th>
              <th scope="col">{this.props.thList.th2}</th>
              <th scope="col">{this.props.thList.th3}</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {this.props.list.map(item => {
              return (
                  <tr key={item.id}>
                    {/*<td>0</td>*/}
                    <td>{item.name}</td>
                    <td>{'nameHeadorg' in item? item.nameHeadorg : item.nameOrg}</td>
                    <td>{'countEmpl' in item? item.countEmpl: item.nameHeadempl}</td>
                    <td>
                        <div className={'btn-group'}>
                      <UseButtonUpdate select = {this.props.select} element={item}/>
                      <ButtonDelete id = {item.id} offset={this.props.offset} limit={this.props.limit} countEmpl = {'countEmpl' in item? item.countEmpl: null}  deleteElement = {this.props.delete} isDel = {this.props.isDelete}/>
                        </div>
                    </td>
                  </tr>
              );})
            }
            </tbody>
          </table>
        </div>
    );
  }
}

export default Table;