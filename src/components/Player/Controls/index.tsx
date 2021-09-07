import useAudioPlayer from 'hooks/useAudioPlayer'
import React from 'react'
import { getCurrentSong } from 'store/slices/currentSongSlice'
import { useAppSelector } from 'store/hooks'

import {
  ControlsStyled,
  ProgressBar,
  ProgressBarFilled,
  ProgressBarContainer,
  ProgressValues,
  Container,
  ProgressBarFilledCircle,
  ProgressBarFilledContainer
} from './styles'

export const Controls: React.FC = () => {
  const { url } = useAppSelector(state => getCurrentSong(state))
  const [dragging, setDragging] = React.useState(false)
  const [percentageDrag, setPercentageDrag] = React.useState(0)

  const {
    currentTime,
    currentPercent,
    duration,
    setPlayingVerify,
    setCustomTime
  } = useAudioPlayer(url)
  const progressBarRef = React.useRef<HTMLDivElement>(null)

  const getPositionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerWidth = progressBarRef.current?.clientWidth || 0
    const variableValueWidth = progressBarRef.current?.offsetLeft || 0
    const actualPosition = e.clientX - variableValueWidth
    const actualPositionPercentage = (actualPosition / containerWidth) * 100
    setCustomTime(actualPositionPercentage)
  }

  const getDragPosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const containerWidth = progressBarRef.current?.clientWidth || 0
    const variableValueWidth = progressBarRef.current?.offsetLeft || 0
    const actualPosition = e.clientX - variableValueWidth
    if (actualPosition < 0) return
    if (actualPosition > containerWidth) return
    const actualPositionPercentage = (actualPosition / containerWidth) * 100
    setPercentageDrag(actualPositionPercentage)
  }

  const getDragEnd = () => {
    setCustomTime(percentageDrag)
    setDragging(false)
  }

  return (
    <>
      <ControlsStyled>
        <Container>
          <button onClick={() => setPlayingVerify(false)}>Pause</button>
          <button onClick={() => setPlayingVerify(true)}>Iniciar</button>

          <ProgressBarContainer>
            <ProgressValues>{currentTime}</ProgressValues>
            <ProgressBar
              onClick={getPositionClick}
              ref={progressBarRef}
              onDragEnterCapture={() => setDragging(true)}
              onDrag={getDragPosition}
              onDragEndCapture={getDragEnd}
            >
              <ProgressBarFilledContainer
                onDragEnterCapture={() => setDragging(true)}
                onDrag={getDragPosition}
                onDragEndCapture={getDragEnd}
              >
                <ProgressBarFilled
                  currentProgress={
                    -100 + (dragging ? percentageDrag : currentPercent)
                  }
                />
              </ProgressBarFilledContainer>
              <ProgressBarFilledCircle
                currentProgress={
                  (dragging ? percentageDrag : currentPercent) - 1
                }
                onDragEnterCapture={() => setDragging(true)}
                onDrag={getDragPosition}
                onDragEndCapture={getDragEnd}
              />
            </ProgressBar>
            <ProgressValues>{duration}</ProgressValues>
          </ProgressBarContainer>
        </Container>
      </ControlsStyled>
    </>
  )
}

export default Controls
