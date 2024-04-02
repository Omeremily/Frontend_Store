import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import AddProductForm from "../components/AddProductForm";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";


export default function AdminStoreAndManage()
    {

    const { items , AddItemToStore } = useContext<any>(ItemContext);

    return (
        <>
        <AddProductForm AddItemToStore={AddItemToStore} />
    
        <h1>רשימת מוצרים</h1>
            <div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {items.map((item: StoreItemProps) => (
                    <Col key={item.id}>
                    <Link className="text-decoration-none" to={`/item/${item.id}`}>
                        <SpecificItem {...item} />
                    </Link>
                    <Link  to="/edit-item-data"><button className="btn btn-danger">Edit</button></Link>
                    </Col>
                    ))}
                </Row>
    
            </div>
        </>

    )


}