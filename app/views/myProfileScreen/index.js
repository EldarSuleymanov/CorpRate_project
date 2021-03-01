import React from 'react';
import { View, Text } from 'react-native';
import { style } from './style';
import MyProfileInfoContainer from '../../components/myProfileInfoContainer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MainButton from '../../components/signAppButtonComponent';
import { constStrings } from '../../localization';
import { useNavigation, CommonActions, useFocusEffect } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getCountryText, getCityText,
    getFullName, getDeptText, getPositionText,
    getUserBirthday, getGenderText, getBranchText, getUserEmail, getUrlFirstPart, getCityId, getBranchId, getSelectedDept, getDeptAndPos, getDepartment} from '../../modules/saga/selectors';
import { setDeptPos } from './saga/actions';
import {setLoginPassword, setUserToken} from '../authenticationScreens/logInScreen/redux/action';
import {ROUTES} from '../../services/routes';
import {requestStringsSecondPart } from '../../services/utils/utils';

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const fullName = useSelector(getFullName);
    const deptText = useSelector(getDeptText);
    const positionText = useSelector(getPositionText);
    const birthday = useSelector(getUserBirthday);
    const genderText = useSelector(getGenderText);
    const branchText = useSelector(getBranchText);
    const userEmail = useSelector(getUserEmail);
    const countryText = useSelector(getCountryText);
    const cityText = useSelector(getCityText);

    const objectLog = {
        user_email: '',
        password: '',
        navigation,
    };

    return(
        <ScrollView style={style.container}>
            <View style={style.innerContainer}>
                <MyProfileInfoContainer text={fullName}/>
                <MyProfileInfoContainer text={birthday}/>
                <MyProfileInfoContainer text={genderText}/>
                <MyProfileInfoContainer text={userEmail}/>
                <MyProfileInfoContainer text={countryText}/>
                <MyProfileInfoContainer text={cityText}/>
                <MyProfileInfoContainer text={branchText}/>
                <MyProfileInfoContainer text={deptText}/>
                <MyProfileInfoContainer text={positionText}/>
                <View style={style.buttonsView}>
                    <MainButton
                        textStyleProps ={style.myProfileButtons}
                        styleProps={style.mainButtonRed}
                        textOfButton={constStrings.updateInfo}
                        onPress={() => {
                            dispatch(setDeptPos());
                            navigation.navigate(ROUTES.ChangeInfoScreen);
                        }}/>

                    <MainButton
                        textStyleProps ={style.myProfileButtons}
                        styleProps={style.mainButton}
                        textOfButton={constStrings.signOut}
                        onPress={() => {
                            dispatch(setLoginPassword(objectLog));
                            dispatch(setUserToken(''));
                            navigation.navigate(ROUTES.LogInScreen);
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [
                                        { name: ROUTES.MyRatingScreen },
                                        { name: ROUTES.ProfileScreen},
                                        { name: ROUTES.RateOthersScreen},
                                        { name: ROUTES.StatisticsScreen},
                                    ],
                                }),
                            );
                        }}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default MyProfileScreen;