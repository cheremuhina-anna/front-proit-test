const Organization = {
  id: '',
  name: '',
  idHeadorg: '',
  nameHeadorg: '',
  countEmpl: 0
}

const Page = {
  countOrgs: 0,
  listOnPage: []
}

export function pageOrganizations(state=Page, action) {
  switch (action.type) {
    case 'FETCH_PAGE_ORGANIZATIONS':
      return action.payload
    default:
      return state
  }
}

export function treeOrganizations(state=[], action) {
  switch (action.type) {
    case 'FETCH_TREE_ORGANIZATIONS':
      return action.payload;
    default:
      return state
  }
}

export function organizations(state = [], action) {
  switch (action.type) {
    case 'FETCH_LIST_ORGANIZATIONS':
      return action.payload;
    default:
      return state
  }
}

export function org(state = Organization, action) {
  switch (action.type) {
    case 'SELECT_ORGANIZATION':
      return action.payload;
    case 'CREATE_ORGANIZATION':
      return action.payload;
    case 'CHANGE_ORGANIZATION':
      return action.payload;
    case 'CLEAR_ORGANIZATION':
      return action.payload;
    default:
      return state
  }
}

export function isActionOrganization(state = false, action) {
  switch(action.type) {
    case 'DELETE_ORGANIZATION':
      return action.payload;
    default:
      return state
  }
}