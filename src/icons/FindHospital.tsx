import * as React from "react"
import { TouchableOpacity } from 'react-native';
import Svg, {

  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Text,
  TSpan,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function  FindHospital(props) {
  return (
    <TouchableOpacity>
    <Svg width={114} height={135} viewBox="0 0 114 135" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.083}
          y1={0.038}
          x2={1}
          y2={1.076}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#3cb8d2" />
          <Stop offset={1} stopColor="#0c056d" />
        </LinearGradient>
      </Defs>
      <G data-name="find hospital">
       
          <G
            data-name="Rectangle 3"
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
          data-name="Helper numbers"
          transform="translate(52 58)"
          fill="#fff"
          fontSize={16}
          fontFamily="SegoeUI, Segoe UI"
        >
          <TSpan x={-17.273} y={0}>
            {"Help"}
          </TSpan>
          <TSpan x={-27.969} y={21}>
            {"numbers"}
          </TSpan>
        </Text>
 
    </Svg>
    </TouchableOpacity>
  )
}

export default FindHospital;
