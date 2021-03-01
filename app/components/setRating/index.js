import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Star from '../../assets/svg/StarSvg';
import { styles } from './style';
import { colors } from '../../services/config/config';
import { useDispatch } from 'react-redux';
import { setRating } from '../../views/addReviewScreen/redux/actions';

export const SetRating = ({width, height}) => {

    const dispatch = useDispatch();

    const [selectedStars, setSelected] = useState(0,
        index => this.setState({ selectedStars: index}));
    const stars = [1, 2, 3, 4, 5];

    useEffect(() => {
        dispatch(setRating(selectedStars));
    }, [selectedStars]);
    return(
        <View style={styles.starsContainer}>
            {
                stars.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelected(index + 1)}
                        style={styles.starTouch}
                    >
                        {selectedStars < item
                            ? <Star color={colors.gray} width = {width} height = {height}/>
                            : <Star color={colors.yellow} width = {width} height = {height}/>}
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};
