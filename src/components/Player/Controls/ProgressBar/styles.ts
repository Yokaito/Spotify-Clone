import styled from 'styled-components'

export const ProgressBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const ProgressValues = styled.span`
  color: rgb(179, 179, 179);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  text-transform: none;
`

type ProgressBarFilledProps = {
  currentProgress: number
  dragging?: boolean
}

export const ProgressBarFilledContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #535353;

  :active {
    cursor: grabbing;
  }

  :-moz-drag-over {
    cursor: grabbing;
  }
`

export const ProgressBarFilled = styled.div.attrs<ProgressBarFilledProps>(
  ({ currentProgress }) => ({
    style: {
      transform: `translateX(${currentProgress}%)`
    }
  })
)<ProgressBarFilledProps>`
  height: 4px;
  border-radius: 2px;
  background-color: #b3b3b3;
  position: relative;
  width: 100%;
  transform: translateY(0);
`

export const ProgressBarFilledCircle = styled.div.attrs<ProgressBarFilledProps>(
  ({ currentProgress }) => ({
    style: {
      left: `${currentProgress}%`
    }
  })
)<ProgressBarFilledProps>`
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
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  :-moz-drag-over {
    cursor: grabbing;
  }
`

export const ProgressBarValues = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;

  :hover {
    ${ProgressBarFilled} {
      background-color: #1db954;
    }
    ${ProgressBarFilledCircle} {
      display: block;
    }
  }
`
