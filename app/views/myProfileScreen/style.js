import { StyleSheet } from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
        paddingBottom: 10,
    },
    innerContainer: {
        flex: 0.8,
        padding: 30,
        alignItems: 'center',
    },
    mainButtonRed: {
        width: '49%',
        backgroundColor: colors.outrageousOrange,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    mainButton: {
        width: '49%',
        backgroundColor: colors.blackcurrant,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    myProfileButtons: {
        fontSize: fontSize.myProfileButtonsSize,
        color: colors.white,
        fontFamily: fontFamily.arsenal,
        textAlign: 'center',
    },
    buttonsView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
});
