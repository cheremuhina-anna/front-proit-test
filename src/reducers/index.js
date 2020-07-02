import {combineReducers} from 'redux'
// import OrgReducer from './organization'
// import EmplReducer from './employee'

import { pageOrganizations, treeOrganizations, organizations, org, isActionOrganization, orgFilter } from './organization'
import { pageEmployees, treeEmployees, employees, empl, isActionEmployee, emplFilter } from './employee'

export default combineReducers({
    pageOrganizations,
    treeOrganizations,
    organizations,
    org,
    isActionOrganization,
    orgFilter,
    pageEmployees,
    treeEmployees,
    employees,
    empl,
    isActionEmployee,
    emplFilter
})
