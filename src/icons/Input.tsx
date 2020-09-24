import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function Input(props) {
  return (
    <Svg width={242} height={45} viewBox="0 0 242 45" {...props}>
      <G data-name="Groupe 2">
        <G
          data-name="Rectangle 1"
          fill="#fff"
          stroke="#000"
          strokeWidth={1.3}
          opacity={0.48}
        >
          <Rect width={242} height={45} rx={22.5} stroke="none" />
          <Rect
            x={0.65}
            y={0.65}
            width={240.7}
            height={43.7}
            rx={21.85}
            fill="none"
          />
        </G>
        <G data-name="Groupe 1" opacity={0.48}>
          <Path
            data-name="Trac\xE9 1"
            d="M29.639 13.75H12.193a1.932 1.932 0 00-1.86 1.99v13.27a1.932 1.932 0 001.86 1.99h17.446a1.932 1.932 0 001.86-1.99V15.74a1.932 1.932 0 00-1.86-1.99zm-.257 1.327l-8.427 9.016-8.5-9.016zM11.573 28.735V16.009l5.973 6.336zm.877.938l5.977-6.394 2.094 2.221a.592.592 0 00.875 0l2.042-2.185 5.944 6.36zm17.809-.938l-5.944-6.36 5.944-6.36z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Input;
