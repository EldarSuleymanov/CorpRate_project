import React from 'react';
import {Text} from 'react-native';
import ButtonWithName from '../../../components/buttonWithName';
import { constStrings } from '../../../localization';
import { styles } from './styles';
import {setNameAndToken} from '../redux/actions';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../services/routes';

export const IsUserExist = ({array, searchText, navigate, sendData}) => {
    const test = array?.filter((item) => (item.full_name.toLowerCase().includes(searchText.toLowerCase())));
    const dispatch = useDispatch();

    if(Array.isArray(test) && test.length) {
        return (
            test.map((item, index) =>
                (<ButtonWithName
                    textProps={item.full_name}
                    key={index}
                    onPress={() => {
                        navigate(ROUTES.RateOthersInDetailScreen);
                        dispatch(setNameAndToken(item));
                        sendData(item);
                    }}
                />))
        );
    }
    return <Text style={styles.text}>{constStrings.noUser}</Text>;

};

export default IsUserExist;