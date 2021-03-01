import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { myPersistor, store } from './app/modules/redux/store';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

AppRegistry.registerComponent(appName, () => App);

const entryPoint = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={myPersistor}>
            <App/>
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => entryPoint);