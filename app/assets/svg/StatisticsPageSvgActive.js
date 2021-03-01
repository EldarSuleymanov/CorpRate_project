import React from 'react';
import Svg, {Path } from 'react-native-svg';

function StatisticsPageSVGActive(color) {
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
                d="M23.25 22.5h1.313c.375 0 .75-.5.75-1v-18c0-.5-.375-1-.75-1H23.25c-.375 0-.75.5-.75 1v18c0 .5.375 1 .75 1zM12 22.5h1.313c.374 0 .75-.5.75-1V6c0-.5-.376-1-.75-1H12c-.375 0-.75.5-.75 1v15.5c0 .5.375 1 .75 1zm5.625 0h1.313c.375 0 .75-.5.75-1V11c0-.5-.375-1-.75-1h-1.313c-.375 0-.75.5-.75 1v10.5c0 .5.375 1 .75 1zm11.438 3.75H2.813v-25c0-.69-.42-1.25-.938-1.25H.937C.42 0 0 .56 0 1.25V27.5C0 28.88.84 30 1.875 30h27.188c.518 0 .937-.56.937-1.25V27.5c0-.69-.42-1.25-.938-1.25zM6.375 22.5h1.313c.375 0 .75-.5.75-1V16c0-.5-.376-1-.75-1H6.375c-.375 0-.75.5-.75 1v5.5c0 .5.375 1 .75 1z"
            ></Path>
        </Svg>
    );
}

export default StatisticsPageSVGActive;