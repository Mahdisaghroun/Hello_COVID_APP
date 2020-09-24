import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Text,
  TSpan,
} from "react-native-svg"
import { TouchableOpacity, StyleSheet } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WhatIsCovid(props) {
  return (
    <TouchableOpacity>
    <Svg width={114} height={135} viewBox="0 0 114 135" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.917}
          y1={0.048}
          x2={0.067}
          y2={0.981}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#820470" />
          <Stop offset={1} stopColor="#db7ee5" />
          <Stop offset={1} stopColor="#410238" />
        </LinearGradient>
      </Defs>
      <G data-name="What is covid">
       
          <G
            data-name="Rectangle 1"
            transform="translate(10 9)"
            stroke="#820470"
            fill="url(#prefix__b)"
          >
            <Rect width={84} height={105} rx={14} stroke="none" />
            <Rect
              x={0.5}
              y={0.5}
              width={83}
              height={104}
              rx={13.5}
              fill="none"
            />
          </G>
        </G>
        <Text
        
          data-name="What is COVID-19"
          transform="translate(52 58)"
          fill="#fff"
          fontSize={16}
          fontFamily="Lato-Regular"
        >
          <TSpan x={-28.496} y={0}>
            {"What is "}
          </TSpan>
          <TSpan x={-35.105} y={21}>
            {"COVID-19"}
          </TSpan>
        </Text>
   
    </Svg>
    </TouchableOpacity>
  )
}

export default WhatIsCovid;

