import { apiClient, mockClient } from "../Clients";

const client = apiClient;

/**
 * Make api call to get user data with appropriate userId
 * @param userId
 * @returns {*}
 */
function getUserData (userId) {
    return client.getUserData(userId);
}

/**
 * Make api call to get user activity with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserActivity (userId) {
    return client.getUserActivity(userId);
}

/**
 * Make api call to get user average sessions with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserAverageSessions (userId) {
    return client.getUserAverageSessions(userId);
}

/**
 * Make api call to get user performance with appropriate userId and path
 * @param userId
 * @returns {*}
 */
function getUserPerformance (userId) {
    return client.getUserPerformance(userId);
}

export default { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance };