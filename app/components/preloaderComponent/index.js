import React from 'react';
import { View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './style';
import { colors } from '../../services/config/config';

export const PreloaderModal = ({ modalVisible }) => (
    <Modal transparent={true} visible={modalVisible}>
        <View style={styles.container}>
            <LottieView style={styles.mainView} colorFilters={[{keypath: 'Shape Layer 2', color: colors.glacier}]}
                source={require('../../assets/lottieAnimation/preloader.json')} autoPlay loop />
        </View>
    </Modal>
);