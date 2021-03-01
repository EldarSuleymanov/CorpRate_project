import React, {useEffect, useState} from 'react';
import { Text, ScrollView, View} from 'react-native';
import {constStrings} from '../../../localization';
import DataPickerComponent from '../../../components/dataPicker';
import { styles } from './styles';
import AuthorizationTextInput from '../../../components/authorizationTextInput';
import DropDownComponent from '../../../components/dropDownComponent';
import MainButton from '../../../components/signAppButtonComponent';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectedCountry, getCities, selectedCity, selectedBranch, selectedGender,
    selectedDepartment, selectedPosition, setUserData } from './redux/actions';
import md5 from 'md5';
import { filerPasswordMethod, filterData, filterNameMethod } from './logicForRegistration/logic';
import { setCityData, registerUser } from './saga/actions';
import { useNavigation } from '@react-navigation/native';
import { getBirthday,
    getBranchList,
    getCityList,
    getCountryList,
    getData,
    getDepartmentList,
    getGenderList,
    getPositionList,
    getSelectedCountry,
    getSelectedGenderId,
    getSelectedPositionId } from '../../../modules/saga/selectors';
import Toast from 'react-native-simple-toast';
import {ROUTES} from '../../../services/routes';
import { PreloaderModal } from '../../../components/preloaderComponent';

const RegistrationScreen = () => {

    const {navigate} = useNavigation();
    const [countryIsDisabled, setCountryIsDisabled] = useState(false);
    const [cityIsDisabled, setCityIsDisabled] = useState(true);
    const [branchIsDisabled, setBranchIsDisabled] = useState(true);
    const [departmentIsDisabled, setDepartmentIsDisabled] = useState(true);
    const [positionIsDisabled, setPositionIsDisabled] = useState(true);

    const [genderValue, setGender] = useState('');
    const [countryValue, setCountry] = useState('');
    const [cityValue, setCity] = useState('');
    const [branchValue, setBranch] = useState('');
    const [departmentValue, setDepartment] = useState('');
    const [positionValue, setPosition] = useState('');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [isRightPassword, setRightPassword] = useState(true);
    const [isNameCorrect, setRightName] = useState(true);
    const [notReadyToSignUp, setReady] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();

    const countryList = useSelector(getCountryList, shallowEqual);
    const cityList = useSelector(getCityList, shallowEqual);
    const genderList = useSelector(getGenderList, shallowEqual);
    const branchList = useSelector(getBranchList, shallowEqual);
    const departmentList = useSelector(getDepartmentList, shallowEqual);
    const positionList = useSelector(getPositionList, shallowEqual);
    const data = useSelector(getData, shallowEqual);
    const chosenCountry = useSelector(getSelectedCountry, shallowEqual);
    const selectedGenderId = useSelector(getSelectedGenderId, shallowEqual);
    const selectedPositionId = useSelector(getSelectedPositionId, shallowEqual);
    const birthday = useSelector(getBirthday, shallowEqual);

    const userData = {
        full_name: fullName,
        user_email: email,
        password: userPassword,
        gender_id: selectedGenderId,
        birthday,
        position_id: selectedPositionId,
    };

    useEffect(() => {
        setModalVisible(true);
        const timer = setTimeout(() => {
            setModalVisible(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [genderList, cityList, branchList, departmentList, positionList]);

    useEffect(() => {
        dispatch(getCities(filterData(data, chosenCountry)));
    }, [countryValue, cityValue]);

    useEffect(() => {
        dispatch(setCityData());
    }, [cityValue, branchValue, departmentValue]);

    useEffect(() => {
        dispatch(setUserData(userData));
    }, [genderValue, positionValue, notReadyToSignUp, email, fullName, userPassword, birthday]);

    useEffect(() => {
        clickForRegister();
    }, [userData.full_name, userData.gender_id, userData.password, userData.user_email,
        userData.position_id, userData.birthday, isRightPassword, isNameCorrect]);

    const clickForRegister = () => {
        if (userData.full_name && userData.gender_id !== undefined && userData.password && userData.user_email &&
            userData.position_id !== undefined && userData.birthday !== '--' && isRightPassword !== false && isNameCorrect !== false) {
            setReady(true);
        }
    };

    const showToastPassword = () => {
        isRightPassword ? '' : Toast.show('Password must be longer than 8 characters and include one upper case and one lower case letter', 8000);
    };

    const showToastName = () => {
        isNameCorrect ? '' : Toast.show('Please write correct name', 8000);
    };

    const onEndEditingName = () => {
        filterNameMethod(fullName);
        setRightName(filterNameMethod(fullName));
        setFullName(fullName);
    };

    const onEndEditingPassword = () => {
        filerPasswordMethod(userPassword);
        setRightPassword(filerPasswordMethod(userPassword));
        filerPasswordMethod(userPassword);
        setPassword(md5(userPassword));
    };

    const dropDownChangeGender = (item) => {
        setGender(item.value);
        dispatch(selectedGender(item));
    };

    const dropDownChangeCountry = (item) => {
        setCountry(item.value);
        dispatch(selectedCountry(item));
        setCityIsDisabled(false);
        setCountryIsDisabled(true);
    };

    const dropDownChangeCity = (item) => {
        setCity(item.value);
        dispatch(selectedCity(item));
        setBranchIsDisabled(false);
        setCityIsDisabled(true);
    };

    const dropDownChangeBranch = (item) => {
        setBranch(item.value);
        dispatch(selectedBranch(item));
        setDepartmentIsDisabled(false);
        setBranchIsDisabled(true);
    };

    const dropDownChangeDepartment = (item) => {
        setDepartment(item.value);
        dispatch(selectedDepartment(item));
        setPositionIsDisabled(false);
        setDepartmentIsDisabled(true);
    };

    const dropDownChangePosition = (item) => {
        setPosition(item.value);
        dispatch(selectedPosition(item));
    };

    const textInputProps = [
        {
            placeHolderProps: constStrings.fullName,
            onChangeText: text => setFullName(text),
            onSubmitEditing: showToastName,
            onEndEditing: onEndEditingName,
            styleOfView: isNameCorrect ? '' : styles.wrongInputView,
            secureText: false,
        },
        {
            placeHolderProps: constStrings.corporateEmail,
            onChangeText: text => setEmail(text),
            onSubmitEditing: () => {},
            onEndEditing: () => {},
            styleOfView: null,
            secureText: false,
        },
        {
            placeHolderProps: constStrings.password,
            onChangeText: text => setPassword(text),
            onSubmitEditing: showToastPassword,
            onEndEditing: onEndEditingPassword,
            styleOfView: isRightPassword ? '' : styles.wrongInputView,
            secureText: true,
        },
    ];

    const dropDownProps = [
        {
            placeHolder: constStrings.country,
            items: countryList,
            disabled: countryIsDisabled,
            onChangeItem: (item) => dropDownChangeCountry(item),
        },
        {
            placeHolder: constStrings.city,
            items: cityList,
            disabled: cityIsDisabled,
            onChangeItem: (item) => dropDownChangeCity(item),
        },
        {
            placeHolder: constStrings.branch,
            items: branchList,
            disabled: branchIsDisabled,
            onChangeItem: (item) => dropDownChangeBranch(item),
        },
        {
            placeHolder: constStrings.department,
            items: departmentList,
            disabled: departmentIsDisabled,
            onChangeItem: (item) => dropDownChangeDepartment(item),
        },
        {
            placeHolder: constStrings.position,
            items: positionList,
            disabled: positionIsDisabled,
            onChangeItem: (item) => dropDownChangePosition(item),
        },

    ];

    const onPressSignUp = () => {
        dispatch(registerUser());
        setReady(true);
        setTimeout(() => {
            navigate(ROUTES.LogInScreen);
            dispatch(setUserData({
                full_name: '',
                user_email: '',
                password: '',
                gender_id: undefined,
                birthday: '--',
                position_id: undefined,
            }));
        }, 1500);
    };

    return(
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
        >
            <PreloaderModal modalVisible= {modalVisible}/>
            {textInputProps.map(({placeHolderProps, onChangeText, onSubmitEditing, onEndEditing, styleOfView, secureText}, index) => (
                <AuthorizationTextInput
                    key={index}
                    placeHolderProps={placeHolderProps}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    onEndEditing={onEndEditing}
                    styleOfView={styleOfView}
                    secureText={secureText}
                />
            ))}
            <DataPickerComponent
                initialState={constStrings.dateOfBirth}
                dataPickerViewStyle={styles.dataPickerView}
                dataPickerTextStyleProps ={styles.dataPickerText}
                dataPickerButtonStyleProps = {styles.dataPickerButton}
                minimumDate = {new Date(1950, 0, 1)}
            />
            <DropDownComponent
                placeholder={constStrings.gender}
                onChangeItem={(item) => dropDownChangeGender(item)}
                items={genderList}
            />
            <Text style={styles.informationAboutWorkplaceText}>
                {constStrings.infoAboutWork}
            </Text>
            {dropDownProps.map(({placeHolder, items, onChangeItem, disabled}, index) => (
                <DropDownComponent
                    key={index}
                    placeholder={placeHolder}
                    items={items}
                    onChangeItem={onChangeItem}
                    disabled={disabled}
                />))}

            <View style={styles.wrapperBtns}>
                <MainButton
                    styleProps={
                        notReadyToSignUp && isRightPassword && isNameCorrect
                            ? styles.mainButtonRed
                            : styles.mainButtonGrey
                    }
                    textOfButton={constStrings.signUp}
                    onPress={onPressSignUp}
                    disabled = {!notReadyToSignUp}
                />
                <MainButton
                    styleProps={styles.mainButton}
                    textOfButton={constStrings.cancel}
                    onPress={() => navigate(ROUTES.LogInScreen)}
                />
            </View>
        </ScrollView>
    );
};

export default RegistrationScreen;