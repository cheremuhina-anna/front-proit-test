import {apiEmpl} from "."

class EmplService {
    // getListEmpl = () => {
    //     return apiEmpl.get()
    // };

    getPageEmpl = (offset, limit) => {
        return apiEmpl.get( '/', {
            params: {
                offset: offset,
                limit: limit
            }});
    };

    getTree = () => {
        return apiEmpl.get('/tree')
    }

    getListEmplOrg = (idOrg) => {
        return apiEmpl.get('/create', {
            params: {
                id_org: idOrg
            }})
    }

    postEmpl = (data) => {
        return apiEmpl.post('/create', data)
    }

    putEmpl = (data) => {
        return apiEmpl.put('/update', data)
    }

    deleteEmpl = (id) => {
        return apiEmpl.delete(`/${id}`)
    }
}

export default new EmplService();