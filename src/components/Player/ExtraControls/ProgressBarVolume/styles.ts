import styled from 'styled-components'

export const ProgressBarVolumeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #535353;
`

type ProgressBarVolumeFilledProps = {
  currentProgress: number
}

export const ProgressBarVolumeFilled = styled.div.attrs<ProgressBarVolumeFilledProps>(
  ({ currentProgress }) => ({
    style: {
      transform: `translateX(${currentProgress}%)`
    }
  })
)<ProgressBarVolumeFilledProps>`
  height: 4px;
  border-radius: 2px;
  background-color: #b3b3b3;
  position: relative;
  width: 100%;
  transform: translateY(0);
`

export const ProgressBarVolumeFilledCircle = styled.div.attrs<ProgressBarVolumeFilledProps>(
  ({ currentProgress }) => ({
    style: {
      left: `${currentProgress}%`
    }
  })
)<ProgressBarVolumeFilledProps>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: -2px;
  z-index: 100;
  display: none;

  :hover {
    cursor: grab;
  }

  :active {
    cursor: grabbing;
  }
`

export const ProgressBarVolumeStyled = styled.div`
  width: 93px;
  height: 8px;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    ${ProgressBarVolumeFilled} {
      background-color: #1db954;
    }
    ${ProgressBarVolumeFilledCircle} {
      display: block;
    }
  }
`
