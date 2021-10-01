import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3000/"
})

const userPrefix = "/user";

const apiClient = {
    getUserData: (userId) => {
        return client.get(`${userPrefix}/${userId}`).then(response => {
            return response.data.data;
        })
    },
    getUserActivity: (userId) => {
        return client.get(`${userPrefix}/${userId}/activity`).then(response => {
            return response.data.data;
        })
    },
    getUserAverageSessions: (userId) => {
        return client.get(`${userPrefix}/${userId}/average-sessions`).then(response => {
            return response.data.data;
        })
    },
    getUserPerformance: (userId) => {
        return client.get(`${userPrefix}/${userId}/performance`).then(response => {
            return response.data.data;
        })
    },
}

export { apiClient };