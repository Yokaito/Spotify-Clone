import React from 'react'
import ProgressBarVolume from './ProgressBarVolume'

import { ExtraControlsStyled, ExtraControlsContainer } from './styles'
import VolumeIcon from './VolumeIcon'

export const ExtraControls: React.FC = () => {
  return (
    <>
      <ExtraControlsStyled>
        <ExtraControlsContainer>
          <VolumeIcon />
          <ProgressBarVolume />
        </ExtraControlsContainer>
      </ExtraControlsStyled>
    </>
  )
}

export default ExtraControls
