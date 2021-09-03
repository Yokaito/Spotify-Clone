import React from 'react'

import { ContainerStyled } from './styles'

const Container: React.FC = ({ children }) => {
  return (
    <>
      <ContainerStyled>{children}</ContainerStyled>
    </>
  )
}

export default Container
