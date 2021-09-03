import styled from 'styled-components'

import { SpacerProps } from '.'

export const SpacerStyled = styled.div<SpacerProps>`
  height: ${props => `${props.height}px`};
  margin: ${props => (props.margin ? `${props.margin}px 0` : '5px 0')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Line = styled.div<SpacerProps>`
  width: calc(100% - 1rem);
  border-bottom: ${props => `${props.height}px solid #282828`};
`
