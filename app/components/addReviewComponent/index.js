import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {constStrings} from '../../localization';
import {styles} from './styles';

const AddReviewButtonComponent = ({addReviewStyleProps, onPress}) => (
    <TouchableOpacity
        style={StyleSheet.flatten([styles.addReviewPosition, addReviewStyleProps])}
        onPress={onPress}
    >
        <Text style ={styles.textStyle}> + {constStrings.addReview}</Text>
    </TouchableOpacity>
);

export default AddReviewButtonComponent;
