import React, { useEffect } from 'react';
import {View, StatusBar} from 'react-native';
import CommentHolderComponent from '../../components/commentsHoldderComponent/index.js';
import {styles} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import DataPickerComponent from '../../components/dataPicker/index.js';
import SearchBottonComponent from '../../components/searchButtonComponent/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentDate } from './redux/actions.js';
import { startSearch } from './saga/actions.js';
import { getDataForMap } from '../../modules/saga/selectors.js';
import { zeroAdder } from '../../modules/commontFunctions/index.js';
import {colors} from '../../services/config/config';
import { setMyAvg } from '../statisticsScreen/saga/actions';

const MyRatingScreen = () => {
    const dispatch = useDispatch();
    const dataForMap = useSelector(getDataForMap);
    let todayTime = new Date();
    const dd = todayTime.getDate();
    const mm = todayTime.getMonth() + 1;
    const yyyy = todayTime.getFullYear();

    todayTime = `${zeroAdder(dd)}/${zeroAdder(mm)}/${yyyy}`;
    useEffect(() => {
        dispatch(setCommentDate(new Date()));
        dispatch(startSearch());
        dispatch(setMyAvg());
    }, []);

    const search = () => {
        dispatch(startSearch());
    };

    return(
        <View style ={styles.container}>
            <StatusBar backgroundColor={colors.sherpaBlue} barStyle={'light-content'} />
            <DataPickerComponent initialState={todayTime.toString()}
                loupe={<SearchBottonComponent searchStyleProps={styles.searchPosition} loupeStyle={styles.loupeSize}
                    onPress={() => search()}/>}
                dataPickerViewStyle = {styles.dataPickerView}
                dataPickerTextStyleProps ={styles.dataPickerText}
                dataPickerButtonStyleProps = {styles.dataPickerButton}
            />
            <ScrollView>
                {dataForMap?.voteDataByDate?.map((item, index) => (
                    <CommentHolderComponent key={index} rateComment = {item.rate_comment} rateValue = {item.rate_value}/>
                ))}
            </ScrollView>
        </View>
    );
};

export default MyRatingScreen;
