import Axios from 'axios';

export const apiOrg = Axios.create({
    baseURL: 'http://localhost:54545/organization',
});

export const apiEmpl = Axios.create({
    baseURL: 'http://localhost:54545/employee',
});
