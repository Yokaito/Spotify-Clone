import React from 'react'
import useAudioPlayer from 'hooks/useAudioPlayer'
import { useAppSelector } from 'store/hooks'
import { getCurrentSong } from 'store/slices/currentSongSlice'

import {
  ProgressBarStyled,
  ProgressValues,
  ProgressBarValues,
  ProgressBarFilled,
  ProgressBarFilledCircle,
  ProgressBarFilledContainer
} from './styles'

export const ProgressBar: React.FC = () => {
  const { url } = useAppSelector(state => getCurrentSong(state))
  const [dragging, setDragging] = React.useState(false)
  const [percentageDrag, setPercentageDrag] = React.useState(0)
  const { currentTime, currentPercent, duration, setCustomTime } =
    useAudioPlayer(url)

  const progressBarRef = React.useRef<HTMLDivElement>(null)

  const getPositionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerWidth = progressBarRef.current?.clientWidth || 0
    const variableValueWidth = progressBarRef.current?.offsetLeft || 0
    const actualPosition = event.clientX - variableValueWidth
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
      <ProgressBarStyled>
        <ProgressValues>{currentTime}</ProgressValues>
        <ProgressBarValues
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
            currentProgress={(dragging ? percentageDrag : currentPercent) - 1}
            onDragEnterCapture={() => setDragging(true)}
            onDrag={getDragPosition}
            onDragEndCapture={getDragEnd}
          />
        </ProgressBarValues>
        <ProgressValues>{duration}</ProgressValues>
      </ProgressBarStyled>
    </>
  )
}

export default ProgressBar
