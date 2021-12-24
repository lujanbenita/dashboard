import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import App from './App'

import { Provider as ProviderRedux } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistedStore} from './redux/store'

ReactDOM.render(
  <ProviderRedux store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </ProviderRedux>,
  document.getElementById('root')
)
