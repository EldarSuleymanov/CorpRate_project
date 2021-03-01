import { ScrollView } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import AuthorizationTextInput from '../../components/authorizationTextInput';
import { constStrings } from '../../localization';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment, getDeptText, getFullName, getGenderId,
    getLoginAndPasswordAndNavig, getPosition, getPositionId, getPositionText,
    getUserBirthday, getUserToken } from '../../modules/saga/selectors';
import DropDownComponent from '../../components/dropDownComponent';
import { View } from 'react-native';
import MainButton from '../../components/signAppButtonComponent';
import { sendEmailAndPassword } from '../authenticationScreens/logInScreen/saga/action';
import { setItem, updateInfo } from './saga/actions';
import { selectedDepartment, selectedPos, setUpdateInfo } from './redux/actions';
import { useNavigation } from '@react-navigation/native';
import md5 from 'md5';
import { filterNameMethod, filterPasswordMethod } from './logicForChangeInfo/logic';
import {ROUTES} from '../../services/routes';

const ChangeInfoScreen = () => {
    const dispatch = useDispatch();
    const {navigate} = useNavigation();
    const departmentList = useSelector(getDepartment);
    const positionList = useSelector(getPosition);
    const password = useSelector(getLoginAndPasswordAndNavig);
    const fullName = useSelector(getFullName);
    const deptText = useSelector(getDeptText);
    const positionText = useSelector(getPositionText);
    const userToken = useSelector(getUserToken);
    const genderId = useSelector(getGenderId);
    const positionId = useSelector(getPositionId);
    const userBirthday = useSelector(getUserBirthday);

    const [name, setFullName] = useState(fullName);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState(password.password);
    const [confirmNewPassword, setConfirmNewPassword] = useState(password.password);
    const [departmentIsDisable, setDepartmentIsDisabled] = useState(false);
    const [positionIsDisable, setPositionIsDisabled] = useState(true);
    const [position, setUpdatePosition] = useState(positionId);
    const [departmentValue, setDepartmentItem] = useState(deptText);
    const [positionVal, setPositionItem] = useState(positionText);
    const [deptChanged, setDeptChanged] = useState(false);
    const [infoChanged, setInfoChanged] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [isDisabled, setButtonDisabled] = useState(true);
    const [isRightName, setRightName] = useState(true);
    const [isRightPassword, setRightPassword] = useState(true);
    const objectLog = {
        full_name: name,
        user_token: userToken,
        old_password: oldPassword,
        new_password: newPassword,
        birthday: userBirthday,
        gender_id: genderId,
        position_id: position,
    };

    useEffect(() => {
        if(confirmNewPassword === newPassword && currentPassword !== '') {
            setButtonDisabled(false);
        }
    }, [confirmNewPassword, newPassword]);
    useEffect(() => {
        dispatch(setItem());
    }, [departmentValue, positionVal]);
    useEffect(() => {
        checkButton();
    }, [isRightName, currentPassword, newPassword, passwordChanged]);
    function checkButton() {
        if(currentPassword && infoChanged === true && newPassword === confirmNewPassword && isRightName === true) {
            setButtonDisabled(false);
        } else if(currentPassword && newPassword && confirmNewPassword && newPassword === confirmNewPassword && passwordChanged) {
            setButtonDisabled(false);
        } else if(newPassword !== confirmNewPassword) {
            setButtonDisabled(true);
        }
    }
    function nameInput(name) {
        setFullName(name);
        { if(name !== fullName) {
            filterNameMethod(name);
            setRightName(filterNameMethod(name));
            if(isRightName === true) {
                setInfoChanged(true);
            } else{
                return '';
            }
        } }
    }
    function currentPasswordInput(password) {
        setOldPassword(md5(password));
        setCurrentPassword(password);

    }
    function newPasswordInput(text) {
        if(text !== '') {
            filterPasswordMethod(text);
            setRightPassword(filterPasswordMethod(text));
            if(isRightPassword === true) {
                setNewPassword(text);
            }
        }
        setPasswordChanged(text !== '');
    }
    function saveSettingsButton() {
        if(newPassword !== password.password) {
            const newObj = {
                ...objectLog,
                new_password: md5(objectLog.new_password),
            };

            dispatch(setUpdateInfo(newObj));
        } else{
            dispatch(setUpdateInfo(objectLog));
        }
        dispatch(updateInfo());
        setDepartmentIsDisabled(false);
        setPositionIsDisabled(true);
        dispatch(sendEmailAndPassword());
        navigate(ROUTES.ProfileScreen);
    }
    function cancelButton() {
        setDepartmentIsDisabled(false);
        navigate(ROUTES.ProfileScreen);
        dispatch(sendEmailAndPassword());
    }
    function confirmPassword(text) {
        setConfirmNewPassword(text);
    }
    const arrayAuthorizationTextInputTriple = [
        {
            placeHolderProps: constStrings.currentPassword,
            onChangeText: password => currentPasswordInput(password),
            styleOfView: null,
            secureText: true,
            onEndEditing: () => setPasswordChanged(true),
        },
        {
            placeHolderProps: constStrings.newPassword,
            onChangeText: text => newPasswordInput(text),
            styleOfView: isRightPassword ? '' : styles.wrongInputView,
            secureText: true,
            onEndEditing: () => {},
        },
        {
            placeHolderProps: constStrings.confirmPassword,
            onChangeText: text => confirmPassword(text),
            styleOfView: isRightPassword ? '' : styles.wrongInputView,
            secureText: true,
            onEndEditing: () => {},
        },
    ];
    const dropDownDepartment = (item) => {
        setDepartmentItem(item.value);
        dispatch(selectedDepartment(item));
        dispatch(setItem());
        setPositionIsDisabled(false);
        setDeptChanged(true);
    };
    const dropDownPosition = (item) => {
        setPositionItem(item.value);
        dispatch(selectedPos(item));
        setDepartmentIsDisabled(true);
        setUpdatePosition(item.id);
        dispatch(setItem());
        setInfoChanged(true);
    };
    const dropDownDouble = [
        {
            defaultValue: departmentValue,
            onChangeItem: item => dropDownDepartment(item),
            disabled: departmentIsDisable,
            items: departmentList,
        },
        {
            defaultValue: deptChanged ? null : positionVal,
            onChangeItem: item => dropDownPosition(item),
            disabled: positionIsDisable,
            items: positionList,
        },
    ];

    return(
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.innerContainer}>
            <AuthorizationTextInput
                defaultProp={fullName}
                styleOfTextInput={styles.textInput}
                onChangeText={(name) => {
                    nameInput(name);
                }}
                styleOfView={isRightName ? '' : styles.wrongInputView}
            />
            {dropDownDouble.map(({defaultProp, onChangeItem, disabled, items}, index) => (
                <DropDownComponent
                    key={index}
                    defaultProp={defaultProp}
                    onChangeItem={onChangeItem}
                    disabled={disabled}
                    items={items}
                />
            ))}
            {arrayAuthorizationTextInputTriple.map(({placeHolderProps, onChangeText, styleOfView, secureText, onEndEditing}, index) => (
                <AuthorizationTextInput
                    key={index}
                    placeHolderProps={placeHolderProps}
                    onChangeText={onChangeText}
                    styleOfView={styleOfView}
                    secureText={secureText}
                    onEndEditing={onEndEditing}
                />
            ))}
            <View style={styles.btnsWrapper}>
                <MainButton
                    textOfButton={constStrings.saveSettings}
                    onPress={saveSettingsButton}
                    disabled={isDisabled}
                    styleProps={isDisabled ? styles.mainButtonGrey : styles.mainButtonRed}/>
                <MainButton
                    styleProps={styles.mainButton}
                    textOfButton={constStrings.cancel}
                    onPress={cancelButton}/>
            </View>
        </ScrollView>
    );
};

export default ChangeInfoScreen;