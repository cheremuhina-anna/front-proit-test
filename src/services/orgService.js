import { apiOrg } from "."

class OrgService {
    getListOrg = () => {
        return apiOrg.get()
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