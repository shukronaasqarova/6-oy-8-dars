import React, { useState, useRef } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    const handleAddProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            category_id: categoryRef.current.value,
        };

        fetch("https://auth-rg69.onrender.com/api/products", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => {
            setProducts([...products, data]);
            nameRef.current.value = '';
            descriptionRef.current.value = '';
            priceRef.current.value = '';
            categoryRef.current.value = '';
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6" onSubmit={handleAddProduct}>
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">Add Product</h2>
                <input className="border border-gray-300 rounded-md p-4" ref={nameRef} type="text" placeholder="Product Name" required />
                <input className="border border-gray-300 rounded-md p-4" ref={descriptionRef} type="text" placeholder="Description" required />
                <input className="border border-gray-300 rounded-md p-4" ref={priceRef} type="number" placeholder="Price" required />
                <input className="border border-gray-300 rounded-md p-4" ref={categoryRef} type="text" placeholder="Category ID" required />
                <button type="submit" className="bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition-all duration-200 w-full">Add Product</button>
            </form>

            <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
                {products.map((product) => (
                    <div key={product.id} className="border border-gray-300 p-4 rounded-md bg-white shadow-md">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="font-bold">${product.price}</p>
                        <p>Category ID: {product.category_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
