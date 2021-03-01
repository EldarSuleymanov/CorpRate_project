import { StyleSheet } from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sherpaBlue,
    },
    innerContainer: {
        alignItems: 'center',
        paddingVertical: 60,
        flexGrow: 1,
    },
    myRateText: {
        fontFamily: fontFamily.robotoBold,
        fontSize: fontSize.statisticsHeaderTextSize,
    },
    innerContainerEmptySpace: {
        flex: 1,
    },
    accordionListWrapper: {
        flex: 4,
        width: '90%',
    },
    starsContainer: {
        flexDirection: 'row',
    },
});