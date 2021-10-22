import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/home" to="/">
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/home" to="/about">
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/home" to="/profile">
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
