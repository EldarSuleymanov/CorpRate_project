import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../services/config/config';

export const style = StyleSheet.create({
    buttonView: {
        borderRadius: 30,
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 11,
        paddingVertical: 6,
        width: '80%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: fontSize.rateOtherButtonTextSize,
        textAlign: 'center',
        color: colors.darkCyan,
        fontFamily: fontFamily.robotoBold,
    },
});
