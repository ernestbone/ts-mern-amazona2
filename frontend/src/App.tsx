import { useState } from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>TsAmazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              cart
            </a>
            <a href="/signin" className="nav-link">
              Sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default App
