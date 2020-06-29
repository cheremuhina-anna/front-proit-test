import { apiOrg } from "."

class OrgService {
    getListOrg = () => {
        return apiOrg.get('/create')
    };

    getPageListOrg = (offset, limit) => {
        return apiOrg.get('/',{
            params: {
                offset: offset,
                limit: limit
            }});
    };

    getTree = () => {
        return apiOrg.get('/tree')
    };

    postOrg = (data) => {
        return apiOrg.post('/create', data)
    };

    putOrg = (data) => {
        return apiOrg.put('/update', data)
    };

    deleteOrg = (id) => {
        return apiOrg.delete(`/${id}`)
    };
}

export default new OrgService();