export const setSplashEnd = (splashEnd) => ({
    type: SET_TRUE,
    payload: splashEnd,
});
export const runWatcher = () => ({
    type: SET_START,
});

export const SET_TRUE = 'SET_TRUE';
export const SET_START = 'SET_START';