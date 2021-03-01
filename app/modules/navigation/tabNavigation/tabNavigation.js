import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import MyRatingScreen from '../../../views/myRatingScreen';
import ShowUsersStack from '../stackNavigation/showUsersStack';
import StatisticsScreen from '../../../views/statisticsScreen';
import ProfileSVGActive from '../../../assets/svg/MyProfileSvgActive';
import HomePageSVGActive from '../../../assets/svg/HomePageSvgActive';
import RateOthersSVGActive from '../../../assets/svg/RateOthersActive';
import StatisticsPageSVGActive from '../../../assets/svg/StatisticsPageSvgActive';
import styles from './styles';
import {colors} from '../../../services/config/config';
import UpdateInfoStack from '../stackNavigation/updateInfoStack';
import { ROUTES } from '../../../services/routes';

const TabMenu = createMaterialTopTabNavigator();

const TabMenuNavigator = () => (
    <TabMenu.Navigator
        initialRouteName={ROUTES.MyRatingScreen}
        sceneContainerStyle={{flex: 1, backgroundColor: 'transparent'}}
        tabBarOptions={{
            style: styles.tabBarStyle,
            indicatorStyle: styles.indicatorStyles,
        }}
    >

        <TabMenu.Screen name={ROUTES.ProfileScreen}
            component={UpdateInfoStack}
            options={{tabBarLabel: ({ focused }) => (focused ? ProfileSVGActive(colors.white) : ProfileSVGActive(colors.blackcurrant))}}/>
        <TabMenu.Screen name={ROUTES.MyRatingScreen}
            component={MyRatingScreen}
            options={{tabBarLabel: ({ focused }) => (focused ? HomePageSVGActive(colors.white) : HomePageSVGActive(colors.blackcurrant))}}/>
        <TabMenu.Screen name={ROUTES.RateOthersScreen}
            component={ShowUsersStack}
            options={{tabBarLabel: ({ focused }) => (focused ? RateOthersSVGActive(colors.white) : RateOthersSVGActive(colors.blackcurrant))}}/>
        <TabMenu.Screen name={ROUTES.StatisticsScreen}
            component={StatisticsScreen}
            options={{tabBarLabel: ({ focused }) => (focused ? StatisticsPageSVGActive(colors.white) : StatisticsPageSVGActive(colors.blackcurrant))}}/>
    </TabMenu.Navigator>
);

export default TabMenuNavigator;