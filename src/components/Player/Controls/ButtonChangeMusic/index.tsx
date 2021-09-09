import axios from 'axios'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setCurrentSong, getCurrentSong } from 'store/slices/currentSongSlice'
import { getCurrentPlaylist } from 'store/slices/currentPlaylistSlice'

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
  const { songs } = useAppSelector(state => getCurrentPlaylist(state))
  const { id } = useAppSelector(state => getCurrentSong(state))
  const handleClick = async () => {
    songs.forEach(async song => {
      if (song.id === id) {
        if (next) {
          const nextSong = songs[songs.indexOf(song) + 1]
          if (nextSong) {
            const response = await axios.get(`/api/songs/${nextSong.id}`)
            dispatch(setCurrentSong({ ...response.data.song }))
          }
        } else {
          const previousSong = songs[songs.indexOf(song) - 1]
          if (previousSong) {
            const response = await axios.get(`/api/songs/${previousSong.id}`)
            dispatch(setCurrentSong({ ...response.data.song }))
          }
        }
      }
    })
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
