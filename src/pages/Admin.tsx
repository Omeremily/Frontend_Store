import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import { Col, Row } from "react-bootstrap";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import AddProductForm from "../components/AddProductForm";
import NavBar from "../components/NavBar";

export default function Admin() {

    const { items , AddItemToStore } = useContext<any>(ItemContext);

    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem("admin")) {
            setIsAdminLogin(true);
        }
    }, [])

    if (!isAdminLogin) {
        return ( 
            <div>
                <h1>please log in</h1>
                <Link to="/login"></Link>
            </div>
        ) 
    }

    return (
        <div>
            <NavBar />
            <h1>Admin</h1>
            <AddProductForm AddItemToStore={AddItemToStore} />

            <h1>רשימת מוצרים</h1>
            <div>
            <Row md={2} xs={1} lg={3} className="g-3">
          {items.map((item: StoreItemProps) => (
            <Col key={item.id}>
              <Link className="text-decoration-none" to={`/item/${item.id}`}>
                <SpecificItem {...item} />
              </Link>
            </Col>
          ))}
        </Row>

        </div>
        </div>
    );
}