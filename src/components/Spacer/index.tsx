import React from 'react'

import { SpacerStyled, Line } from './styles'

export interface SpacerProps {
  height: number
  margin?: number
}

const Spacer: React.FC<SpacerProps> = ({ ...rest }) => {
  return (
    <>
      <SpacerStyled {...rest}>
        <Line {...rest} />
      </SpacerStyled>
    </>
  )
}

export default Spacer
