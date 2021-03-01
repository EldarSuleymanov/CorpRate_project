import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Star = ({ color , width , height , margin}) => (
    <Svg
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        enableBackground="new 0 0 512 512"
        width = {width}
        height = {height}
        style={{
            marginHorizontal:margin
        }}
    >
        <Path
            fill={color}
            d="M512 197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z" />
    </Svg>
);

export default Star;