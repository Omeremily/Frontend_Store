import { Card } from 'react-bootstrap';
import { StoreItemProps } from '../types/storeTypes';
import { formatCurrency } from '../utilities/formatCurrency';
//import { useContext } from 'react';
//import { useParams } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import SpecificItem from '../components/specificItem';

export default function StoreItem()
 {

  let {id } = useParams();
  const {items} = useContext<any>(ItemContext);

  const [product, setProduct] = useState<StoreItemProps|null>(null);

  useEffect(()=>{
    setProduct(items.find((item:StoreItemProps)=> item.id == Number(id)))
  }, [])

  return (
<>
    <SpecificItem {...product} onlyToSpecific={Boolean(product)}/>
</>

  )
}
