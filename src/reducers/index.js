import {combineReducers} from 'redux'
// import OrgReducer from './organization'
// import EmplReducer from './employee'

import { pageOrganizations, treeOrganizations, organizations, org, isActionOrganization } from './organization'
import { pageEmployees, treeEmployees, employees, empl, isActionEmployee } from './employee'

export default combineReducers({
    pageOrganizations,
    treeOrganizations,
    organizations,
    org,
    isActionOrganization,
    pageEmployees,
    treeEmployees,
    employees,
    empl,
    isActionEmployee
})
