import { Card } from 'react-bootstrap';
import { StoreItemProps } from '../types/storeTypes';
import { formatCurrency } from '../utilities/formatCurrency';

export default function StoreItem({id, name, price,salePrice, imgUrl}: StoreItemProps)
 {

  return (
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
            <span className='ms-2 text-muted text-decoration-line-through' style={{fontSize: '0.8em'}}>{formatCurrency(price)}</span>
            <span className='ms-2 text-muted'>{formatCurrency(salePrice)}</span>
          </span>
        </div>
      </Card.Body>



    </Card>
</>

  )
}
