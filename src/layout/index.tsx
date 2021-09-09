import React from 'react'
import Content from './Content'
import Friends from './Friends'
import Library from './Library'
import Player from './Player'
import { useAppDispatch } from 'store/hooks'
import { fetchCurrentPlaylist } from 'store/slices/currentPlaylistSlice'

import { LayoutStyles } from './styles'

const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  dispatch(fetchCurrentPlaylist(1))

  return (
    <LayoutStyles>
      <Library />
      <Content>{children}</Content>
      <Friends />
      <Player />
    </LayoutStyles>
  )
}

export default Layout
