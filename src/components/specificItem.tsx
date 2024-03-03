import { Link } from "react-router-dom";
import { StoreItemProps } from "../types/storeTypes";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import NavBar from "./NavBar";
import '../css/SpecificItemPage.css'

export default function SpecificItem({
  id,
  name,
  imgUrl,
  price,
  salePrice,
  longDescription,
  shortDescription,
  onlyToSpecific,
}: StoreItemProps) {


  if(!id){
    return(
      <>
        <h1>Not found</h1>
        <Link to="/">Home</Link>
      </>
    )
  }

    return(
      <>
        {onlyToSpecific && (
              <>
                <NavBar />
              </>
          )}
      <div className={onlyToSpecific ? 'specific-containter' : ''}>

        <Card>
            <Card.Img
            className={onlyToSpecific ? 'specific-image' : ''}
            variant="top" 
            src={imgUrl} 
            height="200px" 
            style={{objectFit:"cover"}} 
            />
        <Card.Body className="d-flex flex-column">
            <div className='d-flex justify-content-between w-100 align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='d-flex align-items-center'>
                <span className='ms-2 text-muted text-decoration-line-through' style={{fontSize: '0.8em'}}>{formatCurrency(price ?? 0)}</span>
                <span className='ms-2 text-muted'>{formatCurrency(salePrice ?? 0)}</span>
                </span>
            </div>
            {onlyToSpecific && (
              <>
                <button >Add to Cart</button>
                <span className="mb-2">{shortDescription}</span>
                <span className="text-muted">{longDescription}</span>
              </>
          )}
      </Card.Body>
    </Card>
    </div>
    </>

    )
  }
