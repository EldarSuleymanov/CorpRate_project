import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {mainButtonStyles} from './styles';

const MainButton = ({ onPress, textOfButton, styleProps, disabled, textStyleProps }) => (
    <TouchableOpacity
        style= {StyleSheet.flatten([
            mainButtonStyles.mainButton,
            styleProps,
        ])}
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={StyleSheet.flatten([
            mainButtonStyles.mainButtonText,
            textStyleProps,
        ])}>
            {textOfButton}
        </Text>
    </TouchableOpacity>
);

export default MainButton;