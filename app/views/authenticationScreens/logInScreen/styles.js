import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.sherpaBlue,
    },
    text: {
        color: colors.white,
        fontFamily: fontFamily.arsenal,
        fontSize: fontSize.sigInTextSize,
        marginBottom: 20,
        marginTop: 50,
    },
    textInput: {
        backgroundColor: colors.white,
        color: colors.sherpaBlue,
        borderRadius: 100,
        height: 50,
        width: '90%',
        fontSize: fontSize.textInputTextSize,
        marginBottom: 20,
        paddingLeft: 20,
        fontFamily: fontFamily.robotoBold,
    },
    signUpView: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
    },
    signUpText: {
        fontSize: fontSize.firstTimeHere,
        fontFamily: fontFamily.arsenal,
        color: colors.white,
        marginTop: 30,
    },
    svg: {
        alignSelf: 'flex-end',
        padding: 20,
    },
    mainButton: {
        backgroundColor: colors.outrageousOrange,
        marginHorizontal: 0,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15,
    },
    inactiveMainButton: {
        backgroundColor: colors.inactiveButton,
        marginHorizontal: 0,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15,
    },
});