const Employee = {
    id: '',
    name: '',
    idOrg: '',
    idHeadempl: '',
    nameOrg: '',
    nameHeadempl: ''
};

const Page = {
    countEmpls: 0,
    listOnPage: []
}

export function pageEmployees(state = Page, action) {
    switch (action.type) {
        case 'FETCH_PAGE_EMPLOYEES':
            return action.payload
        default:
            return state
    }
}

export function treeEmployees(state=[], action) {
    switch (action.type) {
        case 'FETCH_TREE_EMPLOYEES':
            return action.payload;
        default:
            return state
    }
}

export function employees(state = [], action) {
    switch (action.type) {
        // case 'FETCH_LIST_EMPLOYEES':
        //   return action.payload
        case 'FETCH_LIST_EMPLOYEES_IN_ORG':
            return action.payload
        default:
            return state
    }
}

export function empl(state = Employee, action) {
    switch (action.type) {
        case 'SELECT_EMPLOYEE':
            return action.payload
        case 'CREATE_EMPLOYEE':
            return action.payload
        case 'CHANGE_EMPLOYEE':
            return action.payload
        case 'CLEAR_EMPLOYEE':
            return action.payload
        default:
            return state
    }
}

export function isActionEmployee(state = false, action) {
    switch(action.type) {
        case 'DELETE_EMPLOYEE':
            return action.payload
        default:
            return state
    }
}