import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "../Assets/data";

const mockClient = {
    getUserData: (userId) => {
        const userData = USER_MAIN_DATA.find(userData => userData.id == userId);
        return mockClient.resolvePromise(userData);
    },
    getUserActivity: (userId) => {
        const userActivity = USER_ACTIVITY.find(userActivity => userActivity.userId == userId);
        return mockClient.resolvePromise(userActivity);
    },
    getUserAverageSessions: (userId) => {
        const userAvgSessions = USER_AVERAGE_SESSIONS.find(userAverageSessions => userAverageSessions.userId == userId);
        return mockClient.resolvePromise(userAvgSessions);
    },
    getUserPerformance: (userId) => {
        const userPerf = USER_PERFORMANCE.find(userPerformance => userPerformance.userId == userId);
        return mockClient.resolvePromise(userPerf);
    },
    resolvePromise: (data) => new Promise((resolve) => resolve(data))
}

export { mockClient };