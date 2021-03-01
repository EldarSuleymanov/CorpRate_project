import React from 'react';
import {Text, View} from 'react-native';
import LineComponent from '../lineComponent';
import {stylesHolder} from './styles';
import { colors }from '../../services/config/config';
import Star from '../../assets/svg/StarSvg';
import { constStrings } from '../../localization';

const CommentHolderComponent = ({rateComment, rateValue}) => {
    const starsArray = [1, 2, 3, 4, 5];

    return(
        <View style={stylesHolder.componentContainer} >
            <Text style = {stylesHolder.text}>{constStrings.Comment}</Text>
            <View style = {stylesHolder.commentContainer}>
                <Text style = {stylesHolder.commentText}>{rateComment}</Text>
            </View>
            <View style={stylesHolder.componentHolderView}>
                <Text style = {stylesHolder.text}>{constStrings.Ratings}</Text>
                <View style={stylesHolder.mappedArrayHolderView}>
                    {
                        starsArray.map((item, index) => (
                            <View
                                key={index}
                            >
                                {rateValue < item
                                    ? <Star margin={5} color={colors.gray} width = {28} height = {28}/>
                                    : <Star margin={5} color={colors.yellow} width = {28} height = {28}/>}
                            </View>
                        ))
                    }
                </View>
            </View>
            <LineComponent/>
        </View>
    );
};

export default CommentHolderComponent;