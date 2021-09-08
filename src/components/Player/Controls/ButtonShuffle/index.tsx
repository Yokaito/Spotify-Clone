import React from 'react'

import { ButtonShuffleStyled } from './styles'
import { setShuffle, getConfigClient } from 'store/slices/configClientSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export const ButtonShuffle: React.FC = () => {
  const { shuffle } = useAppSelector(state => getConfigClient(state))
  const dispatch = useAppDispatch()
  return (
    <>
      <ButtonShuffleStyled
        active={shuffle}
        onClick={() => dispatch(setShuffle(!shuffle))}
      >
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
          ></path>
        </svg>
      </ButtonShuffleStyled>
    </>
  )
}

export default ButtonShuffle
