import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function StaticWhiteStarsComponent(props) {
    return (
        <Svg style={{paddingTop: 38, marginLeft: 3}} width={22} height={19} viewBox="0 0 22 19" fill="none" {...props}>
            <Path
                d="M11 0l2.47 6.91h7.992l-6.466 4.27 2.47 6.91L11 13.82l-6.466 4.27 2.47-6.91L.538 6.91H8.53L11 0z"
                fill="#fff"
            />
        </Svg>
    );
}

export default StaticWhiteStarsComponent;