import {StyleSheet} from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
        paddingBottom: 30,
    },

    addReviewPosition: {
        width: '86%',
        alignSelf: 'flex-end',
        marginRight: '7%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: '3%',
    },
    headerSize: {
        fontSize: fontSize.headerSize,

    },
    subHeaderSize: {
        fontSize: fontSize.subHeaderSize,
    },
    headerStyle: {
        paddingTop: 4,
        fontFamily: fontFamily.robotoBold,
        color: colors.white,
        textAlign: 'center',
        letterSpacing: 2,
    },
    searchPosition: {
        backgroundColor: colors.outrageousOrange,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    dataPickerView: {
        marginTop: 28,
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
