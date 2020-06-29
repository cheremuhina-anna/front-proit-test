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
      <button type="button" onClick={handleClick}>Изменить</button>
  );
}

function ButtonDelete({
                        id, offset, limit,
                        deleteElement = () => {},
                        isDel
                      }){

  function handleClick() {
    deleteElement(id, offset, limit)
    // isDel ? alert('yes') : alert('Выбранный элемент не может быть удален, так как есть дочерние элементы')
  }

  return(
      <button type="button" onClick={handleClick}>Удалить</button>
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
          <table border="1">
            <caption>Список {this.props.thList.capt}</caption>
            <thead>
            <tr>
              <th>№</th>
              <th>{this.props.thList.th1}</th>
              <th>{this.props.thList.th2}</th>
              <th>{this.props.thList.th3}</th>
            </tr>
            </thead>
            <tbody>
            {this.props.list.map(item => {
              return (
                  <tr key={item.id}>
                    <td>0</td>
                    <td>{item.name}</td>
                    <td>{'nameHeadorg' in item? item.nameHeadorg : item.nameOrg}</td>
                    <td>{'countEmpl' in item? item.countEmpl: item.nameHeadempl}</td>
                    <td>
                      <UseButtonUpdate select = {this.props.select} element={item}/>
                      <ButtonDelete id = {item.id} offset={this.props.offset} limit={this.props.limit} deleteElement = {this.props.delete} isDel = {this.props.isDelete}/>
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