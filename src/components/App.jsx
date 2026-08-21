import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import { useState, useEffect } from 'react'

import { api } from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
function App() {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    api.getUser().then((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
