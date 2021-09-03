import styled from 'styled-components'

import { ItemProps } from '.'
type ItemStyledProps = Pick<ItemProps, `active`>

export const ItemStyled = styled.div<ItemStyledProps>`
  background-color: ${props => (props.active ? '#282828' : null)};
  border-radius: 4px;
  height: 40px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 0 1rem;
  align-items: center;
  gap: 1rem;

  color: ${props => (props.active ? '#fff' : '#b3b3b3')};

  :hover {
    color: white;
  }
`

export const ItemText = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s linear;
  line-height: 1;
  text-transform: capitalize;
`
