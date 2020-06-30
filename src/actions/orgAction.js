import OrgService from '../services/orgService'

const Organization = {
    id: '',
    name: '',
    idHeadorg: '',
    nameHeadorg: '',
    countEmpl: 0
  }

export const fetchPageOrgSuccess = (countAndListOrg) => {
    return {
        type: 'FETCH_PAGE_ORGANIZATIONS',
        payload: countAndListOrg
    }
}

export const fetchPageListOrg = (offset, limit) =>{
    return (dispatch) => {
        OrgService.getPageListOrg(offset, limit)
            .then(response => response.data)
            .then(result => dispatch(fetchPageOrgSuccess(result)))
    }
}

export const fetchListOrgSuccess = (listOrg) => {
    return {
        type: 'FETCH_LIST_ORGANIZATIONS',
        payload: listOrg
    }
}

export const fetchListOrgWithoutSub = (id_org) =>{
    return (dispatch) => {
        OrgService.getListOrgWithoutSub(id_org)
            .then(response => response.data)
            .then(result => dispatch(fetchListOrgWithoutSubSuccess(result)))
    }
}

export const fetchListOrgWithoutSubSuccess = (listOrg) => {
    return {
        type: 'FETCH_LIST_ORG_WITHOUT_SUB_ORGS',
        payload: listOrg
    }
}

export const fetchListOrg = () =>{
    return (dispatch) => {
        OrgService.getListOrg()
            .then(response => response.data)
            .then(result => dispatch(fetchListOrgSuccess(result)))
    }
}

export const fetchTreeOrg = () =>{
    return (dispatch) =>{
        OrgService.getTree()
            .then(response => response.data)
            .then(result => dispatch(fetchTreeOrgSuccess(result)))
    }
}

export const fetchTreeOrgSuccess = (treeList) => {
    return {
        type: 'FETCH_TREE_ORGANIZATIONS',
        payload: treeList
    }
}

export const fetchFilterList = (filter, list) => {
    alert(filter)
    return(dispatch) => fetchListOrgSuccess(list.filter((item,filter)=>(~item.name.indexOf(filter))))
}

export const createOrg = (org) => {
    return {
        type: 'CREATE_ORGANIZATION',
        payload: org
    }
} 

export const postOrgAPI = (data) => {
    return (dispatch) => {
        OrgService.postOrg(data)
        .then(response => response.data)
        .then(result => dispatch(createOrg(result)))
    }
}

export const changeOrg = (org) => {
    return {
        type: 'CHANGE_ORGANIZATION',
        payload: org
    }
}

export const putOrgAPI = (data) => {
    return (dispatch) => {
        OrgService.putOrg(data)
        .then(response => response.data)
        .then(result => dispatch(changeOrg(result)))
    }
}

export const selectOrg = (org) => {
    return {
        type: 'SELECT_ORGANIZATION',
        payload: org
    }
}

export const deleteOrgAPI = (id, offset, limit) => {
    return(dispatch) => {
        OrgService.deleteOrg(id)
            .then(response => response.data)
            .then(result => dispatch(deleteOrg(result, offset, limit)))
    }
}

export const deleteOrg = (isDelete, offset, limit) => {
    if(isDelete)
        return(dispatch) => {
            dispatch(fetchPageListOrg(offset,limit))
        }
    else
        alert('Элемент не может быть удален, так как имеет дочерние элементы')
    return {
        type: 'DELETE_ORGANIZATION',
        payload: isDelete
    }
}

export const clearOrg = () => {
    return {
        type: 'CLEAR_ORGANIZATION',
        payload: Organization
    }
}
