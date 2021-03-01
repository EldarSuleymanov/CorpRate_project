import React, { useState, useEffect } from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from './styles';
import { getBirthDate } from '../../views/authenticationScreens/registrationScreen/redux/actions';
import { setCommentDate } from '../../views/myRatingScreen/redux/actions';
import { setCommentDateForOthers } from '../../views/rateOtherInDetailScreen/redux/actions';
import { useDispatch } from 'react-redux';

const DataPickerComponent = ({initialState, loupe, dataPickerButtonStyleProps, dataPickerTextStyleProps,
    dataPickerViewStyle, minimumDate}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [chosenDate, setDate] = useState(new Date().toString());
    const [isDefaultText, setTrigger] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getBirthDate(changeFormatForRequest(chosenDate)));
    }, [chosenDate]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(moment(date).format('DD/MM/YYYY'));
        setTrigger(false);
        dispatch(setCommentDate(moment(date).format('ddd D MMM yyyy')));
        dispatch(setCommentDateForOthers(moment(date).format('ddd D MMM yyyy')));
        hideDatePicker();
    };

    const changeFormatForRequest = dateFormat => {
        const year = dateFormat.substring(dateFormat.lastIndexOf('/') + 1);
        const month = dateFormat.substring(dateFormat.indexOf('/') + 1, dateFormat.lastIndexOf('/'));
        const day = dateFormat.substring(0, dateFormat.indexOf('/'));
        const dateToSend = `${year}-${month}-${day}`;

        return dateToSend;
    };

    const ternar = isDefaultText ? initialState : chosenDate;

    return (
        <View style={StyleSheet.flatten([styles.dataPickerView, dataPickerViewStyle])}>

            <TouchableOpacity style={StyleSheet.flatten([styles.dataPickerButton, dataPickerButtonStyleProps])} onPress={showDatePicker}>
                <Text style={StyleSheet.flatten([styles.dataPickerText, dataPickerTextStyleProps])}>{ternar}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={new Date()}
                minimumDate={minimumDate}
            />
            {loupe}
        </View>
    );
};

export default DataPickerComponent;
