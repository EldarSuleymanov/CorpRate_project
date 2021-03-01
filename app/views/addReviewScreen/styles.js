import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../services/config/config';

export const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
    },
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },
    textareaContainer: {
        height: '100%',
        padding: 5,
        backgroundColor: colors.whiteWithOpacity,
        borderRadius: 15,
    },
    textarea: {
        padding: 10,
        fontSize: fontSize.addReviewTextAreaTextSize,
        color: colors.white,
        fontFamily: fontFamily.arsenal,
    },
    viewNameStyle: {
        flex: 0.20,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontSize: fontSize.addReviewUserNameTextSize,
        color: colors.white,
        fontFamily: fontFamily.robotoBold,
    },
    viewForTextArea: {
        flex: 0.60,
    },
    activeButton: {
        alignSelf: 'center',
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: colors.outrageousOrange,
    },
    inactiveButton: {
        alignSelf: 'center',
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: colors.inactiveButton,
    },
});
