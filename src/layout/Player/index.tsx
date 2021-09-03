import Controls from 'components/Player/Controls'
import ExtraControls from 'components/Player/ExtraControls'
import Information from 'components/Player/Information'
import React from 'react'

import { PlayerStyled } from './styles'

const Player: React.FC = () => {
  return (
    <>
      <PlayerStyled>
        <Information />
        <Controls />
        <ExtraControls />
      </PlayerStyled>
    </>
  )
}

export default Player
