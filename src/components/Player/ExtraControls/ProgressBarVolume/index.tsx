import { type } from 'os'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setVolume, getConfigClient } from 'store/slices/configClientSlice'

import {
  ProgressBarVolumeStyled,
  ProgressBarVolumeFilledCircle,
  ProgressBarVolumeContainer,
  ProgressBarVolumeFilled
} from './styles'

export const ProgressBarVolume: React.FC = () => {
  const progressBarVolumeRef = React.useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { volume } = useAppSelector(state => getConfigClient(state))
  const [dragging, setDragging] = React.useState(false)
  const [percentageDrag, setPercentageDrag] = React.useState(0)

  const getPercentage = (currentValue: number, maxValue: number) => {
    return (currentValue / maxValue) * 100
  }

  const getNumber = (currentPercentage: number, maxValue = 1) => {
    return parseFloat((currentPercentage / maxValue / 100).toFixed(2))
  }

  const getPositionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const containerWidth = progressBarVolumeRef.current?.clientWidth || 0
    const variableValueWidth =
      progressBarVolumeRef.current?.getBoundingClientRect()?.left || 0
    const actualPosition = event.clientX - variableValueWidth
    const actualPositionPercentage = getPercentage(
      actualPosition,
      containerWidth
    )

    dispatch(setVolume(getNumber(actualPositionPercentage)))
  }

  const getDragPosition = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault()
    const containerWidth = progressBarVolumeRef.current?.clientWidth || 0
    const variableValueWidth =
      progressBarVolumeRef.current?.getBoundingClientRect()?.left || 0
    const actualPosition = event.clientX - variableValueWidth
    if (actualPosition <= 0) return
    if (actualPosition >= containerWidth) return
    const actualPositionPercentage = getPercentage(
      actualPosition,
      containerWidth
    )

    setPercentageDrag(actualPositionPercentage)
  }

  const getDragEnd = () => {
    dispatch(setVolume(getNumber(percentageDrag)))
    setDragging(false)
  }

  return (
    <>
      <ProgressBarVolumeStyled draggable={true}>
        <ProgressBarVolumeContainer
          ref={progressBarVolumeRef}
          onClick={getPositionClick}
          draggable={true}
        >
          <ProgressBarVolumeFilled
            draggable={true}
            currentProgress={
              (dragging ? percentageDrag : getPercentage(volume, 1)) - 100
            }
          />
        </ProgressBarVolumeContainer>
        <ProgressBarVolumeFilledCircle
          draggable={true}
          onDragEnterCapture={() => setDragging(true)}
          onDrag={getDragPosition}
          onDragEnd={getDragEnd}
          currentProgress={
            (dragging ? percentageDrag : getPercentage(volume, 1)) - 1
          }
        />
      </ProgressBarVolumeStyled>
    </>
  )
}

export default ProgressBarVolume
