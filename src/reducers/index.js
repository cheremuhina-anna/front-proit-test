import {combineReducers} from 'redux'
// import OrgReducer from './organization'
// import EmplReducer from './employee'

import { pageOrganizations, treeOrganizations, organizations, org, isActionOrganization } from './organization'
import { pageEmployees, employees, empl, isActionEmployee } from './employee'

export default combineReducers({
    pageOrganizations,
    treeOrganizations,
    organizations,
    org,
    isActionOrganization,
    pageEmployees,
    employees,
    empl,
    isActionEmployee
})
