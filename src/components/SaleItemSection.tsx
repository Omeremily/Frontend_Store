import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import {ItemContext } from "../context/ItemContext"
import { useContext } from "react"
import { StoreItemProps } from "../types/storeTypes"
import SpecificItem from "./specificItem"

export default function SaleItemSection() {

    const {saleItems}= useContext<any>(ItemContext)

    return (
      <>
        <h1>Items on sale</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {saleItems.map((item: StoreItemProps) => (
            <Col key={item.id}>
              <Link className="text-decoration-none" to={`/item/${item.id}`}>
                <SpecificItem {...item} />
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }
