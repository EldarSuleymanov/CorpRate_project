import React from 'react';
import { TouchableOpacity, View, StyleSheet} from 'react-native';
import SearchSVGActive from '../../assets/svg/searchButton.js';
import {styles} from './styles.js';

const SearchBottonComponent = ({searchStyleProps, loupeStyle, onPress}) => (
    <View style={StyleSheet.flatten([styles.searchPosition, searchStyleProps])}>
        <TouchableOpacity onPress={onPress}>
            <SearchSVGActive style={StyleSheet.flatten([styles.loupeSize, loupeStyle])}/>
        </TouchableOpacity>
    </View>
);

export default SearchBottonComponent;