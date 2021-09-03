import Container from 'components/Container'
import Logo from 'components/Logo'
import Navbar from 'components/Navbar'
import React from 'react'

import { LibraryStyles } from './styles'

const Library: React.FC = () => {
  return (
    <>
      <LibraryStyles>
        <Container>
          <Logo />
          <Navbar />
        </Container>
      </LibraryStyles>
    </>
  )
}

export default Library
