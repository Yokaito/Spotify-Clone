import styled from 'styled-components'

export const InformationStyled = styled.div`
  display: flex;
  width: 350px;
  min-width: 250px;
  height: 56px;
  flex-direction: row;
`

export const InformationImageButtonExpand = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #b3b3b3;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 10;
  visibility: hidden;
  transition: all 0.05s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`

export const InformationImage = styled.div`
  width: 56px;
  height: 56px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  transition: all 0.3s ease-in;

  :hover {
    ${InformationImageButtonExpand} {
      visibility: visible;
    }
  }
`

export const Image = styled.img`
  background-color: #000;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const InformationMusic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 14px;
  max-width: 150px;
`

export const InformationMusicName = styled.div`
  text-align: left;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const InformationMusicArtist = styled.div`
  text-align: left;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: #b3b3b3;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const InformationMusicLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b3b3b3;
  cursor: pointer;
`
