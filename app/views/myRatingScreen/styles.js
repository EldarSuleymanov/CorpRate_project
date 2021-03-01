import {StyleSheet} from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
        paddingBottom: 30,
    },

    searchPosition: {
        backgroundColor: colors.outrageousOrange,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    dataPickerView: {
        marginTop: 56,
        marginBottom: 42,
        borderRadius: 30,
        height: 36,
        backgroundColor: colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '87%',
        alignItems: 'center',
        alignSelf: 'center',

    },
    dataPickerText: {
        textAlign: 'center',
        fontSize: fontSize.datePickerTextSize,
        fontFamily: fontFamily.robotoBold,
        color: colors.sherpaBlue,
        width: '100%',
    },
    dataPickerButton: {
        flex: 1,
    },
    loupeSize: {
        width: 46,
        height: 36,
    },
});
