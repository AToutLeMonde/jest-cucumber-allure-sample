import axios from 'axios'


const apiResetPassword = login => {
    
  return axios.post('http://localhost:8080/reset/', { login: login }).then((response)=>response.data)  
        
}

export default apiResetPassword;