const Organization = {
  id: '',
  name: '',
  idHeadorg: '',
  nameHeadorg: '',
  countEmpl: 0
}

export function organizations(state = [], action) {
    switch (action.type) {
      case 'FETCH_LIST_ORGANIZATIONS':
        return action.payload
      default:
        return state
    }
  }

export function org(state = Organization, action) {
  switch (action.type) {
    case 'SELECT_ORGANIZATION':
      return action.payload
    case 'CREATE_ORGANIZATION':
      return action.payload
    case 'CHANGE_ORGANIZATION':
      return action.payload
    case 'CLEAR_ORGANIZATION':
      return action.payload
    default: 
      return state
  }
}

export function isActionOrganization(state = false, action) {
  switch(action.type) {
    case 'DELETE_ORGANIZATION':
      return action.payload
    default: 
      return state
  }
}