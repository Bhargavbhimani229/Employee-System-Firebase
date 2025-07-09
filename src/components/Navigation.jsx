
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

export default function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-brand-text">
          <i className="bi bi-person-badge-fill me-2"></i>EmpManager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">📋 Employee Table</Nav.Link>
            <Nav.Link as={Link} to="/add" className="nav-link-custom">➕ Add Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
