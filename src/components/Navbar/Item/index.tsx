import Svg from 'assets/svg'
import React from 'react'

import { ItemStyled, ItemText } from './styles'

export interface ItemProps {
  title: string
  active?: boolean
  icon: 'home' | 'search' | 'library' | 'makePlaylist'
  sizeIcon?: number
}

const Item: React.FC<ItemProps> = ({ title, active, icon, sizeIcon }) => {
  return (
    <ItemStyled active={active}>
      <Svg icon={icon} size={sizeIcon} />
      <ItemText>{title}</ItemText>
    </ItemStyled>
  )
}

export default Item
