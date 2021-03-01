import {StyleSheet} from 'react-native';
import {colors, fontSize} from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginTop: 20,
        width: '85%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerTextStyle: {
        fontFamily: 'Roboto-Bold',
        fontSize: fontSize.statisticsHeaderTextSize,
    },
});