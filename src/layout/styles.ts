import styled from 'styled-components'

export const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  height: 100%;
  min-height: 100%;
  position: relative;
  grid-template-areas:
    'LIBRARY CONTENT FRIENDS'
    'PLAYER  PLAYER  PLAYER';
  overflow: hidden;
`
