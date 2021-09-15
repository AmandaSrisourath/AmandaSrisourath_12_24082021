import axios from "axios";

/**
 * Make api call
 * @param endpoint
 * @returns {Promise<AxiosResponse<any>>}
 */

function get (endpoint) {
   return axios.get(`http://localhost:3000/user/${endpoint}`).then(response => {
       return response.data.data;
   })
}

export default {get};