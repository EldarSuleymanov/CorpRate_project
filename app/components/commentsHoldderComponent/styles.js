import {StyleSheet} from 'react-native';
import { colors, fontSize, fontFamily } from '../../services/config/config';

export const stylesHolder = StyleSheet.create({
    commentContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: colors.white,
        opacity: 0.5,
        borderRadius: 24,
    },
    commentText: {
        color: colors.white,
        fontSize: fontSize.textOfComments,
        fontFamily: fontFamily.arsenal,
        marginLeft: 15,
        marginRight: 15,
    },
    text: {
        color: colors.white,
        fontSize: fontSize.textOfComments,
        fontFamily: fontFamily.robotoMedium,
        marginBottom: 5,
        marginTop: 5,
    },
    componentContainer: {
        height: 150,
        width: '87%',
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center',
    },
    componentHolderView: {
        flexDirection:'row',
        marginTop:2
    },
    mappedArrayHolderView:{
        flexDirection:'row'
    },
});
