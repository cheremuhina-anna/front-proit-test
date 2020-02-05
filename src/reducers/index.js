import {combineReducers} from 'redux'
// import OrgReducer from './organization'
// import EmplReducer from './employee'

import { organizations, org, isActionOrganization } from './organization'
import { employees, empl, isActionEmployee } from './employee'

export default combineReducers({
    organizations,
    org,
    isActionOrganization,
    employees,
    empl,
    isActionEmployee
})
