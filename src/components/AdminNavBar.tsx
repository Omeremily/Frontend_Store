import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  
  return (
    <div className="sidebar">
      <div>
        <Nav className="flex-column">
          <Nav.Link
            data-test="manage-store"
            to="/AdminStoreAndManage"
            as={NavLink}
            style={{
              color: "darkgreen",
              fontWeight: "bold",
              fontSize: "22px",
              textAlign: "center",
              margin: "20px auto",
            }}
            className="nav-link-custom"
          >
            Manage Store
          </Nav.Link>
          <Nav.Link
            to="/UsersTable"
            as={NavLink}
            style={{
              color: "darkgreen",
              fontWeight: "bold",
              fontSize: "22px",
              textAlign: "center",
              margin: "20px auto",
            }}
            className="nav-link-custom"
          >
            Manage Users
          </Nav.Link>
        </Nav>     
      </div>
    </div>
  );
}
