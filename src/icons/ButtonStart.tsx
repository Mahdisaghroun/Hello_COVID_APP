import * as React from "react"
import Svg, { G, Rect, Text, TSpan } from "react-native-svg"

function ButtonStar(props) {
  return (
    <Svg width={235} height={45} viewBox="0 0 235 45" {...props}>
      <G fill="#4d5076" stroke="#4d5076">
        <Rect width={235} height={45} rx={17} stroke="none" />
        <Rect x={0.5} y={0.5} width={234} height={44} rx={16.5} fill="none" />
      </G>
      <Text
        transform="translate(75 30)"
        fill="#fffefe"
        fontSize={22}
        fontFamily="ComicSansMS-Bold, Comic Sans MS"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {props.title}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default ButtonStar
