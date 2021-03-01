import React from 'react';
import Svg, {Path } from 'react-native-svg';

function HomePageSVGActive(color) {
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
                d="M29.063 25H3.75V1.25C3.75.56 3.33 0 2.812 0H.938C.42 0 0 .56 0 1.25V27.5C0 28.88.84 30 1.875 30h27.188c.518 0 .937-.56.937-1.25v-2.5c0-.69-.42-1.25-.938-1.25zM27.188 2.5H20.27c-1.253 0-1.88 2.02-.994 3.2l1.898 2.532-4.299 5.733-4.299-5.732c-.732-.977-1.92-.977-2.651 0L5.9 13.599c-.366.489-.366 1.28 0 1.768l1.325 1.767c.366.489.96.489 1.326 0l2.699-3.599 4.299 5.732c.732.977 1.92.977 2.651 0l5.625-7.5 1.899 2.531c.886 1.182 2.4.345 2.4-1.325V3.75c.001-.69-.418-1.25-.936-1.25z"
            ></Path>
        </Svg>
    );
}

export default HomePageSVGActive;