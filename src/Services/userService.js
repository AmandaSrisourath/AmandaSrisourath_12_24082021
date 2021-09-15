import apiService from "./apiService";

/**
 * Make api call to get user data with appropriate userId
 * @param userId
 * @returns {*}
 */

function getUserData (userId) {
    return apiService.get(userId).then(response => {
        return response;
    })
}

/**
 * Make api call to get user activity with appropriate userId and path
 * @param userId
 * @returns {*}
 */

function getUserActivity (userId) {
    return apiService.get(`${userId}/activity`).then(response => {
        return response;
    })
}

/**
 * Make api call to get user average sessions with appropriate userId and path
 * @param userId
 * @returns {*}
 */

function getUserAverageSessions (userId) {
    return apiService.get(`${userId}/average-sessions`).then(response => {
        return response;
    })
}

/**
 * Make api call to get user performance with appropriate userId and path
 * @param userId
 * @returns {*}
 */

function getUserPerformance (userId) {
    return apiService.get(`${userId}/performance`).then(response => {
        return response;
    })
}

export default {getUserData, getUserActivity, getUserAverageSessions, getUserPerformance};