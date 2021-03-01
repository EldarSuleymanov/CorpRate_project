import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const styles = StyleSheet.create({
    textInputView: {
        borderRadius: 30,
        backgroundColor: colors.white,
        marginTop: 20,
        width: '90%',
        paddingHorizontal: 10,
    },
    textInput: {
        fontSize: fontSize.sizeOfAutorizationText,
        color: colors.darkCyan,
        fontFamily: fontFamily.robotoBold,
    },
});