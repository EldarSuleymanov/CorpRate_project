import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RateOthersScreen from '../../../views/rateOthersScreen';
import { ROUTES } from '../../../services/routes';

const Stack = createStackNavigator();

const ShowUsersStack = () => (
    <Stack.Navigator>
        <Stack.Screen name={ROUTES.RateOthersScreen} component={RateOthersScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
);

export default ShowUsersStack;