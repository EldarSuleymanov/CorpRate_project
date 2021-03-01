import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';
import Logo from '../../assets/svg/logo';
import style from './style';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.animatedValueLogo = new Animated.Value(0);
    }
    componentDidMount() {
        this.animate();
    }
    animate () {
        Animated.timing(
            this.animatedValueLogo,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.cubic,
                useNativeDriver: true,
            },
        ).start();
    }
    render() {
        const opacity = this.animatedValueLogo.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        return (
            <View style={style.ViewStyle}>
                <Animated.View style={{opacity}}>
                    <Logo/>
                </Animated.View>
            </View>
        );
    }
}

