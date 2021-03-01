import {StyleSheet } from 'react-native';
import {colors} from '../../services/config/config';

const styles = StyleSheet.create({
    dataPickerView: {
        width: '90%',
        height: 50,
        marginTop: 20,
    },
    dataPickerContainer: {
        backgroundColor: colors.white,
        width: 50,
    },
    dataPickerText: {
        textAlign: 'left',
        width: '50%',
    },

});

export default styles;
