import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
        alignItems: 'center',
    },
    lineStyle: {
        width: '85%',
        height: 1,
        backgroundColor: colors.white,
        marginTop: 20,
    },
    allUsersText: {
        color: colors.white,
        fontFamily: fontFamily.robotoBold,
        fontSize: fontSize.buttonWithText,
    },
    scrollViewStyle: {
        width: '100%',
        marginTop: 10,
    },
    scrollViewContentContainer: {
        alignItems: 'center',
        paddingBottom: 60,
    },
    textInputStyle: {
        flex: 1,
        fontSize: fontSize.textInputTextSize,
        color: colors.darkCyan,
        fontFamily: fontFamily.robotoBold,
    },
    viewOfTextInputAndSVG: {
        borderRadius: 30,
        backgroundColor: colors.white,
        marginTop: 20,
        width: '90%',
        paddingStart: 10,
        flexDirection: 'row',
    },
    searchPosition: {
        backgroundColor: colors.outrageousOrange,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    loupeSize: {
        width: 50,
        height: 50,
    },
    allUsersText: {
        fontSize: 30,
        fontFamily: fontFamily.arsenal,
        color: 'white',
        alignSelf: 'center',
    },
    headerStyle: {
        width: '100%',
    },
});