import axios from "axios";

function getUserData (userId) {
    return axios.get(`http://localhost:3000/user/${userId}`).then(response => {
        return response.data.data;
    })
}

function getUserActivity (userId) {
    return axios.get(`http://localhost:3000/user/${userId}/activity`).then(response => {
        return response.data.data;
    })
}

function getUserAverageSessions (userId) {
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`).then(response => {
        return response.data.data;
    })
}

function getUserPerformance (userId) {
    return axios.get(`http://localhost:3000/user/${userId}/performance`).then(response => {
        return response.data.data;
    })
}


export default {getUserData, getUserActivity, getUserAverageSessions, getUserPerformance};