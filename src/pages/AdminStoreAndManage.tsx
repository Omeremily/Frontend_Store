import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import AddProductForm from "../components/AddProductForm";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

// לאחר לחיצה על מנג' סטור בדף האדמין
export default function AdminStoreAndManage()
{
    // הוספת מוצרים מהאדמין לדף החנות
    const { items , AddItemToStore } = useContext<any>(ItemContext);

    return (
        <>
        {/* הצגת קומפוננטת טופס הוספת מוצר לחנות */}
        <AddProductForm data-test="add-product-form" AddItemToStore={AddItemToStore} />

        {/* הצגת המוצרים בחנות עם אופציה לכפתור עריכה של כל מוצר */}
        <h1>Products in Store</h1>
            <div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {items.map((item: StoreItemProps) => (
                    <Col key={item.id}>
                    <Link className="text-decoration-none" to={`/item/${item.id}`}>
                        <SpecificItem data-test={`specific-item-${item.id}`} {...item} />
                    </Link>
                    <Link  to="/edit-item-data"><button className="btn btn-danger">Edit</button></Link>
                    </Col>
                    ))}
                </Row>
            </div>
        </>

    )


}