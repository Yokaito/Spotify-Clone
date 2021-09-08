import React from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getCurrentSong, setPlaying } from 'store/slices/currentSongSlice'

import { ButtonPlayStyled } from './styles'

export const ButtonPlay: React.FC = () => {
  const { playing } = useAppSelector(state => getCurrentSong(state))
  const dispatch = useAppDispatch()

  return (
    <>
      <ButtonPlayStyled onClick={() => dispatch(setPlaying(!playing))}>
        {!playing ? (
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.018 14L14.41 8 4.018 2z" fill="currentColor"></path>
          </svg>
        ) : (
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-sc-1bi12j5-0 gSLhUO"
          >
            <path fill="none" d="M0 0h16v16H0z"></path>
            <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
          </svg>
        )}
      </ButtonPlayStyled>
    </>
  )
}

export default ButtonPlay
