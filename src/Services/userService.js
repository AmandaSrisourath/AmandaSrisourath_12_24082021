import { client } from "../apiClient";

const prefix = "/user";

/**
 * Make api call to get user data with appropriate userId
 * @param userId
 * @returns {*}
 */
function getUserData (userId) {
    return client.get(`${prefix}/${userId}`).then(response => {
        return response.data.data;
    })
}

/**
 * Make api call to get user activity with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserActivity (userId) {
    return client.get(`${prefix}/${userId}/activity`).then(response => {
        return response.data.data;
    })
}

/**
 * Make api call to get user average sessions with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserAverageSessions (userId) {
    return client.get(`${prefix}/${userId}/average-sessions`).then(response => {
        return response.data.data;
    })
}

/**
 * Make api call to get user performance with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserPerformance (userId) {
    return client.get(`${prefix}/${userId}/performance`).then(response => {
        return response.data.data;
    })
}

export default { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance };