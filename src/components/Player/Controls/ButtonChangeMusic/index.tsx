import axios from 'axios'
import React from 'react'
import { useAppDispatch } from 'store/hooks'
import { setCurrentSong } from 'store/slices/currentSongSlice'

import { ButtonChangeMusicStyled } from './styles'

interface ButtonChangeMusicProps {
  previous?: boolean
  next?: boolean
}

export const ButtonChangeMusic: React.FC<ButtonChangeMusicProps> = ({
  previous,
  next
}) => {
  const dispatch = useAppDispatch()
  const handleClick = async () => {
    const id = next ? 2 : 1
    const response = await axios.get(`/api/songs/${id}`)
    dispatch(setCurrentSong({ ...response.data.song }))
  }

  return (
    <ButtonChangeMusicStyled onClick={handleClick}>
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
