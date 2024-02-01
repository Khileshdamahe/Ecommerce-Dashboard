import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate('/');
        }
       
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" value={name} placeholder="Enter product name" className="inputBox" onChange={(e) => { setName(e.target.value) }} />
            <input type="text" value={price} placeholder="Enter product price" className="inputBox" onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" value={category} placeholder="Enter product category" className="inputBox" onChange={(e) => { setCategory(e.target.value) }} />
            <input type="text" value={company} placeholder="Enter product company" className="inputBox" onChange={(e) => { setCompany(e.target.value) }} />
            <button className="appButton" onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;