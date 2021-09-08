import React from 'react'
import ProgressBar from './ProgressBar'
import ButtonPlay from './ButtonPlay'
import ButtonChangeMusic from './ButtonChangeMusic'
import ButtonShuffle from './ButtonShuffle'

import {
  ControlsStyled,
  ControlsStyledContainer,
  ControlsStyledRow
} from './styles'
import ButtonRepeat from './ButtonRepeat'

export const Controls: React.FC = () => {
  return (
    <>
      <ControlsStyled>
        <ControlsStyledContainer>
          <ControlsStyledRow>
            <ButtonShuffle />
            <ButtonChangeMusic previous={true} />
            <ButtonPlay />
            <ButtonChangeMusic next={true} />
            <ButtonRepeat />
          </ControlsStyledRow>
          <ProgressBar />
        </ControlsStyledContainer>
      </ControlsStyled>
    </>
  )
}

export default Controls
