import React from 'react'

import LibraryItem from './LibraryItem'

import { LibraryListStyled } from './styles'

const LibraryList: React.FC = () => {
  return (
    <>
      <LibraryListStyled>
        <LibraryItem>Playlist 1</LibraryItem>
        <LibraryItem>Playlist 2</LibraryItem>
        <LibraryItem>Playlist 3</LibraryItem>
        <LibraryItem>Playlist 4</LibraryItem>
        <LibraryItem>Playlist 5</LibraryItem>
      </LibraryListStyled>
    </>
  )
}

export default LibraryList
