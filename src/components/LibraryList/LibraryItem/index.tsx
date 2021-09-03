import React from 'react'

import { LibraryItemStyled } from './styles'

const LibraryItem: React.FC = ({ children }) => {
  return (
    <>
      <LibraryItemStyled>{children}</LibraryItemStyled>
    </>
  )
}

export default LibraryItem
