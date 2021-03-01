import React, { useEffect } from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import {styles} from './styles';
import {constStrings} from '../../localization/index';
import SearchBottonComponent from '../../components/searchButtonComponent/index';
import ButtonWithName from '../../components/buttonWithName/index';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors} from '../../services/config/config';
import { useDispatch, useSelector } from 'react-redux';
import { setRateOthersSagaActionCreator } from './saga/actions';
import { setInputActionCreator, setSearchTriggerChange, setNameAndToken } from './redux/actions';
import { IsUserExist } from './logicForRateOthers/logic';
import {ROUTES} from '../../services/routes';
import { useNavigation } from '@react-navigation/native';
import { getSearchTextFromRateOthers, getSearchTriggerFromRateOthers,
    getServerDataForVote } from '../../modules/saga/selectors';

const RateOthersScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const data = useSelector(getServerDataForVote);
    const searchText = useSelector(getSearchTextFromRateOthers);
    const searchTrigger = useSelector(getSearchTriggerFromRateOthers);

    useEffect(() => {
        dispatch(setRateOthersSagaActionCreator());
    }, []);

    const convertingText = (text) => {
        dispatch(setInputActionCreator(text));
        dispatch(setSearchTriggerChange(false));
    };

    const sendData = (data) => {
        dispatch(setNameAndToken(data));
    };

    const search = async() => {
        Keyboard.dismiss();
        dispatch(setSearchTriggerChange(true));
    };

    const buttonWithNamePressing = (item) => {
        dispatch(setNameAndToken(item));
        navigation.navigate(ROUTES.RateOthersInDetailScreen);
    };

    const array = data?.voteData;

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
            <Text style={styles.listOfUsersText}>
                {constStrings.listOfNotRated}
            </Text>

            <View style={styles.viewOfTextInputAndSVG}>
                <TextInput style={styles.textInputStyle}
                    placeholder={constStrings.chooseName}
                    placeholderTextColor={colors.sherpaBlueWithOpacity}
                    onChangeText={(text) => convertingText(text)}
                    value={searchText}
                />
                <SearchBottonComponent searchStyleProps = {styles.searchPosition} loupeStyle={styles.loupeSize}
                    onPress={() => search(searchText)}/>
            </View>

            <View style={styles.lineStyle}/>

            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContentContainer}>

                {UsersList}

            </ScrollView>

            <View style={styles.allUsersButtonView}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(ROUTES.AllUsersScreen);
                }}>
                    <Text style={styles.allUsersText}>
                        {constStrings.allUsers}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default RateOthersScreen;