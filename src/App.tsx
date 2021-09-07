import React, { Suspense } from 'react'
import GlobalStyles from 'global/GlobalStyles'
import Routes from 'routes'
import { Provider } from 'react-redux'
import store from 'store/store'

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
          <GlobalStyles />
        </Suspense>
      </Provider>
    </>
  )
}

export default App
