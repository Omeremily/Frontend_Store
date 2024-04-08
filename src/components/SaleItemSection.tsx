import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";
import { useContext } from "react";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "./specificItem";

export default function SaleItemSection() {
  const { saleItems } = useContext<any>(ItemContext);

  return (
    <>
      <h1 style={{ margin: '20px auto', textAlign: 'center', fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#333' }}>Items on sale</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 mx-auto">
        {saleItems.map((item: StoreItemProps) => (
          <React.Fragment key={item.id}>
            {item.salePrice && ( //מציג רק אם הם במבצע
              <Col>
                <Link className="text-decoration-none" to={`/item/${item.id}`}>
                  <SpecificItem {...item} />
                </Link>
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </>
  );
}


