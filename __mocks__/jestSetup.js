/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react';
import { NativeModules as RNNativeModules, View } from 'react-native';
import FastImage from 'react-native-fast-image';
// import * from '../app/services/utils/soundsUtils'
RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
    State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
    forceTouchAvailable: false,
};
jest.mock('react-navigation', () => ({
    NavigationEvents: 'mockNavigationEvents',
    SafeAreaView: () => <View></View>,
}));
jest.mock(
    'react-native-safe-area-view',
    () =>
        class MockSafeAreaView extends React.Component {
            render() {
                const { children } = this.props;

                return React.createElement('SafeAreaView', this.props, children);
            }
        },
);
jest.mock('react-native-localize', () => ({
    getTimeZone: () => 'Europe/Paris',
}));

jest.mock('react-native-sound', () => {
    let _filename = require(null);
    let _basePath = null;

    const SoundMocked = (filename, basePath) => {
        _filename = require(filename);
        _basePath = basePath;
    };

    SoundMocked.prototype.filename = () => _filename;
    SoundMocked.prototype.basePath = () => _basePath;
    SoundMocked.prototype.play = function (onEnd) {};
    SoundMocked.prototype.pause = function (callback) {};
    SoundMocked.prototype.stop = function (callback) {};
    SoundMocked.prototype.reset = function () {};
    SoundMocked.prototype.release = function () {};
    SoundMocked.prototype.getDuration = function () {};

    SoundMocked.LIBRARY = 2;

    return SoundMocked;
});
jest.mock('../app/services/utils/soundsUtils', () => jest.fn());

jest.mock('@react-native-firebase/messaging', () => jest.fn());

jest.mock('react-native-device-info', () => ({ getVersion: jest.fn(), getUniqueId: jest.fn(() => 'test'), getBuildNumber: jest.fn(() => '1.5') }));

jest.mock('react-native-permissions', () => jest.fn());

jest.mock('victory-native', () => jest.fn());

jest.mock('react-native-fast-image', () => ({
    ...FastImage,
    preload: () => {},
}));
