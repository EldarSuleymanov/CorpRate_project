import { StyleSheet } from 'react-native';
import { colors } from '../../services/config/config';
import { fontSize, fontFamily } from '../../services/config/config';

export const style = StyleSheet.create({
    infoContainer: {
        backgroundColor: colors.white,
        borderRadius: 50,
        paddingHorizontal: 11,
        paddingVertical: 10,
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    infoText: {
        color: colors.darkCyan,
        fontSize: fontSize.myProfileInfoText,
        fontFamily: fontFamily.robotoBold,
        flex: 1,
        fontWeight: '200',
    },
    editBtn: {
        alignSelf: 'center',
    },
});