import React from 'react'

import { LogoStyled, LogoText, LogoImg } from './styles'

import LogoSpotify from 'assets/logo.png'

const Logo: React.FC = () => {
  return (
    <>
      <LogoStyled>
        <LogoImg src={LogoSpotify} />
        <LogoText>Spotify</LogoText>
      </LogoStyled>
    </>
  )
}

export default Logo
