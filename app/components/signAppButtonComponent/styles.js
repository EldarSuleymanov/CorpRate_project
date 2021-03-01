import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const mainButtonStyles = StyleSheet.create({
    mainButton: {
        width: '80%',
    },
    mainButtonText: {
        fontSize: fontSize.mainButtonTetxSize,
        color: colors.white,
        fontFamily: fontFamily.arsenal,
        textAlign: 'center',
    },
});
