import { useState } from "react"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

export default function Store() {

    const [products]= useState<string[]>([
        'product1',
        'product2',
        'product3',
        'product4',
        'product5',
    ])
  return (
    <>
        <Nav/>
        <div>
            {
                products.map((product)=><Link to={`/item/${product}`}>{product} &nbsp;</Link>)
            }
        </div>
    </>
  )
}
