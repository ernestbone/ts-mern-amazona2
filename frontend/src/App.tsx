import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { sampleProducts } from './data'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'

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
          <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                ></img>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default App
