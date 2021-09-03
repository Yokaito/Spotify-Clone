import React from 'react'
import Content from './Content'
import Friends from './Friends'
import Library from './Library'
import Player from './Player'

import { LayoutStyles } from './styles'

const Layout: React.FC = ({ children }) => {
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
