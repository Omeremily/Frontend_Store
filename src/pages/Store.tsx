import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Row, Col } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";
import { useContext, useEffect, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import '../css/Store.css';

export default function Store() {
    const { items } = useContext<any>(ItemContext);
    const [itemsToShow, setItemsToShow] = useState<StoreItemProps[]>([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
  
    function sortByPrice() {
        if (sortOrder === 'asc') {
            setItemsToShow([...itemsToShow.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))]);
        } else {
            setItemsToShow([...itemsToShow.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))]);
        }
    }
    
    useEffect(() => {
        if (search === '') {
            setItemsToShow(items);
        } else {
            setItemsToShow(items.filter((item: StoreItemProps) => item.name?.toLowerCase().includes(search)))
        }
    }, [search, items])

    return (
        <>
            <NavBar />
            <h1>Store</h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        className="searchBar"
                        placeholder="Search..."
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select 
                        value={sortOrder} 
                        onChange={(e) => { setSortOrder(e.target.value); sortByPrice(); }}
                        style={{ 
                            marginLeft: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ced4da'
                        }}
                    >
                        <option value="">Sort By:</option>
                        <option value="asc">Sort By: High to Low</option>
                        <option value="desc">Sort By: Low to High</option>
                    </select>
                </div>
            </div>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 mx-auto">
                {itemsToShow.map((item: StoreItemProps) => (
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
