import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AddReviewButtonComponent from '../../components/addReviewComponent';
import BackButton from '../../components/backButtonComponent';
import CommentHolderComponent from '../../components/commentsHoldderComponent';
import DataPickerComponent from '../../components/dataPicker';
import SearchButtonComponent from '../../components/searchButtonComponent';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getDataForOthers, ratingAndCommentForToday, getRatingAndCommentByDate,
    getIsAllUser } from '../../modules/saga/selectors';
import { ratingAndComment, ratingAndCommentByDate } from './saga/actions';
import moment from 'moment';
import { setCommentDateForOthers } from './redux/actions';
import {ROUTES} from '../../services/routes';

const RateOthersInDetail = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isAllUser = useSelector(getIsAllUser);
    let userInfo;
    const rateAndComment = useSelector(ratingAndCommentForToday);
    const rateAndCommentByDate = useSelector(getRatingAndCommentByDate);
    const currentDate = moment(new Date()).format('ddd D MMM yyyy');

    if (isAllUser === false) {
        userInfo = useSelector(getDataForOthers);
    } else {
        userInfo = useSelector(state => state.reducerForAllUsers.allOtherUserInfo);
    }

    const [isSearch, setSearch] = useState(false);

    useEffect(() => {
        dispatch(ratingAndComment());
    }, []);

    return(
        <View style ={styles.container}>
            <View>
                <BackButton  navigate={() => navigation.navigate(ROUTES.AllUsersScreen)} />
            </View>
            <Text style ={[styles.headerSize, styles.headerStyle]}>{userInfo.full_name}</Text>
            <Text style ={[styles.subHeaderSize, styles.headerStyle]}>{userInfo.position_text}</Text>

            {
                isAllUser ? <></>
                    : <AddReviewButtonComponent
                        addReviewStyleProps = {styles.addReviewPosition}
                        onPress = {() => {
                            navigation.navigate(ROUTES.AddReviewScreen);
                        }}
                    />
            }

            <DataPickerComponent
                initialState={currentDate}
                loupe = {
                    <SearchButtonComponent
                        searchStyleProps={styles.searchPosition}
                        loupeStyle={styles.loupeSize}
                        onPress={() => {
                            dispatch(ratingAndCommentByDate());
                            setSearch(true);
                            dispatch(setCommentDateForOthers(currentDate));
                        }}
                    />
                }
                dataPickerViewStyle = {styles.dataPickerView}
                dataPickerTextStyleProps ={styles.dataPickerText}
                dataPickerButtonStyleProps = {styles.dataPickerButton}
            />

            {
                isAllUser
                    ? <ScrollView>
                        {isSearch ? rateAndCommentByDate?.voteDataByDate?.map((item, index) => (
                            <CommentHolderComponent key={index} rateComment = {item.rate_comment} rateValue = {item.rate_value}/>
                        ))
                            : rateAndComment?.voteDataToday?.map((item, index) => (
                                <CommentHolderComponent key={index} rateComment = {item.rate_comment} rateValue = {item.rate_value}/>
                            ))}
                    </ScrollView>
                    : <ScrollView>
                        {isSearch ? rateAndCommentByDate?.voteDataByDate?.map((item, index) => (
                            <CommentHolderComponent key={index} rateComment = {item.rate_comment} rateValue = {item.rate_value}/>
                        ))
                            : rateAndComment?.voteDataToday?.map((item, index) => (
                                <CommentHolderComponent key={index} rateComment = {item.rate_comment} rateValue = {item.rate_value}/>
                            ))}
                    </ScrollView>

            }

        </View>
    );
};

export default RateOthersInDetail;
