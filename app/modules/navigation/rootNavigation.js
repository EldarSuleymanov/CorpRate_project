import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Authentication from './stackNavigation/authenticationStack';

const RootNavigation = () => (
    <NavigationContainer>
        <Authentication/>
    </NavigationContainer>
);

export default RootNavigation;
