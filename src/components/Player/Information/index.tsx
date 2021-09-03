import React from 'react'

import {
  InformationStyled,
  InformationImage,
  InformationImageButtonExpand,
  Image,
  InformationMusic,
  InformationMusicArtist,
  InformationMusicName,
  InformationMusicLike
} from './styles'
import ThumbNail from 'assets/thumb.jpg'
import Svg from 'assets/svg'

export const Information: React.FC = () => {
  return (
    <>
      <InformationStyled>
        <InformationImage>
          <InformationImageButtonExpand>⋀</InformationImageButtonExpand>
          <Image src={ThumbNail} />
        </InformationImage>
        <InformationMusic>
          <InformationMusicName>GO (feat. Juice WRLD)</InformationMusicName>
          <InformationMusicArtist>
            The Kid Laroi, Juice WRLD
          </InformationMusicArtist>
        </InformationMusic>
        <InformationMusicLike>
          <Svg icon="heart" size={16} viewBox="0 0 16 16"></Svg>
        </InformationMusicLike>
      </InformationStyled>
    </>
  )
}

export default Information
