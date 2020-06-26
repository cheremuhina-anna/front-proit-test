import { apiOrg } from "."

class OrgService {
    getCountAndListOrg = () => {
        return apiOrg.get()
    };

    getPageListOrg = (page, limit) => {
        return apiOrg.get('/',{
            params: {
                page: page,
                limit: limit
            }});
    };

    postOrg = (data) => {
        return apiOrg.post('/create', data)
    }

    putOrg = (data) => {
        return apiOrg.put('/update', data)
    }

    deleteOrg = (id) => {
        return apiOrg.delete(`/${id}`)
    }
}

export default new OrgService();