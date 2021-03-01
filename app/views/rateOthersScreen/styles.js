import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
        alignItems: 'center',
    },
    listOfUsersText: {
        color: colors.white,
        fontFamily: fontFamily.arsenal,
        fontSize: fontSize.informationAboutWorkplaceTextSize,
        textAlign: 'center',
        marginTop: 20,
    },
    lineStyle: {
        width: '86%',
        height: 1,
        backgroundColor: colors.white,
        marginTop: 20,
    },
    allUsersButtonView: {
        width: '32%',
        height: 45,
        backgroundColor: colors.blackcurrant,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '1.9%',
        right: '4%',
        borderRadius: 5,
    },
    allUsersText: {
        color: colors.white,
        fontFamily: fontFamily.robotoBold,
        fontSize: fontSize.buttonWithText,
        textAlign: 'center',
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
        color: colors.sherpaBlue,
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
});