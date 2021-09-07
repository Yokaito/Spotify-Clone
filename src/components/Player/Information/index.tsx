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
import Svg from 'assets/svg'
import { getCurrentSong } from 'store/slices/currentSongSlice'
import { useAppSelector } from 'store/hooks'

export const Information: React.FC = () => {
  const { image, title, artists } = useAppSelector(state =>
    getCurrentSong(state)
  )

  return (
    <>
      <InformationStyled>
        <InformationImage>
          <InformationImageButtonExpand>⋀</InformationImageButtonExpand>
          <Image src={`audio/` + process.env.PUBLIC_URL + `${image}`} />
        </InformationImage>
        <InformationMusic>
          <InformationMusicName>{title}</InformationMusicName>
          <InformationMusicArtist>
            {artists.map((artist, index) => {
              return (
                <span key={index}>
                  {artist}
                  {index !== artists.length - 1 ? ', ' : ''}
                </span>
              )
            })}
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
