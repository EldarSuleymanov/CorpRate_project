import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import {colors} from '../../services/config/config';

const DropDownComponent = ({items, defaultValue, placeholder, onChangeItem, disabled }) => (

    <DropDownPicker
        items={items}
        showArrow={true}
        arrowColor={colors.sherpaBlue}
        arrowSize={19}
        defaultValue={defaultValue}
        placeholder={placeholder}
        dropDownMaxHeight={100}
        containerStyle={styles.dropDownContainer}
        style={styles.dropDownPicker}
        itemStyle={styles.dropDownItem}
        labelStyle={styles.dropDownLabel}
        dropDownStyle={styles.dropDown}
        onChangeItem={item => {
            onChangeItem(item);
        }}
        disabled={disabled}
    />
);

export default DropDownComponent;