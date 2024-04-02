import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  
  return (
    <div className="sidebar">
      <div>
      <Nav className="flex-column">
        <Nav.Link to="/AdminStoreAndManage" as={NavLink}>Manage Store</Nav.Link>
        <Nav.Link to="/UsersTable" as={NavLink}>Manage Users</Nav.Link>
        <Nav.Link to="/dashboard" as={NavLink}>Dashboard</Nav.Link>
      </Nav>     
      </div>
    </div>
  );
}
