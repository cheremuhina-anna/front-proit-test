import {apiEmpl} from "."

class EmplService {

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

    getListEmplWithoutSub = (id_empl, id_org) => {
        return apiEmpl.get('/update', {
            params: {
                id_empl: id_empl,
                id_org: id_org
            }
        });
    };

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
        alert(data.id+" "+data.name+" "+data.idOrg+" "+data.idHeadempl)
        return apiEmpl.put('/update', data)
    }

    deleteEmpl = (id) => {
        return apiEmpl.delete(`/${id}`)
    }
}

export default new EmplService();