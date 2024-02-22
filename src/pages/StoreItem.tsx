import { Card } from 'react-bootstrap';
import { StoreItemProps } from '../types/storeTypes';
import { formatCurrency } from '../utilities/formatCurrency';

export default function StoreItem({id, name, price, imgUrl}: StoreItemProps)
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
        <div className='d-flex justify-content-between w-100 align-items-baseline mb-4 '>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </div>
      </Card.Body>

    </Card>
</>

  )
}
