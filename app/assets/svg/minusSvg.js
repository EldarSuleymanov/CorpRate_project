import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../services/config/config';

export const Minus = ({marginTop}) => (
    <Svg
        width={23}
        height={23}
        fill={colors.sherpaBlue}
        viewBox="0 0 23 23"
        style={{marginTop}}
    >
        <Path
            d="M20.5357 0H2.46429C1.10379 0 0 1.10379 0 2.46429V20.5357C0 21.8962 1.10379 23 2.46429 23H20.5357C21.8962 23 23 21.8962 23 20.5357V2.46429C23 1.10379 21.8962 0 20.5357 0ZM4.72321 13.5536C4.38437 13.5536 4.10714 13.2763 4.10714 12.9375V10.0625C4.10714 9.72366 4.38437 9.44643 4.72321 9.44643H18.2768C18.6156 9.44643 18.8929 9.72366 18.8929 10.0625V12.9375C18.8929 13.2763 18.6156 13.5536 18.2768 13.5536H4.72321Z"
        ></Path>
    </Svg>
);
