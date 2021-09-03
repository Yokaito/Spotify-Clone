import LibraryList from 'components/LibraryList'
import Spacer from 'components/Spacer'
import React from 'react'
import Item from './Item'

import { NavBarStyled } from './styles'

const Navbar: React.FC = () => {
  return (
    <>
      <NavBarStyled>
        <Item title="início" icon="home" active={true} />
        <Item title="buscar" icon="search" active={false} />
        <Item title="sua biblioteca" icon="library" active={false} />
        <Spacer height={1} margin={10} />
        <LibraryList />
      </NavBarStyled>
    </>
  )
}

export default Navbar
