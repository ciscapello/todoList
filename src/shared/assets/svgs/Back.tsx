import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBack = (props: SvgProps) => (
  <Svg
    // width={30}
    // height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.74 10.5H5.203l7.595-8.385L10.869 0 0 12l10.87 12 1.915-2.115L5.204 13.5h16.535v-3Z"
      fill="#222F3E"
    />
  </Svg>
);
export default SvgBack;
