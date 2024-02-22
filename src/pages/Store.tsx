import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import storeItems from "../data/item.json"
import { Row, Col } from "react-bootstrap"
import StoreItem from "./StoreItem"

export default function Store() {
    return (
      <>
        <NavBar />
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <Link className="text-decoration-none" to={`/item/${item.name}`}>
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
