import React, {useState} from 'react';
import { View } from 'react-native';
import {styles} from './styles';
import DropDownComponent from '../../components/dropDownComponent';
import MainButton from '../../components/signAppButtonComponent';
import { constStrings } from '../../localization';
import BackButton from '../../components/backButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUrlFirstPart, setChangeServerTrigger,
    setChangeLanguageTrigger, setLanguageName } from './reducer/actions';
import { getLanguageName, getTriggerServer, getUserToken, getSettingsTrigger,
    getTriggerLanguage, getUrlFirstPart, getLocalizationTrigger } from '../../modules/saga/selectors';
import { useNavigation } from '@react-navigation/native';
import {ROUTES} from '../../services/routes';
import { setLocalization, setLoginPassword, setSettingTriggerForBack } from '../authenticationScreens/logInScreen/redux/action';
import { sendEmailAndPassword } from '../authenticationScreens/logInScreen/saga/action';

const SettingsScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const triggerLanguageFromSettingsReducer = useSelector(getTriggerLanguage);
    const triggerServerFromSettingsReducer = useSelector(getTriggerServer);
    const languageNameFromReducer = useSelector(getLanguageName);
    const serverNameFromReducer = useSelector(getUrlFirstPart);
    const localizationTrigger = useSelector(getLocalizationTrigger);
    const userToken = useSelector(getUserToken);
    const settingsTriggerForBack = useSelector(getSettingsTrigger);

    const [lang, setLang] = useState({label: constStrings.language, value: ''});
    const [serv, setServ] = useState({label: constStrings.server, value: ''});
    const [isLanguagePressed, setIsLanguagePressed] = useState(false);
    const [isServerPressed, setIsServerPressed] = useState(false);

    const itemsLanguage = [
        { label: 'English', value: 'en'},
        { label: 'Русский ', value: 'ru'},
        { label: 'Azərbaycan', value: 'az'},
    ];

    const itemsServer = [
        {label: 'http://185.129.2.58:8997/v1/', value: 'first'},
        {label: 'http://192.168.88.45/v1/', value: 'second'},
    ];

    const changeLanguage = (item) => {
        setLang(item);
        setIsLanguagePressed(true);
        dispatch(setChangeLanguageTrigger(false));
    };

    const changeServer = (item) => {
        setServ(item);
        setIsServerPressed(true);
        dispatch(setChangeServerTrigger(false));
    };

    const onSave = (lang, serv) => {
        dispatch(sendEmailAndPassword());

        setIsServerPressed(false);
        setIsLanguagePressed(false);
        constStrings.setLanguage(lang.value);
        dispatch(setLanguageName(lang.label));
        dispatch(setUrlFirstPart(serv.label));
        navigation.navigate(userToken ? ROUTES.MyRatingScreen : ROUTES.LogInScreen);
        dispatch(setLocalization(!localizationTrigger));
        dispatch(setSettingTriggerForBack(true))
    };

    const dropDownProps = [
        {
            placeholder: triggerLanguageFromSettingsReducer ? constStrings.language : languageNameFromReducer,
            onChangeItem: (item) => changeLanguage(item),
            items: itemsLanguage,
        },
        {
            placeholder: triggerServerFromSettingsReducer ? constStrings.server : serverNameFromReducer,
            onChangeItem: (item) => changeServer(item),
            items: itemsServer,
        },
    ];

    return(
        <View style={styles.container}>
            <View style={styles.backButtonStyle}>
                {settingsTriggerForBack ? <BackButton navigate={() => navigation.navigate(ROUTES.LogInScreen)} /> : <></>}
            </View>
            <View style={styles.inputView}>
                {dropDownProps.map(({placeholder, onChangeItem, items}, index) => (
                    <DropDownComponent
                        key={index}
                        placeholder={placeholder}
                        onChangeItem={onChangeItem}
                        items={items}
                    />
                ))}

            </View>

            <View style={styles.buttonView}>
                <MainButton
                    disabled= {!(isLanguagePressed && isServerPressed)}
                    textOfButton={constStrings.saveSettings}
                    onPress={() => {
                        onSave(lang, serv);
                    }}
                    styleProps={(isLanguagePressed && isServerPressed) ? styles.settingsMainButton : styles.inactiveMainButton}
                />
            </View>

        </View>
    );
};

export default SettingsScreen;

