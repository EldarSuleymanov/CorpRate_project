import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../../services/config/config';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    informationAboutWorkplaceText: {
        color: colors.white,
        fontFamily: fontFamily.arsenal,
        fontSize: fontSize.informationAboutWorkplaceTextSize,
        textAlign: 'center',
        marginTop: 20,
    },
    dataPickerView: {
        marginTop: 20,
        borderRadius: 30,
        height: 50,
        backgroundColor: colors.white,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    dataPickerText: {
        textAlign: 'left',
        fontSize: fontSize.datePickerTextSize,
        fontFamily: fontFamily.robotoBold,
        color: colors.darkCyan,
        marginLeft: 10,
    },
    wrapperBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    dataPickerButton: {
        flex: 1,
    },
    mainButtonRed: {
        width: '40%',
        marginHorizontal: 10,
        backgroundColor: colors.outrageousOrange,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    mainButtonGrey: {
        width: '40%',
        marginHorizontal: 10,
        backgroundColor: colors.gray,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    mainButton: {
        width: '40%',
        marginHorizontal: 10,
        backgroundColor: colors.blackcurrant,
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
    },
    wrongInputView: {
        borderColor:colors.red,
        borderWidth:1.5,
        borderRadius:30,
        marginTop:18.5
    },
});
