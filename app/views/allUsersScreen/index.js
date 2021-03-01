import React, { useEffect } from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import {styles} from './styles';
import {constStrings} from '../../localization/index';
import { ScrollView } from 'react-native-gesture-handler';
import { colors} from '../../services/config/config';
import { useDispatch, useSelector } from 'react-redux';
import {ROUTES} from '../../services/routes';
import { useNavigation } from '@react-navigation/native';
import { getAllUsersDataForMap, getAllUsersSearchText, getAllUsersSearchTrigger } from '../../modules/saga/selectors';
import { setAllUsersSagaActionCreator } from './saga/actions';
import { setAllUserNameAndToken, setAllUsersInputActionCreator, setAllUsersSearchTriggerChange, setIsAllUser } from './redux/actions';
import ButtonWithName from '../../components/buttonWithName';
import SearchBottonComponent from '../../components/searchButtonComponent';
import BackButton from '../../components/backButtonComponent';
import { IsUserExist } from './logicForAllUsers/logic';

const AllUsersScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const data = useSelector(getAllUsersDataForMap);
    const searchText = useSelector(getAllUsersSearchText);
    const searchTrigger = useSelector(getAllUsersSearchTrigger);

    useEffect(() => {
        dispatch(setAllUsersSagaActionCreator());
        dispatch(setIsAllUser(true));
    }, []);

    const convertingText = (text) => {
        dispatch(setAllUsersInputActionCreator(text));
        dispatch(setAllUsersSearchTriggerChange(false));
    };

    const sendData = (data) => {
        dispatch(setAllUserNameAndToken(data));
    };

    const search = async() => {
        Keyboard.dismiss();
        dispatch(setAllUsersSearchTriggerChange(true));
    };

    const buttonWithNamePressing = (item) => {
        dispatch(setAllUserNameAndToken(item));
        navigation.navigate(ROUTES.RateOthersInDetailScreen);
    };

    const array = data?.allUserData;

    const UsersList =
    (
        (searchTrigger == false) ? (array?.map((item, index) =>
            (<ButtonWithName
                textProps={item.full_name}
                key={index}
                onPress={() => {
                    buttonWithNamePressing(item);
                }}
            />)))
            : <IsUserExist
                array={array}
                searchText={searchText}
                navigate={navigation.navigate}
                sendData={sendData}
            />
    );

    return(
        <View style={styles.mainView}>
            <View style={styles.headerStyle}>
                <View style={styles.backButtonStyle}>
                    <BackButton 
                        onPress={() => dispatch(setIsAllUser(false))} 
                        navigate={() => navigation.navigate(ROUTES.RateOthersScreen)}
                    />
                </View>
                <Text style={styles.allUsersText}>
                    {constStrings.allUsers}
                </Text>
            </View>

            <View style={styles.viewOfTextInputAndSVG}>
                <TextInput style={styles.textInputStyle}
                    placeholder={constStrings.chooseName}
                    placeholderTextColor={colors.sherpaBlueWithOpacity}
                    onChangeText={(text) => convertingText(text)}
                    value={searchText}/>
                <SearchBottonComponent searchStyleProps={styles.searchPosition} loupeStyle={styles.loupeSize}
                    onPress={() => search(searchText)}/>
            </View>

            <View style={styles.lineStyle}/>

            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContentContainer}>

                {UsersList}

            </ScrollView>

        </View>
    );
};

export default AllUsersScreen;