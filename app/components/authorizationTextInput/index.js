import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../services/config/config';

const AuthorizationTextInput = ({ placeHolderProps, defaultProp, onEndEditing, secureText, onChangeText, styleOfView, styleOfTextInput , onSubmitEditing}) => (
    <View style={[styles.textInputView, styleOfView]}>
        <TextInput
            style={[styles.textInput, styleOfTextInput]}
            placeholder={placeHolderProps}
            placeholderTextColor={colors.sherpaBlueWithOpacity}
            defaultValue={defaultProp}
            secureTextEntry={secureText}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            onSubmitEditing={onSubmitEditing}
        />
    </View>
);

export default AuthorizationTextInput;