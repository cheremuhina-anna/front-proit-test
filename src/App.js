import React from "react";
// import { connect } from 'react-redux'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header"
import HeadBody from "./components/head_body"
import Table from "./containers/smart-table"
import SmartCreate from "./containers/smart-create"
//  import CreateEmpl from "./components/createEmpl"

// import { fetchListOrg } from './actions/orgAction'


//import Create from "./components/create_element"

class App extends React.Component {

  // componentWillMount() {
  //   this.props.fetchData()
  // }

  render() {
    return (
      <div>    
        <Router>
          <Route><Header/></Route>             
          <Route>              
              <Route exact path="/organization"> 
                <HeadBody />
                <Table isOrg={true}/>
                {/* <Table requestAddress='http://localhost:54545/organization' capt='организаций' th1='Название организации' th2='Головная организация' th3='Количество сотрудников' />  */}
              </Route>
              <Route exact path="/employee">
                <HeadBody />
                <Table isOrg={false}/>
                {/* <Table requestAddress='http://localhost:54545/employee' capt='сотрудников' th1='ФИО' th2 = 'Организация' th3 ='Руководитель' /> */}
              </Route>
          </Route>
          <Route path='/organization/create'>
            <SmartCreate isOrg={true} isCreate={true}/>
          </Route>
          <Route path='/organization/update'>
            <SmartCreate isOrg={true} isCreate={false}/>
          </Route>
          <Route path={'/employee/create'}>
            <SmartCreate isOrg={false} isCreate={true}/>
          </Route>
          <Route path={'/employee/update'}>
            <SmartCreate isOrg={false} isCreate={false}/>
          </Route>
      </Router>
      </div>
    );
  }
}

// function matchDispatchToProps(dispatch) {
//   return { fetchData: () => dispatch(fetchListOrg())
//   }
// }

// function mapStateToProps(state){
//   return{
//       orgList: state.organizations
//   }
// }

// export default connect(mapStateToProps, matchDispatchToProps)(App);
export default App;