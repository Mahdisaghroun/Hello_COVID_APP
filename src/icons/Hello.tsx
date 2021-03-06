import * as React from "react"
import Svg, { Path, G, Text } from "react-native-svg"



function Hello(props) {
  return (
    <Svg width={props.widht} height={props.height} viewBox="0 0 841.9 595.3" {...props}>
      <Path fill="#FFF" d="M0 0h841.9v595.3H0z" />
      <Path
        fill="#FBB040"
        d="M307.7 473.7l12.5 33.2s-11.7 6.7-9.1 14.4c2.6 7.6 18-10.3 18-10.3s24.1 4.4 34.1-.6c9.9-5-10.4-8.3-10.4-8.3s15.7.1 20.8-4.8c5.1-4.9-19.4-2.6-19.4-2.6s17.3-4.1 17.6-10.1c.3-6-39.4 12.8-39.4 12.8L316 468.9l-8.3 4.8z"
      />
      <Path
        fill="#17A994"
        d="M162.2 459.8s-17.8-8.4-26.6-19.2c-8.8-10.7 21.1 6.2 21.1 6.2s-6.2-21.2-2.3-27.3c4-6 13.5 36.9 13.5 36.9l-5.7 3.4z"
      />
      <Path
        fill="#139482"
        d="M301.5 363.8s64.4-12.1 131.3-45.9c0 0 1.7 32.3-25.4 45.9h25.4s-1.7 22.9-34.8 32.2h20.3s-4.2 20.3-33 28.8-83.9-6.8-83.9-6.8v-54.2z"
      />
      <G fill="#502113">
        <Path d="M408.7 396h9.7s-4.2 20.3-33 28.8c-6.6 1.9-14.5 2.6-22.8 2.5 27-3.6 42.2-25.1 46.1-31.3zM398 396c16-8.8 21.2-25.2 22.7-32.2h12.1s-1.7 22.9-34.8 32.2zM432.8 318s1.7 32.3-25.4 45.9c8.2-12.6 8.7-26.1 6.7-36.9 6.2-2.9 12.4-5.9 18.7-9z" />
      </G>
      <Path
        fill="#17A994"
        d="M218.8 491.9c36 7.3 80.9 7.8 109-23.7 53.1-59.4 40-229.2-50.8-240.1-94.3-11.3-96 55.4-96 124.3 0 43.6-8.3 79.5-18.8 107.3 0 .1 18.8 22 56.6 32.2z"
      />
      <Path
        fill="#FFF"
        d="M291.7 284.7s-68.9-40.7-78 0c-9 40.7 53.1 76.8 93.8 58.8 40.7-18.1 33.9-81.4 13.6-81.4-20.3 0-29.4 22.6-29.4 22.6z"
      />
      <Path
        fill="#502113"
        d="M288.3 274.1c-.1 0-.3 0-.4-.1-.7-.4-1.5-.7-2.3-1.1l.7-1.5c.6.3 1.1.5 1.6.8.3-.5.7-1 1-1.5l1.4 1c-.5.7-1 1.4-1.4 2.1 0 .2-.3.3-.6.3zM282.4 357.6c-1.7 0-3.4-.1-5.2-.3l.1-1.7 5.1.3v1.7zM287.6 357.5l-.1-1.7c1.7-.1 3.4-.2 5-.4l.2 1.7c-1.7.1-3.4.3-5.1.4zM272.1 356.7c-1.7-.2-3.4-.6-5.1-.9l.3-1.7c1.7.3 3.3.6 5 .9l-.2 1.7zM297.8 356.2l-.3-1.7c1.7-.3 3.3-.7 4.9-1.2l.5 1.6c-1.6.6-3.3 1-5.1 1.3zM261.9 354.6c-1.7-.4-3.3-.9-5-1.5l.5-1.6c1.6.5 3.2 1 4.9 1.4l-.4 1.7zM307.8 353.4l-.6-1.6c1.1-.4 2.3-.9 3.4-1.4.4-.2.9-.4 1.3-.6l.7 1.5c-.4.2-.9.4-1.3.6-1.1.6-2.3 1.1-3.5 1.5zM252.1 351.4c-1.6-.6-3.2-1.3-4.8-2l.7-1.5c1.5.7 3.1 1.4 4.7 2l-.6 1.5zM317.2 348.9l-.9-1.5c1.4-.9 2.9-1.8 4.2-2.8l1 1.4c-1.3 1.1-2.8 2-4.3 2.9zM242.7 347.1c-1.5-.8-3.1-1.6-4.5-2.5l.9-1.5c1.5.9 2.9 1.7 4.4 2.5l-.8 1.5zM325.6 342.8l-1.1-1.3c1.2-1.1 2.5-2.3 3.6-3.5l1.2 1.2c-1.2 1.2-2.4 2.4-3.7 3.6zM233.8 341.9c-1.4-1-2.9-2-4.2-3l1-1.4c1.3 1 2.7 2 4.1 2.9l-.9 1.5zM225.5 335.6c-1.3-1.1-2.6-2.3-3.8-3.5l1.2-1.2c1.2 1.2 2.4 2.3 3.7 3.4l-1.1 1.3zM332.7 335.2l-1.3-1c1-1.3 2-2.7 2.9-4.1l1.4.9c-.9 1.4-2 2.8-3 4.2zM218.1 328.3c-.7-.8-1.4-1.6-2-2.4-.4-.5-.8-1.1-1.2-1.6l1.4-1 1.2 1.5c.6.8 1.3 1.6 2 2.4l-1.4 1.1zM338.3 326.5l-1.5-.8c.8-1.5 1.5-3 2.2-4.6l1.6.7c-.7 1.6-1.5 3.2-2.3 4.7zM211.9 320c-.9-1.5-1.8-3-2.6-4.5l1.5-.8c.8 1.5 1.6 2.9 2.5 4.4l-1.4.9zM342.5 317l-1.6-.6c.6-1.6 1.1-3.2 1.5-4.8l1.6.4c-.4 1.7-.9 3.3-1.5 5zM207.1 310.8c-.6-1.6-1.2-3.3-1.7-4.9l1.6-.5c.5 1.6 1 3.2 1.6 4.8l-1.5.6zM345.2 307l-1.7-.3c.3-1.6.6-3.3.8-5l1.7.2c-.2 1.7-.5 3.4-.8 5.1zM204.3 300.8c-.3-1.7-.5-3.5-.6-5.2l1.7-.1c.1 1.7.3 3.3.6 5l-1.7.3zM346.5 296.7l-1.7-.1c.1-1.2.1-2.5.1-3.7v-1.4h1.7v1.4c0 1.2 0 2.5-.1 3.8zM205.3 290.5l-1.7-.1c.1-1.7.3-3.5.6-5.2l1.7.3c-.3 1.6-.5 3.3-.6 5zM207 280.6l-1.6-.5c.5-1.7 1.1-3.4 1.8-4.9l1.5.7c-.7 1.4-1.3 3-1.7 4.7zM211.1 271.5l-1.4-.9c1-1.5 2.1-2.8 3.3-4.1l1.2 1.2c-1.1 1.1-2.2 2.4-3.1 3.8zM280.9 270.6c-1.5-.7-3-1.4-4.7-2.1l.7-1.6c1.6.7 3.2 1.4 4.7 2.1l-.7 1.6zM293.6 267.7l-1.3-1.1c1.2-1.3 2.4-2.6 3.7-3.7l1.1 1.3c-1.2 1-2.4 2.2-3.5 3.5zM271.5 266.6l-4.8-1.8.6-1.6c1.6.6 3.3 1.2 4.8 1.8l-.6 1.6zM218 264.5l-1-1.4c1.4-1 3-1.8 4.6-2.6l.7 1.5c-1.5.7-2.9 1.6-4.3 2.5zM261.9 263.2c-1.6-.5-3.2-1-4.9-1.4l.4-1.6c1.7.4 3.3.9 5 1.4l-.5 1.6zM301 261l-1-1.4c1.4-1 2.9-1.9 4.5-2.7l.8 1.5c-1.4.7-2.9 1.6-4.3 2.6zM252.1 260.6c-1.7-.4-3.4-.7-5-.9l.2-1.7c1.6.2 3.4.6 5.1.9l-.3 1.7zM227.1 260.4l-.4-1.6c1.6-.4 3.4-.8 5.1-1l.2 1.7c-1.7.1-3.4.4-4.9.9zM242 259.2c-1.7-.1-3.4-.2-5-.1v-1.7c1.7 0 3.4 0 5.2.1l-.2 1.7zM309.9 256.4l-.6-1.6c1.6-.6 3.4-1 5.1-1.4l.3 1.7c-1.6.3-3.2.7-4.8 1.3zM324.6 254.8c-1.6-.3-3.3-.4-4.9-.3l-.1-1.7c1.8-.1 3.6 0 5.3.4l-.3 1.6z"
      />
      <Path
        fill="#139482"
        d="M168 442.8c32.9-10.9 44.9-24.8 44.9-24.8l-34.8-21.7c-2.4 17.1-5.9 32.6-10.1 46.5z"
      />
      <Path fill="#FFDE17" d="M293.4 313.3s5.9-5.1 16.1-4.2v17.8l-16.1-13.6z" />
      <Path
        fill="#17A994"
        d="M212.9 363.8s-64.4-12.1-131.3-45.9c0 0-1.7 32.3 25.4 45.9H81.5s1.7 22.9 34.8 32.2H96s4.2 20.3 33 28.8 83.9-6.8 83.9-6.8v-54.2z"
      />
      <G>
        <Path
          fill="#502113"
          d="M256 291.7c9.9 0 16.3 15.9 17 17.7l-4.8 1.8c-1.4-3.8-6.8-14.5-12.2-14.5-5.2 0-8.6 10.4-9.4 14.1l-5-1c.5-1.8 4.2-18.1 14.4-18.1zM315.3 277.1c6.7 0 13.3 8.3 14.1 9.4l-4 3.1c-2.1-2.8-7.6-8.2-10.7-7.3-2.9.9-3.3 7.9-3.1 11l-5.1.4c-.1-1.4-.9-14 6.7-16.3.7-.2 1.4-.3 2.1-.3z"
        />
      </G>
      <Path
        fill="#FFF"
        d="M234.7 372.7s14 8.5 27.7 10.6c0 0-19 14.3-27.7-10.6zM269.6 383.7s14.8 3 33.1-1.7c0 0-5.1 10.2-14.6 10.2s-18.5-8.5-18.5-8.5zM309.3 380s15.7-3.1 26.4-10.3c0 0-.1 9.3-6.4 12.3-6.2 3-20-2-20-2zM342.5 365.5s8.1-5.8 11.1-11.4c0 0 7 15.2-11.1 11.4z"
      />
      <Path
        fill="#502113"
        d="M248.5 396s18.8 5.9 33.1 4.7c0 0-6.3 9.7-16.5 8.1-10.2-1.8-16.6-12.8-16.6-12.8zM297.5 399.8s14.8-3 27-7.6c0 0 2.1 8.5-8.1 12.7-10.3 4.2-18.9-5.1-18.9-5.1zM337.3 387.4s10.2-3.9 15.9-7.4c0 0 2.1 10-4.5 12.2-6.6 2.1-11.4-4.8-11.4-4.8z"
      />
      <Path
        fill="#139482"
        d="M275.1 415.1s16.1 0 27.8-1.7c0 0-3.5 9.3-12.4 9.3s-15.4-7.6-15.4-7.6zM322.5 411.7s15.2-.8 22.3-5.7c0 0-1.6 10.3-9.1 12-7.5 1.7-13.2-6.3-13.2-6.3zM300.2 427.4s13.4 1.1 24.4-4.1c0 0-1.5 9.6-8.3 10.9-6.8 1.2-16.1-6.8-16.1-6.8z"
      />
      <Path
        fill="#502113"
        d="M109.4 330.9c-9.1-3.9-18.4-8.2-27.8-12.9 0 0-1.7 32.3 25.4 45.9H81.5s1.7 22.9 34.8 32.2H96s4.2 20.3 33 28.8c16.7 4.9 42.2 1.9 60.7-1.6 0 0-64.6.3-71.4-14.3-6.8-14.6 45.8-6.5 45.8-6.5s-64.2-13.5-59.3-26.1c4.9-12.6 67.8 3.6 67.8 3.6s-73.9-21.5-72.3-37.1c.5-6.4 4.5-10 9.1-12z"
      />
      <Path
        fill="#FFDE17"
        d="M247.3 484.7l-5.6 35s-13.5 0-15.1 7.9c-1.6 7.9 20.7 0 20.7 0s18.8 15.8 29.9 16.4c11.1.6-4.9-12.4-4.9-12.4s13.5 7.9 20.4 6.2c6.9-1.7-15.5-11.9-15.5-11.9s17.1 5.1 20.3 0c3.2-5.1-40.6-8.5-40.6-8.5v-32.8h-9.6z"
      />
      <G>
        <Path
          fill="#4D5076"
          d="M549.2 327.1s.2 26.3-40.1 38.4c-40.2 12.1-76.2-35.7-71.6-85.4l111.7 47z"
        />
        <Path
          fill="#6E73A3"
          d="M538.8 322.8c-11.5 14.5-36 41.5-55.2 34.4-19.3-7.2-27.4-49.4-30.2-70.4l85.4 36z"
        />
        <G fill="#C3C2E2">
          <Path d="M503.1 355.1c-.8.4-1.6.7-2.4 1.1 4.6-17.7 12.9-31.3 20.5-40.7l1.9.8c-7.3 8.9-15.4 21.8-20 38.8zM509.9 310.6c-9.1 10.4-20.4 26.6-24.8 47-.5-.1-1.1-.3-1.6-.5-.1 0-.2-.1-.3-.1 4.4-20.4 15.5-36.7 24.7-47.2l2 .8zM490.7 302.5l1.9.8c-6.7 11.2-14.9 27.4-19.2 45.8l-1.5-2.1c4.3-17.8 12.2-33.5 18.8-44.5zM481.7 298.7l1.9.8c-6.2 7.8-13.9 18.9-19.9 31.3-.3-.9-.6-1.7-.9-2.6 5.7-11.6 13-21.9 18.9-29.5zM467.2 292.7l1.9.8c-3.5 5.1-7.3 11.8-10.7 20.1-.3-1.1-.5-2.2-.8-3.3 3.1-7.2 6.5-13 9.6-17.6z" />
        </G>
        <Path
          fill="#FBB040"
          d="M565.2 473.7l-12.5 33.2s11.7 6.7 9.1 14.4c-2.6 7.6-18-10.3-18-10.3s-24.1 4.4-34.1-.6c-9.9-5 10.4-8.3 10.4-8.3s-15.7.1-20.8-4.8c-5.1-4.9 19.4-2.6 19.4-2.6s-17.3-4.1-17.6-10.1c-.3-6 39.4 12.8 39.4 12.8l16.3-28.4 8.4 4.7z"
        />
        <Path
          fill="#6E73A3"
          d="M710.6 459.8s17.8-8.4 26.6-19.2c8.8-10.7-21.1 6.2-21.1 6.2s6.2-21.2 2.3-27.3c-4-6-13.5 36.9-13.5 36.9l5.7 3.4z"
        />
        <Path
          fill="#6E73A3"
          d="M654 491.9c-36 7.3-80.9 7.8-109-23.7-53.1-59.4-40-229.2 50.8-240.1 94.3-11.3 96 55.4 96 124.3 0 43.6 8.3 79.5 18.8 107.3 0 .1-18.7 22-56.6 32.2z"
        />
        <Path
          fill="#C3C2E2"
          d="M585.7 292.3c3.1-9.7 12.5-25.1 41-17.4 28.5 7.7 26.7 52.5-9.5 55.1-36.2 2.6-33.6-31.2-31.5-37.7z"
        />
        <Path
          fill="#C3C2E2"
          d="M523.3 272.3c3.1-9.7 12.5-25.1 41-17.4 28.5 7.7 26.7 52.5-9.5 55.1s-33.5-31.2-31.5-37.7z"
        />
        <Path
          fill="#FFDE17"
          d="M579.5 313.3s-5.9-5.1-16.1-4.2v17.8l16.1-13.6z"
        />
        <Path
          fill="#FFF"
          d="M616.8 291.7c-9.9 0-16.3 15.9-17 17.7l4.8 1.8c1.4-3.8 6.8-14.5 12.2-14.5 5.2 0 8.6 10.4 9.4 14.1l5-1c-.4-1.8-4.1-18.1-14.4-18.1zM557.5 277.1c-6.7 0-13.3 8.3-14.1 9.4l4 3.1c2.1-2.8 7.6-8.2 10.7-7.3 2.9.9 3.3 7.9 3.1 11l5.1.4c.1-1.4.9-14-6.7-16.3-.6-.2-1.3-.3-2.1-.3z"
        />
        <Path
          fill="#FFDE17"
          d="M625.6 484.7l5.6 35s13.5 0 15.1 7.9c1.6 7.9-20.7 0-20.7 0s-18.8 15.8-29.9 16.4c-11.1.6 4.9-12.4 4.9-12.4s-13.5 7.9-20.4 6.2c-6.9-1.7 15.5-11.9 15.5-11.9s-17.1 5.1-20.3 0c-3.2-5.1 40.6-8.5 40.6-8.5v-32.8h9.6z"
        />
        <Path
          fill="#4D5076"
          d="M595.8 267.7s15.5-10.9 28.5-13.9 0 9.1 0 9.1 13-6.7 22-6c9 .7-3.7 9.8-3.7 9.8s13.7-.8 18.5 4.1c4.8 4.8-17.8 6.4-17.8 6.4s-20.9-11.9-47.5-9.5zM583.7 259.9s-6.8-17.7-16-27.4c-9.1-9.7-5 7.5-5 7.5s-7.1-12.8-14.9-17.2c-7.8-4.5-2.4 10.2-2.4 10.2s-10.9-8.2-17.6-6.9 11.3 15.2 11.3 15.2 23.9 1.8 44.6 18.6z"
        />
        <G>
          <Path
            fill="#4D5076"
            d="M691.9 352.5s-26.3-.2-38.4 40.1c-12.1 40.2 35.7 76.2 85.4 71.6l-47-111.7z"
          />
          <Path
            fill="#6E73A3"
            d="M696.2 362.9c-14.5 11.5-41.5 36-34.4 55.2 7.2 19.3 49.4 27.4 70.4 30.2l-36-85.4z"
          />
          <G fill="#C3C2E2">
            <Path d="M664 398.6c-.4.8-.7 1.6-1.1 2.4 17.7-4.6 31.3-12.9 40.7-20.5l-.8-1.9c-8.9 7.2-21.9 15.4-38.8 20zM708.4 391.7c-10.4 9.1-26.6 20.4-47 24.8.1.5.3 1.1.5 1.6 0 .1.1.2.1.3 20.4-4.4 36.7-15.5 47.2-24.7l-.8-2zM716.5 411l-.8-1.9c-11.2 6.7-27.4 14.9-45.8 19.2l2.1 1.5c17.8-4.3 33.5-12.2 44.5-18.8zM720.3 420l-.8-1.9c-7.8 6.2-18.9 13.9-31.3 19.9.9.3 1.7.6 2.6.9 11.6-5.8 22-13 29.5-18.9zM726.4 434.4l-.8-1.9c-5.1 3.5-11.8 7.3-20.1 10.7 1.1.3 2.2.5 3.3.8 7.1-3 12.9-6.4 17.6-9.6z" />
          </G>
        </G>
        <G>
          <G fill="#4D5076">
            <Path d="M559 464.7s.2 0 .5.1.8.3 1.3.5c1 .5 2.2 1.3 3.2 2.2 1 .9 1.9 2 2.4 3 .3.5.5.9.6 1.2.1.3.2.5.2.5s-.2 0-.6-.1c-.3-.1-.8-.2-1.3-.4-1.1-.4-2.3-1.2-3.3-2.1-1-1-1.9-2.2-2.3-3.2-.2-.5-.4-1-.5-1.3-.2-.2-.2-.4-.2-.4zM548.4 451.4s.2.1.5.2.7.3 1.1.6c.8.5 1.8 1.4 2.5 2.4s1.3 2.1 1.6 3.1c.1.5.2.9.3 1.2v.5s-.2 0-.5-.1-.7-.3-1.2-.5c-.9-.5-1.9-1.4-2.6-2.4-.8-1-1.3-2.2-1.5-3.2-.1-.5-.2-.9-.2-1.3v-.5zM539.1 434.7s.2.1.5.3c.3.2.7.5 1.1.9.8.8 1.6 1.9 2.3 3.1.6 1.2 1.1 2.6 1.3 3.7.1.6.1 1 .1 1.4v.6s-.2-.1-.5-.3c-.3-.2-.7-.5-1.1-.8-.9-.7-1.7-1.9-2.4-3.1-.7-1.3-1.1-2.7-1.2-3.8-.1-.6-.1-1 0-1.4-.2-.4-.1-.6-.1-.6zM532.6 417.9s.2.1.4.3c.3.2.6.6 1 1 .7.8 1.4 2 1.9 3.3.5 1.3.7 2.7.7 3.7 0 .5-.1 1-.1 1.4-.1.3-.1.5-.1.5s-.2-.1-.4-.3c-.3-.2-.6-.6-1-1-.7-.8-1.4-2-1.9-3.3-.5-1.3-.7-2.7-.7-3.7 0-.5.1-1 .1-1.4 0-.3.1-.5.1-.5zM527.1 396.4s.2.2.4.6c.2.4.6.9.9 1.6.7 1.3 1.3 3.1 1.7 5 .4 1.9.6 3.8.6 5.2 0 .7-.1 1.4-.1 1.8-.1.4-.1.7-.1.7s-.2-.2-.5-.6c-.3-.4-.6-.9-1-1.5-.7-1.3-1.4-3.1-1.9-5-.4-1.9-.6-3.8-.5-5.3 0-.7.1-1.4.2-1.8.2-.5.3-.7.3-.7zM524.1 374.5s.2.2.4.6c.2.4.5 1 .7 1.7.5 1.4 1 3.3 1.2 5.2.2 1.9.3 3.8.1 5.3-.1.7-.2 1.4-.3 1.8-.1.4-.2.7-.2.7s-.2-.2-.4-.6l-.8-1.6c-.6-1.4-1.1-3.3-1.3-5.2-.2-1.9-.2-3.9 0-5.4.1-.7.3-1.4.4-1.8.1-.4.2-.7.2-.7zM523.2 353.4l.3.6c.2.4.4 1 .5 1.6.4 1.3.6 3.1.7 4.9.1 1.8-.1 3.6-.4 5-.2.7-.3 1.3-.5 1.7-.1.4-.3.6-.3.6l-.3-.6c-.2-.4-.4-.9-.7-1.6-.5-1.3-.8-3.1-.8-5-.1-1.8.2-3.7.6-5 .2-.7.4-1.2.6-1.6.1-.4.3-.6.3-.6zM581.2 477.9s.1 0 .4-.1h.8c.6.1 1.2.3 1.6.8.4.4.7 1.1.7 1.7v.8c0 .2-.1.4-.1.4s-.1 0-.4.1h-.8c-.6-.1-1.2-.3-1.6-.8-.4-.5-.7-1.1-.7-1.7v-.8c0-.2.1-.4.1-.4zM571.3 465.1s.2 0 .5.1.6.3 1 .5c.8.4 1.6 1.2 2.3 2.1.6.9 1.1 1.9 1.2 2.8.1.4.1.8.1 1.1v.5s-.2 0-.5-.1-.6-.3-1-.5c-.8-.4-1.6-1.2-2.3-2.1-.6-.9-1.1-1.9-1.2-2.8-.1-.4-.1-.8-.1-1.1-.1-.3 0-.5 0-.5zM562.2 448.7s.2.1.5.3c.3.2.7.6 1.1 1 .8.9 1.7 2.1 2.4 3.4.7 1.3 1.2 2.8 1.4 3.9.1.6.2 1.1.2 1.5v.6s-.2-.1-.5-.3c-.3-.2-.7-.5-1.2-.9-.9-.8-1.8-2-2.5-3.4s-1.2-2.8-1.3-4c-.1-.6-.1-1.1-.1-1.5-.1-.4 0-.6 0-.6zM555.6 431.7s.2.1.4.3c.3.2.6.5.9.9.7.8 1.4 2 1.8 3.2.5 1.2.7 2.6.6 3.6 0 .5-.1 1-.1 1.3-.1.3-.1.5-.1.5s-.2-.1-.4-.3c-.3-.2-.6-.5-.9-.9-.7-.8-1.4-2-1.8-3.2-.5-1.2-.7-2.6-.6-3.6 0-.5.1-1 .1-1.3 0-.3.1-.5.1-.5zM550.5 413.4s.2.1.4.4c.2.3.6.7.9 1.2.7 1 1.3 2.4 1.7 3.9.4 1.5.5 3 .4 4.2 0 .6-.1 1.1-.2 1.5-.1.4-.2.6-.2.6s-.2-.1-.4-.4c-.2-.3-.6-.7-.9-1.2-.7-1-1.3-2.4-1.6-3.9-.4-1.5-.5-3-.4-4.2 0-.6.1-1.1.2-1.5 0-.4.1-.6.1-.6zM546.7 393.1s.2.2.4.5.5.9.8 1.5c.6 1.2 1.2 2.9 1.5 4.7.3 1.7.4 3.5.2 4.9-.1.7-.2 1.3-.3 1.7-.1.4-.2.6-.2.6s-.2-.2-.4-.5-.5-.9-.8-1.5c-.6-1.2-1.2-2.9-1.5-4.7-.3-1.7-.4-3.5-.2-4.9.1-.7.2-1.3.3-1.7.1-.4.2-.6.2-.6zM544.5 374.8s.1.2.3.5c.2.3.5.7.7 1.2.5 1 .9 2.4 1.1 3.8.2 1.4.1 2.9-.2 4-.1.6-.3 1-.4 1.3-.1.3-.2.5-.2.5s-.1-.2-.3-.5c-.2-.3-.5-.7-.7-1.2-.5-1-.9-2.4-1-3.8-.2-1.4-.1-2.9.2-4 .1-.6.3-1 .4-1.3 0-.3.1-.5.1-.5zM543.5 356.1s.1.2.3.5c.2.3.4.8.6 1.3.4 1.1.7 2.6.8 4.1.1 1.5-.1 3-.5 4.2-.2.6-.4 1.1-.5 1.4-.2.3-.3.5-.3.5s-.1-.2-.3-.5c-.2-.3-.4-.8-.6-1.3-.4-1.1-.7-2.6-.8-4.1-.1-1.5.1-3 .5-4.2.2-.6.4-1.1.5-1.4.2-.3.3-.5.3-.5zM590.3 474.1s.2 0 .5.2c.3.1.7.3 1.1.5.8.5 1.7 1.3 2.3 2.2.7.9 1.2 2 1.4 2.9.1.5.2.9.2 1.2v.5s-.2 0-.5-.1-.7-.2-1.1-.5c-.8-.4-1.8-1.2-2.5-2.2-.7-.9-1.2-2.1-1.3-3-.1-.5-.1-.9-.1-1.2v-.5zM582.2 458.9l.4.2c.3.2.6.4.9.7.7.6 1.4 1.6 1.9 2.6s.8 2.1.9 3.1v1.2c0 .3-.1.5-.1.5s-.2-.1-.5-.2-.6-.4-1-.7c-.7-.6-1.5-1.5-2-2.6s-.8-2.2-.8-3.2c0-.5 0-.9.1-1.2l.2-.4zM575.6 439.5s.2.2.4.5c.3.3.6.8.9 1.4.7 1.1 1.4 2.7 1.9 4.4.5 1.6.8 3.3.9 4.7v1.7c0 .4-.1.7-.1.7l-.5-.5c-.3-.3-.7-.7-1.1-1.3-.8-1.1-1.6-2.7-2.1-4.4-.5-1.7-.8-3.4-.7-4.8 0-.7.1-1.3.1-1.7.2-.4.3-.7.3-.7zM571.7 418.8s.2.2.4.6c.2.4.5.9.8 1.5.6 1.2 1.1 2.9 1.3 4.7.3 1.7.4 3.5.2 4.8-.1.7-.2 1.3-.3 1.7-.1.4-.2.7-.2.7s-.2-.2-.4-.5-.6-.8-.9-1.5c-.6-1.2-1.2-2.9-1.5-4.7-.3-1.8-.3-3.5-.1-4.9.1-.7.2-1.3.4-1.7.2-.5.3-.7.3-.7zM570.1 396.7l.3.6c.2.4.4 1 .7 1.6.5 1.4.8 3.2.9 5.1.1 1.9 0 3.7-.3 5.1-.2.7-.3 1.3-.5 1.7-.1.4-.3.7-.3.7l-.3-.6c-.2-.4-.4-1-.7-1.6-.5-1.4-.8-3.2-.9-5.1-.1-1.9 0-3.7.3-5.1.1-.7.3-1.3.5-1.7.1-.4.3-.7.3-.7zM570.2 376.5l.3.6c.2.4.4.9.5 1.5.4 1.3.6 2.9.5 4.6 0 1.7-.3 3.3-.7 4.6-.2.6-.4 1.1-.6 1.5l-.3.6-.3-.6c-.2-.4-.4-.9-.5-1.5-.4-1.3-.6-2.9-.5-4.6 0-1.7.3-3.3.7-4.6.2-.6.4-1.1.6-1.5.1-.4.3-.6.3-.6zM571.4 360.1s.1.2.3.5c.1.3.3.7.5 1.2.3 1 .4 2.2.3 3.4-.1 1.2-.5 2.4-.9 3.3-.2.4-.5.8-.7 1.1-.2.3-.3.4-.3.4s-.1-.2-.3-.5c-.1-.3-.3-.7-.5-1.2-.3-1-.4-2.2-.3-3.4.1-1.2.5-2.4.9-3.3.2-.4.5-.8.7-1.1.2-.2.3-.4.3-.4zM600.6 470.3l.5.5c.3.3.7.8 1.2 1.5.9 1.2 1.9 2.9 2.7 4.7.8 1.8 1.5 3.6 1.8 5.1.2.7.3 1.4.4 1.8.1.5.1.7.1.7s-.2-.2-.6-.5c-.4-.3-.8-.7-1.4-1.3-1-1.1-2.2-2.8-3-4.7-.8-1.8-1.4-3.8-1.6-5.3-.1-.8-.1-1.4-.1-1.9v-.6zM594.7 449.6s.2.2.4.6c.3.4.6 1 .9 1.6.7 1.4 1.4 3.2 1.9 5.1.5 1.9.8 3.8.9 5.4v1.9c0 .5-.1.7-.1.7s-.2-.2-.5-.6c-.3-.4-.7-.9-1.1-1.6-.8-1.3-1.6-3.2-2.1-5.1-.5-1.9-.7-4-.7-5.5 0-.8.1-1.4.2-1.9.2-.3.2-.6.2-.6zM591.8 425.4s.1.3.3.7c.2.5.4 1.1.7 1.9.5 1.6.9 3.7 1.1 5.9.2 2.2.2 4.3.1 6-.1.8-.2 1.5-.3 2-.1.5-.2.8-.2.8s-.2-.3-.4-.7c-.2-.4-.5-1.1-.8-1.9-.6-1.6-1.1-3.7-1.3-5.9-.2-2.2-.1-4.4.1-6.1.1-.8.3-1.5.4-2 .2-.4.3-.7.3-.7zM591.8 403.7s.1.2.3.7c.2.4.4 1 .5 1.7.4 1.4.6 3.3.6 5.2 0 1.9-.3 3.8-.7 5.2-.2.7-.4 1.3-.6 1.7l-.3.6s-.1-.2-.3-.7c-.2-.4-.4-1-.6-1.7-.4-1.4-.6-3.3-.6-5.2 0-1.9.3-3.8.7-5.2.2-.7.4-1.3.6-1.7.2-.4.4-.6.4-.6zM593.2 384s.1.2.2.6c.1.4.3.9.4 1.5.3 1.2.4 2.8.3 4.3-.1 1.6-.5 3.1-1 4.2-.2.6-.5 1-.7 1.4-.2.3-.3.5-.3.5l-.3-.6c-.1-.4-.3-.9-.4-1.5-.3-1.2-.4-2.8-.3-4.3.1-1.6.5-3.1 1-4.2.2-.6.5-1 .7-1.4.3-.3.4-.5.4-.5zM595.8 363.8s.1.2.2.6c.1.4.2.9.3 1.6.2 1.3.2 3-.1 4.7-.2 1.7-.7 3.3-1.2 4.5-.3.6-.5 1.1-.8 1.5-.2.3-.4.5-.4.5s-.1-.2-.2-.6c-.1-.4-.3-.9-.4-1.6-.2-1.3-.3-3 0-4.7.2-1.7.7-3.3 1.3-4.5.3-.6.6-1.1.8-1.4.4-.4.5-.6.5-.6zM610.8 465.5s.1.1.4.2c.2.1.5.4.7.6.5.5.9 1.3 1.1 2.2.2.8.1 1.7-.1 2.4-.1.4-.3.7-.4.9-.1.2-.2.3-.2.3s-.1-.1-.4-.2c-.2-.1-.5-.4-.7-.6-.5-.5-.9-1.3-1.1-2.2-.2-.8-.1-1.7.1-2.4.1-.4.3-.7.4-.9.1-.1.2-.3.2-.3zM608.5 446.7s.1.2.3.5c.2.3.5.7.7 1.2.5 1 .9 2.4 1 3.9.1 1.4 0 2.9-.2 4-.1.6-.3 1-.4 1.4-.1.3-.2.5-.2.5s-.1-.2-.3-.5c-.2-.3-.5-.7-.7-1.2-.5-1-.9-2.4-1-3.9-.1-1.4 0-2.9.2-4 .1-.6.3-1 .4-1.4.1-.3.2-.5.2-.5zM608.1 427.1l.3.6c.2.4.4.9.6 1.5.4 1.2.6 2.8.6 4.4 0 1.6-.2 3.2-.6 4.4-.2.6-.4 1.1-.6 1.5l-.3.6-.3-.6c-.2-.4-.4-.9-.6-1.5-.4-1.2-.6-2.8-.6-4.4 0-1.6.2-3.2.6-4.4.2-.6.4-1.1.6-1.5l.3-.6zM609.6 405.8s.1.2.2.6c.1.4.3 1 .4 1.6.3 1.3.4 3.1.2 4.9-.1 1.7-.5 3.5-1 4.8-.2.6-.5 1.2-.7 1.5l-.3.6s-.1-.2-.2-.6c-.1-.4-.3-1-.4-1.6-.3-1.3-.4-3.1-.2-4.9.1-1.7.5-3.5 1-4.8.2-.6.5-1.2.7-1.5.1-.4.3-.6.3-.6zM612.1 386.4s.1.2.2.6c.1.4.3.9.4 1.5.2 1.3.2 2.9 0 4.5s-.7 3.2-1.2 4.3c-.3.6-.5 1.1-.8 1.4-.2.3-.4.5-.4.5s-.1-.2-.2-.6c-.1-.4-.3-.9-.4-1.5-.2-1.3-.2-2.9 0-4.5s.7-3.2 1.2-4.3c.3-.6.5-1.1.8-1.4.2-.3.4-.5.4-.5zM615.5 367.5s.1.2.2.6c.1.4.2.9.3 1.5.2 1.2.1 2.8-.2 4.4-.3 1.6-.8 3.1-1.4 4.1-.3.5-.6 1-.8 1.3-.2.3-.4.5-.4.5s-.1-.2-.2-.6c-.1-.4-.2-.9-.3-1.5-.2-1.2-.1-2.8.2-4.4.3-1.6.8-3.1 1.4-4.1.3-.5.6-1 .8-1.3.3-.4.4-.5.4-.5z" />
          </G>
        </G>
      </G>
      <G>
        <G fill="#C3C2E2">
          <Path d="M344.1 112c9.5-30.1 39.1-78.2 127.8-54.3 88.7 23.9 83.3 163.5-29.6 171.6-112.8 8.1-104.6-97.1-98.2-117.3z" />
          <Path d="M461.6 206.6l45.3 30-15.2-51z" />
        </G>
        <Text
          transform="translate(367.125 170)"
          fill="#FFF"
          fontFamily="'ComicSansMS-BoldItalic'"
          fontSize={83.848}
        >
          {"HI!"}
        </Text>
      </G>
      <G>
        <Path
          fill="#FFDE17"
          d="M157 187c12.9 0 12.9-20 0-20s-12.9 20 0 20zM145 291c12.9 0 12.9-20 0-20s-12.9 20 0 20zM286 191c12.9 0 12.9-20 0-20s-12.9 20 0 20zM569 180c12.9 0 12.9-20 0-20s-12.9 20 0 20zM697 183c12.9 0 12.9-20 0-20s-12.9 20 0 20zM726 331c12.9 0 12.9-20 0-20s-12.9 20 0 20zM446 265c12.9 0 12.9-20 0-20s-12.9 20 0 20zM603 202.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM680 151.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM707 246.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM756 319.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM718 372.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM489 271.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM377 241.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM401 310.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM304 167.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM180 204.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM125 253.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM157 307.5c5.8 0 5.8-9 0-9s-5.8 9 0 9zM188 171c9 0 9-14 0-14s-9 14 0 14zM238 207c9 0 9-14 0-14s-9 14 0 14zM112 296c9 0 9-14 0-14s-9 14 0 14zM320 225c9 0 9-14 0-14s-9 14 0 14zM548 204c9 0 9-14 0-14s-9 14 0 14zM669 202c9 0 9-14 0-14s-9 14 0 14zM738 287c9 0 9-14 0-14s-9 14 0 14zM362 284c9 0 9-14 0-14s-9 14 0 14z"
        />
      </G>
    </Svg>
  )
}

export default Hello
