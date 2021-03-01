import {StyleSheet } from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const styles = StyleSheet.create({
    addReviewPosition: {
        marginTop: 5,
    },
    textStyle: {
        color: colors.outrageousOrange,
        fontSize: fontSize.addReviewText,
        fontFamily: fontFamily.robotoBold,
    },
});
