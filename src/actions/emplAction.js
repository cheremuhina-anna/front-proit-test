import EmplService from '../services/emplService'

const Employee = {
    id: '',
    name: '',
    idOrg: '',
    idHeadempl: '',
    nameOrg: '',
    nameHeadempl: ''
  }

export const fetchPageEmplSuccess = (countAndListEmpl) => {
    return {
        type: 'FETCH_PAGE_EMPLOYEES',
        payload: countAndListEmpl
    }
}

export const fetchPageListEmpl = (offset, limit) =>{
    return (dispatch) => {
        EmplService.getPageEmpl(offset, limit)
            .then(response => response.data)
            .then(result => dispatch(fetchPageEmplSuccess(result)))
    }
}

export const fetchTreeEmpl = () =>{
    return (dispatch) =>{
        EmplService.getTree()
            .then(response => response.data)
            .then(result => dispatch(fetchTreeEmplSuccess(result)))
    }
}

export const fetchTreeEmplSuccess = (treeList) => {
    return {
        type: 'FETCH_TREE_EMPLOYEES',
        payload: treeList
    }
}

export const fetchListEmplWithoutSub = (idEmpl, idOrg) =>{
    return (dispatch) => {
        EmplService.getListEmplWithoutSub(idEmpl, idOrg)
            .then(response => response.data)
            .then(result => dispatch(fetchListEmplWithoutSubSuccess(result)))
    }
}

export const fetchListEmplWithoutSubSuccess = (listEmpl) => {
    return {
        type: 'FETCH_LIST_EMPL_WITHOUT_SUB_EMPLS',
        payload: listEmpl
    }
}

// export const fetchListEmplSuccess = (listEmpl) => {
//     return {
//         type: 'FETCH_LIST_EMPLOYEES',
//         payload: listEmpl
//     }
// }
//
// export const fetchListEmpl = () =>{
//     return (dispatch) => {
//         EmplService.getListEmpl()
//         .then(response => response.data)
//         .then(result => dispatch(fetchListEmplSuccess(result)))
//     }
// }

export const createEmpl = (empl) => {
    return {
        type: 'CREATE_EMPLOYEE',
        payload: empl
    }
} 

export const postEmplAPI = (data) => {
    return (dispatch) => {
        EmplService.postEmpl(data)
        .then(response => response.data)
        .then(result => dispatch(createEmpl(result)))
    }
}

export const changeEmpl = (empl) => {
    return {
        type: 'CHANGE_EMPLOYEE',
        payload: empl
    }
}

export const putEmplAPI = (data) => {
    return (dispatch) => {
        EmplService.putEmpl(data)
        .then(response => response.data)
        .then(result => dispatch(changeEmpl(result)))
    }
}

export const selectEmpl = (empl) => {
    return {
        type: 'SELECT_EMPLOYEE',
        payload: empl
    }
}


export const getListEmplOrgSuccess = (listEmplOrg) => {
    return {
        type: 'FETCH_LIST_EMPLOYEES_IN_ORG',
        payload: listEmplOrg
    }
}

export const getListEmplOrg = (idOrg) =>{
    return (dispatch) => {
        EmplService.getListEmplOrg(idOrg)
        .then(response => response.data)
        .then(result => dispatch(getListEmplOrgSuccess(result)))
    }
}

export const deleteEmplAPI = (id, offset, limit) => {
    return(dispatch) => {
        EmplService.deleteEmpl(id)
            .then(response => response.data)
            .then(result => dispatch(deleteEmpl(result, offset, limit)))
    }
}

export const deleteEmpl = (isDelete, offset, limit) => {
    if(isDelete)
        return(dispatch) => {
            dispatch(fetchPageListEmpl(offset, limit))
        }
    else
        alert('Элемент не может быть удален, так как имеет дочерние элементы')
    return {
        type: 'DELETE_EMPLOYEE',
        payload: isDelete
    }
}

export const clearOrg = () => {
    return {
        type: 'CLEAR_ORGANIZATION',
        payload: Employee
    }
}
