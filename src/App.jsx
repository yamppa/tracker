
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Homepage.jsx'
import About from './About.jsx'
import Stats from './Stats.jsx'


function App() {

  return (
    <>
      <Router>
          <Header/>
          <Routes>
            <Route path='/stats' element={<Stats/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Homepage/>} />
            
          </Routes>
          
      </Router>
    
    
    
    </>
  )
}

export default App