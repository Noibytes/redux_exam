import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Saved from './Saved'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
 

  return (
    <>

    


    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white'>Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className='me-4 text-white'style={{marginLeft:"1000px"}}>Home</Link> </Nav.Link>
            <Nav.Link><Link to="/saved" className=' text-white'>Saved Profiles</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    

    

   <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/saved" element={<Saved />} />
    </Routes>
  
    

      
    </>
  )
}

export default App
