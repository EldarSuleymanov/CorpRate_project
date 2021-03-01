import React from 'react';
import Svg, {Path } from 'react-native-svg';

function ProfileSVGActive(color) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
        >
            <Path
                fill={color}
                d="M15 16.875a8.44 8.44 0 008.438-8.438A8.44 8.44 0 0015 0a8.44 8.44 0 00-8.438 8.438A8.44 8.44 0 0015 16.874zm7.5 1.875h-3.229a10.21 10.21 0 01-4.271.938 10.23 10.23 0 01-4.271-.938H7.5a7.5 7.5 0 00-7.5 7.5v.938A2.813 2.813 0 002.813 30h24.375A2.813 2.813 0 0030 27.187v-.937a7.5 7.5 0 00-7.5-7.5z"
            ></Path>
        </Svg>
    );
}

export default ProfileSVGActive;