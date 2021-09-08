import React from 'react'

import { ButtonChangeMusicStyled } from './styles'

interface ButtonChangeMusicProps {
  previous?: boolean
  next?: boolean
}

export const ButtonChangeMusic: React.FC<ButtonChangeMusicProps> = ({
  previous,
  next
}) => {
  return (
    <ButtonChangeMusicStyled>
      {next && (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"
          ></path>
        </svg>
      )}

      {previous && (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
          ></path>
        </svg>
      )}
    </ButtonChangeMusicStyled>
  )
}

export default ButtonChangeMusic
