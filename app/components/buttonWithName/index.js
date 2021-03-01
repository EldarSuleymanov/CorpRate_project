import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {style} from './styles';

const ButtonWithName = ({textProps, onPress}) => (
    <View style={style.buttonView}>
        <TouchableOpacity onPress={onPress}>
            <Text style={style.buttonText}>
                {textProps}
            </Text>
        </TouchableOpacity>
    </View>
);

export default ButtonWithName;
