import React, { useEffect } from 'react';
import RootNavigation from './modules/navigation/rootNavigation';
import { constStrings } from './localization';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from '../app/views/splashScreen/SplashScreen';
import { runWatcher } from '../app/views/splashScreen/saga/actions';
import {getUserToken, splashEnd} from './modules/saga/selectors';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { colors } from './services/config/config';

const App = () => {
    const dispatch = useDispatch();
    const splash = useSelector(splashEnd);
    const userToken = useSelector(getUserToken);

    useEffect(() => {
        dispatch(runWatcher());
        constStrings.getInterfaceLanguage();
    }, []);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: colors.sherpaBlue}}>
                {(splash && userToken === '') ? <SplashScreen/> : <RootNavigation/>}
            </SafeAreaView></KeyboardAvoidingView>
    );
};

export default App;