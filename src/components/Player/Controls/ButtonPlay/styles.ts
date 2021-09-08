import styled from 'styled-components'

export const ButtonPlayStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`
