import {StyleSheet} from 'react-native';
import {colors} from '../../services/config/config';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
    },
    innerContainer: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    btnsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 24,
    },
    mainButtonRed: {
        width: '45%',
        marginHorizontal: 10,
        backgroundColor: colors.outrageousOrange,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    mainButtonGrey: {
        width: '45%',
        marginHorizontal: 10,
        backgroundColor: colors.gray,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    mainButton: {
        width: '45%',
        marginHorizontal: 10,
        backgroundColor: colors.blackcurrant,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    wrongInputView: {
        borderColor: colors.red,
        borderWidth: 1.5,
        borderRadius: 30,
        marginTop: 18.5,
    },
});