import {StyleSheet} from 'react-native';
import { colors, fontSize } from '../../../services/config/config';

export const styles = StyleSheet.create({
    text: {
        backgroundColor: colors.white,
        borderRadius: 30,
        height: 50,
        width: '86%',
        fontSize: fontSize.addReviewText,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 20,
    },
});