import React from 'react'

import styled from 'styled-components'

export const SvgStyled = styled.div`
  svg {
    transition: all 0.2s linear;
  }
`

type IconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [icon: string]: any
}

const Icons: IconProps = {
  home: (
    <>
      <path
        d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
        fill="currentColor"
      ></path>
    </>
  ),
  search: (
    <>
      <path
        d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
        fill="currentColor"
      ></path>
    </>
  ),
  library: (
    <>
      <path
        d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
        fill="currentColor"
      ></path>
    </>
  ),
  makePlaylist: (
    <>
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
      <path fill="none" d="M0 0h16v16H0z"></path>
    </>
  ),
  heart: (
    <>
      <path
        fill="currentColor"
        d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
      ></path>
    </>
  )
}

interface SvgProps {
  icon: string
  size?: number
  viewBox?: string
}

const Svg: React.FC<SvgProps> = ({
  icon,
  size = 24,
  viewBox = '0 0 512 512'
}) => {
  return (
    <SvgStyled>
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Icons[icon]}
      </svg>
    </SvgStyled>
  )
}

export default Svg
