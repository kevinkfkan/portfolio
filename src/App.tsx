import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Profile from './components/Profile'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Profile />
        <Work />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
