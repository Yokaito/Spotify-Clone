import styled from 'styled-components'

type ButtonShuffleStyledProps = {
  active: boolean
}

export const ButtonShuffleStyled = styled.button<ButtonShuffleStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  color: ${props => (props.active ? '#1db954' : '#b3b3b3')};
  transition: all 0.2s ease-in-out;
  position: relative;

  ::after {
    content: ' ';
    display: ${props => (props.active ? 'inline' : 'none')};
    position: absolute;
    bottom: -1px;
    left: 13.5px;
    width: 4px;
    height: 4px;
    background: #1db954;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    :hover {
      color: #1ed760;
    }
  }

  :hover {
    color: ${props => (props.active ? '#1ed760' : '#fff')};
  }
`
