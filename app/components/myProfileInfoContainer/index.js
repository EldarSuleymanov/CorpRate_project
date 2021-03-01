import React from 'react';
import { View, Text } from 'react-native';
import { style } from './style';

const MyProfileInfoContainer = ({ text }) => (
    <View style={style.infoContainer}>
        <Text style={style.infoText}>
            {text}
        </Text>
    </View>
);

export default MyProfileInfoContainer;