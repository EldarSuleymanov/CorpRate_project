import {StyleSheet} from 'react-native';
import {colors, fontSize, fontFamily} from '../../services/config/config';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginTop: 20,
    },
    card: {
        marginVertical: 20,
    },
    accordionListHeaderText: {
        color: colors.darkCyan,
        flex: 0.90,
        fontFamily: fontFamily.robotoBold,
        fontSize: fontSize.statisticsHeaderTextSize,
    },
    accordionListHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    body: {
        fontSize: fontSize.statisticsListTextSize,
        color: colors.blackcurrant,
        fontFamily: fontFamily.poppinstItalic,
        paddingLeft: 20,
        lineHeight: 40,
    },
    subCategoriesList: {
        marginTop: 20,
    },
    listBodyOpen: {
        flex: 1,
        backgroundColor: colors.glacier,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    listBodyClose: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
});