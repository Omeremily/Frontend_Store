import { Link, useParams } from "react-router-dom";
import {ItemContext} from "../context/ItemContext";
import { useContext, useEffect, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export default function SpecificItem({id, name, imgUrl, price, salePrice}:StoreItemProps)
{

  const {items} = useContext<any>(ItemContext);

  //const [product, setProduct] = useState<StoreItemProps|null>(null);

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
        <Card>
            <Card.Img 
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
      </Card.Body>
    </Card>
      </>
    )
  }
