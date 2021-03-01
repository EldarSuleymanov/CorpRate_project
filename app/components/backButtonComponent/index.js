import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Back } from '../../assets/svg/backSvg.js';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';

const BackButton = ({onPress, navigate}) => {
    const navigation = useNavigation();

    return(
        <View style={styles.backButtonPosition}>
            <TouchableOpacity
                onPress = {navigate}
                onPressIn={onPress}
            >
                <Back />
            </TouchableOpacity>

        </View>
    );
};

export default BackButton;