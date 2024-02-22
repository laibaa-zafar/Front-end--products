import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let user = JSON.parse(localStorage.getItem("user-info")) 
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/register"); 
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Nav className="me-auto navbar-wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">Product List</Link>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
              <Link to="/search">Search Product</Link>

            </>
          ) : (
            <>
              <Link to="/register">Register Product</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ?
        <Nav>
          {user && (
            <NavDropdown title={user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
        :null}
      </Navbar>
    </div>
  );
};

export default Header;
