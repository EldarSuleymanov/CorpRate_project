import {StyleSheet} from 'react-native';
import {colors} from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
    },
    svg: {
        flex: 0.1,
        alignItems: 'flex-start',
        padding: 20,
    },
    inputView: {
        flex: 0.6,
        alignItems: 'center',
    },
    buttonView: {
        flex: 0.3,
        alignItems: 'center',
    },
    backButtonStyle: {
        left: '4%',
        top: '3%',
        width: 30,
        paddingBottom: 200,
    },
    settingsMainButton: {
        width: '40%',
        backgroundColor: colors.outrageousOrange,
        marginHorizontal: 0,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15,
    },

    inactiveMainButton: {
        width: '40%',
        backgroundColor: colors.inactiveButton,
        marginHorizontal: 0,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15,
    },
});