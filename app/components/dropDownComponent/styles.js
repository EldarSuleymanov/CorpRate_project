import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const styles = StyleSheet.create({
    dropDownPicker: {
        backgroundColor: colors.white,
        borderTopStartRadius: 50,
        borderBottomStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
    },
    dropDownContainer: {
        height: 50,
        width: '90%',
        marginTop: 20,
    },
    dropDownLabel: {
        color: colors.darkCyan,
        fontSize: fontSize.dropDownLabelSize,
        fontFamily: fontFamily.robotoBold,
        fontWeight: '900',
    },
    dropDown: {
        backgroundColor: colors.lightYellow,
        width: '90%',
        alignSelf: 'center',
    },
    dropDownItem: {
        justifyContent: 'flex-start',
    },
});