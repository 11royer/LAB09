import { useEffect, useState } from "react";
import "../Card.css";

export const Card =() => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            <p>description: {product.description}</p>
            <p>UDS$: {product.price}</p>
        </div>
    )
};

