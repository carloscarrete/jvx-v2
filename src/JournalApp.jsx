import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

import {store} from './store'

const JournalApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}

export default JournalApp