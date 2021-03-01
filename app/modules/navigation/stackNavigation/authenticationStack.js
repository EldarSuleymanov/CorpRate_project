import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from '../../../views/authenticationScreens/logInScreen';
import SettingsScreen from '../../../views/settingsScreen';
import TabMenuNavigator from '../tabNavigation/tabNavigation';
import RegistrationScreen from '../../../views/authenticationScreens/registrationScreen';
import AllUsersScreen from '../../../views/allUsersScreen';
import RateOthersInDetail from '../../../views/rateOtherInDetailScreen';
import AddReviewScreen from '../../../views/addReviewScreen';
import ChangeInfoScreen from '../../../views/changeInfoScreen';
import { ROUTES } from '../../../services/routes';

const Stack = createStackNavigator();

const Authentication = () => (
    <Stack.Navigator screenOptions ={{headerShown: false, cardStyle: {opacity: 1}}}>
        <Stack.Screen name={ROUTES.SettingsScreen} component={SettingsScreen} />
        <Stack.Screen name={ROUTES.LogInScreen} component={LogInScreen} />
        <Stack.Screen name={ROUTES.RegistrationScreen} component={RegistrationScreen} />
        <Stack.Screen name={ROUTES.MyRatingScreen} component={TabMenuNavigator}/>
        <Stack.Screen name={ROUTES.AllUsersScreen} component={AllUsersScreen} />
        <Stack.Screen name={ROUTES.RateOthersInDetailScreen} component={RateOthersInDetail} />
        <Stack.Screen name={ROUTES.AddReviewScreen} component={AddReviewScreen} />
        <Stack.Screen name={ROUTES.ChangeInfoScreen} component={ChangeInfoScreen}/>
    </Stack.Navigator>
);

export default Authentication;
