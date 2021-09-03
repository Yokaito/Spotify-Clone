import React, { Suspense } from 'react'
import GlobalStyles from 'global/GlobalStyles'
import Routes from 'routes'

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
        <GlobalStyles />
      </Suspense>
    </>
  )
}

export default App
