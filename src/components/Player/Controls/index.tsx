import useAudioPlayer from 'hooks/useAudioPlayer'
import React from 'react'
import { Time } from 'functions/time'

import {
  ControlsStyled,
  ProgressBar,
  ProgressBarFilled,
  ProgressBarContainer,
  ProgressValues,
  Container
} from './styles'

export const Controls: React.FC = () => {
  const { currentTime, duration, setPlaying, currentPercent } = useAudioPlayer()

  return (
    <>
      <audio id="audio">
        <source src={process.env.PUBLIC_URL + '/audio/music.mp3'} />
      </audio>
      <ControlsStyled>
        <Container>
          <button onClick={() => setPlaying(false)}>Pausar</button>
          <button onClick={() => setPlaying(true)}>Iniciar</button>

          <ProgressBarContainer>
            <ProgressValues>{currentTime}</ProgressValues>
            <ProgressBar>
              <ProgressBarFilled currentProgress={currentPercent} />
            </ProgressBar>
            <ProgressValues>{duration}</ProgressValues>
          </ProgressBarContainer>
        </Container>
      </ControlsStyled>
    </>
  )
}

export default Controls
