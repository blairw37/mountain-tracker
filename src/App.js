import './App.css'
import NavBar from './components/NavBar'
import MountainCards from './components/MountainCards'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Container">
        <Container fluid>
          <MountainCards></MountainCards>
        </Container>
      </div>
    </div>
  )
}

export default App;