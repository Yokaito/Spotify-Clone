import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 722px;
  width: 100%;
`

export const ControlsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ProgressBarContainer = styled.div`
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

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #535353;
`

type ProgressBarFilledProps = {
  currentProgress: number
}

export const ProgressBarFilled = styled.div.attrs<ProgressBarFilledProps>(
  ({ currentProgress }) => ({
    style: {
      width: `${currentProgress}%`
    }
  })
)<ProgressBarFilledProps>`
  height: 4px;
  border-radius: 2px;
  background-color: #b3b3b3;
  transition: width 0.3s ease-in;
`
/*
export const ProgressBarFilled = styled.div<ProgressBarFilledProps>`
  width: ${props => `${props.currentTime}%`};
  height: 4px;
  border-radius: 2px;
  background-color: #b3b3b3;
  transition: width 0.3s ease-in;
` */
