import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  
  return (
    <div className="sidebar">
      <div>
      <Nav className="flex-column">
        <Nav.Link to="/AdminStoreAndManage" as={NavLink}>Manage Store</Nav.Link>
        <Nav.Link to="/users-manage" as={NavLink}>UsersManage</Nav.Link>
        <Nav.Link to="/dashboard" as={NavLink}>Dashboard</Nav.Link>
        <Nav.Link to="/add-an-item" as={NavLink}>AddAnItem</Nav.Link>
      </Nav>     
      </div>
    </div>
  );
}
