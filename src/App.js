import React from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/header"
import Body from "./containers/smart-body"
import SmartCreate from "./containers/smart-create"
import TreeView from "./containers/smart-tree";


class App extends React.Component {

  render() {
    return (
      <div>    
        <Router>
          <Route><Header/></Route>             
          <Route>              
              <Route exact path="/organization">
                <Body isOrg={true}/>
              </Route>
              <Route exact path="/employee">
                <Body isOrg={false}/>
              </Route>
          </Route>
          <Route path='/organization/tree'>
            <TreeView isOrg={true}/>
          </Route>
          <Route path='/employee/tree'>
            <TreeView isOrg={false}/>
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

export default App;