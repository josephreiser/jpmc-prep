import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/clients";

class UserService {

    getUsers(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/all', { 
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }    
        });
    }


    createUser(user){
        return axios.post(EMPLOYEE_API_BASE_URL + "/add", {}, { params: {
            name: user.name,
            email: user.email,
            net_worth: user.net_worth,
        }});
    }

    getUserById(userId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + userId);
    }

    updateUser(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new UserService()