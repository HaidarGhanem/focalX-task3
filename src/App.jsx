import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactUs from './Components/ContactUs/ContactUs'
import Deal from './Components/Deal/Deal'
import Featured from './Components/Featured/Featured'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import InfoBar from './Components/Infobar/Inforbar'
import Navbar from './Components/Navbar/Navbar'
import Properties from './Components/Properties/Properties'
import VideoView from './Components/VideoView/VideoView'
import PropsPage from './Components/PropsPage/PropsPage'
import PropPage from './Components/PropPage/PropPage'
import ContactPage from './Components/ContactPage/ContactPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <InfoBar />
            <Navbar />
            <Hero />
            <Featured />
            <VideoView />
            <Deal />
            <Properties />
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path='/properties' element={
          <PropsPage />
        } />
        <Route path='/PropertyDetails' element={
          <PropPage />
        } />
        <Route path='/Contact' element={
          <ContactPage />
        } />
      </Routes>
    </>
  )
}

export default App