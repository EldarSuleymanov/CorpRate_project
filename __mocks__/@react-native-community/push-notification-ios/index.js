/**
 * @format
 */
/* eslint-env jest */

const IOSNotification = {
    NativeEventEmitter: jest.fn(),
    NativeModules: jest.fn(),
    removeListeners: jest.fn(),
    setApplicationIconBadgeNumber: jest.fn(),
    removeAllDeliveredNotifications: jest.fn(),
};

module.exports = IOSNotification;