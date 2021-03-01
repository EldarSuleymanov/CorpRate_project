import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../services/config/config';
import {styles} from './styles';
import {SetRating} from '../../components/setRating/index';
import MainButton from '../../components/signAppButtonComponent/index';
import Textarea from 'react-native-textarea';
import BackButton from '../../components/backButtonComponent';
import { constStrings } from '../../localization';
import { sendVoteAndComment } from './saga/action';
import { setReview, readyToSend } from './redux/actions';
import { setRateOthersSagaActionCreator } from '../rateOthersScreen/saga/actions';
import {ROUTES} from '../../services/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getDataForOthers, getStars } from '../../modules/saga/selectors';

const AddReviewScreen = () => {

    const [todaysComment, setTodaysComment] = useState('');
    const [isReadyToVote, setReadyToVote] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const starsCount = useSelector(getStars);
    const userName = useSelector(getDataForOthers);

    useEffect(() => {
        dispatch(setReview(todaysComment));
        setReadyToVote(!starsCount || !todaysComment);
    }, [todaysComment, starsCount]);

    const combineFunctionForSubmit = () => {
        navigation.navigate(ROUTES.RateOthersScreen);
        dispatch(sendVoteAndComment());
        dispatch(readyToSend(true));
        dispatch(setRateOthersSagaActionCreator());
    };

    return (
        <View style={styles.viewStyle}>
            <View style={styles.backButtonStyle}>
                <BackButton navigate={() => navigation.navigate(ROUTES.RateOthersInDetailScreen)} />
            </View>
            <View style={styles.viewNameStyle}>
                <Text style={styles.userName}>
                    {userName.full_name}
                </Text>
            </View>
            <SetRating
                width="50"
                height="50"
            />
            <View style={styles.viewForTextArea}>
                <View style={styles.container}>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        maxLength={255}
                        placeholder={constStrings.writeComment}
                        placeholderTextColor={colors.fauxDarkSlate}
                        onChangeText={(text) => setTodaysComment(text)}
                    />
                </View>
            </View>
            <MainButton
                styleProps={isReadyToVote ? styles.inactiveButton : styles.activeButton}
                textOfButton = {constStrings.submit}
                disabled={isReadyToVote}
                onPress = {() => combineFunctionForSubmit()}
            />
        </View>
    );
};

export default AddReviewScreen;