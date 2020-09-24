import { TouchableOpacity } from 'react-native';
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
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HowToProtect(props) {
  return (
    <TouchableOpacity>
    <Svg width={114} height={135} viewBox="0 0 114 135" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.893}
          y1={0.067}
          x2={0.083}
          y2={0.895}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ff5695" />
          <Stop offset={1} stopColor="#c28083" />
        </LinearGradient>
      </Defs>
      <G data-name="How to get protected">
       
          <G
            data-name="Rectangle 2"
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
          data-name="How to get protected"
          transform="translate(52 47)"
          fill="#fff"
          fontSize={16}
          fontFamily="SegoeUI, Segoe UI"
        >
          <TSpan x={-27.93} y={0}>
            {"How to "}
          </TSpan>
          <TSpan x={-11.605} y={21}>
            {"get"}
          </TSpan>
          <TSpan x={-36.559} y={42}>
            {" protected"}
          </TSpan>
        </Text>
    
    </Svg>
    </TouchableOpacity>
  )
}

export default HowToProtect;
