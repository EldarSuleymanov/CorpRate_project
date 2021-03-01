/*eslint-disable*/
import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { styles } from './styles';
import { Settings } from '../../../assets/svg/settingsSvg';
import {colors} from '../../../services/config/config';
import { constStrings } from '../../../localization';
import MainButton from '../../../components/signAppButtonComponent';
import { setCityData } from '../registrationScreen/saga/actions';
import {setLoginPassword, setSettingTriggerForBack, setUserToken} from './redux/action';
import {sendEmailAndPassword} from './saga/action';
import md5 from 'md5';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { getLocalizationTrigger } from '../../../modules/saga/selectors';
import {ROUTES} from '../../../services/routes'
 
const LogInScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const localizationtrigger = useSelector(getLocalizationTrigger);

    

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('')
    
    useEffect(() => {
        dispatch(setCityData());
    }, [localizationtrigger]);

    useFocusEffect(
        React.useCallback(() => {
          setEmailInput('');
          setPasswordInput('');
          setUserToken('');
        }, [])
    );
        const objectLog = {
            user_email: emailInput,
            password: md5(passwordInput),
            navigation,
        }
        return(
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <StatusBar backgroundColor={colors.sherpaBlue} barStyle={'light-content'} />
                    <TouchableOpacity style={styles.svg}
                    onPress={() => {
                        navigation.navigate(ROUTES.SettingsScreen);
                        dispatch(setSettingTriggerForBack(true))
                    }}>
                    <Settings />
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        {constStrings.signIn}
                    </Text>
                    <TextInput value={emailInput} 
                    onChangeText={(text) => setEmailInput(text)} 
                    placeholder={constStrings.email} 
                    style={styles.textInput} 
                    placeholderTextColor={colors.sherpaBlueWithOpacity}/>
                    <TextInput value={passwordInput} 
                    onChangeText={(text) => setPasswordInput(text)} 
                    secureTextEntry={true} 
                    placeholder={constStrings.password} 
                    style={styles.textInput} 
                    placeholderTextColor={colors.sherpaBlueWithOpacity} />
                        <MainButton
                        styleProps={(emailInput && passwordInput) ? styles.mainButton: styles.inactiveMainButton} 
                        disabled={(!emailInput || !passwordInput || (!emailInput && !passwordInput)) ? true : false}
                        textOfButton={constStrings.logIn}
                        onPress={() => {
                            dispatch(setLoginPassword(objectLog));
                            dispatch(sendEmailAndPassword());
                            dispatch(setSettingTriggerForBack(false));
                        }}/>
                    <Text style={styles.signUpText}>
                        {constStrings.firstTimeHere}
                    </Text>
                    <MainButton
                        styleProps={styles.mainButton}
                        textOfButton={constStrings.registration}
                        onPress={() => {
                            navigation.navigate(ROUTES.RegistrationScreen);
                        }}/>
                 </KeyboardAvoidingView>
        );
    }





    export default LogInScreen;
