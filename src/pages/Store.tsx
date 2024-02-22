import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Row, Col } from "react-bootstrap"
import StoreItem from "./StoreItem"
import {ItemContext } from "../context/ItemContext"
import { useContext } from "react"
import { StoreItemProps } from "../types/storeTypes"

export default function Store() {

    const {items}= useContext<any>(ItemContext)

    return (
      <>
        <NavBar />
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {items.map((item: StoreItemProps) => (
            <Col key={item.id}>
              <Link className="text-decoration-none" to={`/item/${item.id}`}>
                <StoreItem {...item} />
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }





// {/* <NavBar/>
// <div>
//     {
//         products.map((product)=><Link to={`/item/${product}`}>{product} &nbsp;</Link>)
//     }
// </div> */}
