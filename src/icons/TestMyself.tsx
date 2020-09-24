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

function TestMySelf(props) {
  return (
    <TouchableOpacity>
    <Svg width={114} height={135} viewBox="0 0 114 135" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.917}
          x2={0.083}
          y2={0.952}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ee0921" />
          <Stop offset={1} stopColor="#390208" />
        </LinearGradient>
      </Defs>
      <G data-name="Test my self">
      
          <G
            data-name="Rectangle 4"
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
          data-name="Test my self"
          transform="translate(52 58)"
          fill="#fff"
          fontSize={16}
          fontFamily="Lato-Regular"
        >
          <TSpan x={-28.844} y={0}>
            {"Test my "}
          </TSpan>
          <TSpan x={-12.02} y={21}>
            {"self"}
          </TSpan>
        </Text>
      
    </Svg>
    </TouchableOpacity>
  )
}

export default TestMySelf;
