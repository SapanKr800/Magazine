import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { NewsContextProvider } from './context/NewsContext'
import Footer from './components/Footer'
import LeftSidebar from './components/LeftSidebar'


const App = () => {
  return (
    <>

      <NewsContextProvider>

        <Navbar />
        <News />
        <Footer />

      </NewsContextProvider>




    </>
  )
}

export default App