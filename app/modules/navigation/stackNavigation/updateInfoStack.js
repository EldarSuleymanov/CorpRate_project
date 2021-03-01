import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyProfileScreen from '../../../views/myProfileScreen';
import { ROUTES } from '../../../services/routes';

const Stack = createStackNavigator();

const UpdateInfoStack = () => (
    <Stack.Navigator>
        <Stack.Screen name={ROUTES.ProfileScreen} component={MyProfileScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
);

export default UpdateInfoStack;