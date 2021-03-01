import React from 'react';
import {Text} from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonWithName from '../../../components/buttonWithName';
import { constStrings } from '../../../localization';
import { ROUTES } from '../../../services/routes';
import { setNameAndToken } from '../../rateOthersScreen/redux/actions';
import { styles } from './styles';

export const IsUserExist = ({array, searchText, navigate, sendData }) => {
    const test = array?.filter((item) => (item.full_name.toLowerCase().includes(searchText.toLowerCase())));
    const dispatch = useDispatch();

    if(Array.isArray(test) && test.length) {
        return (
            test.map((item, index) =>
                (<ButtonWithName textProps={item.full_name} key={index} onPress={() => {
                    navigate(ROUTES.RateOthersInDetailScreen);
                    dispatch(setNameAndToken(item));
                    sendData(item);
                }}/>))
        );
    }
    return <Text style={styles.text}>{constStrings.noUser}</Text>;

};