import axios from "axios";
import { useState, useEffect } from "react";

export default function MostlyAdded() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:9000/workintech/product/mostlyAdded');
                setProducts(response.data);
            } catch (error) {
                setError("An error occurred while fetching the products.");
                console.error(error); 
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="h-screen flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Sepete En Çok Eklenenler</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && products.length === 0 && <p>No products found.</p>}
            {!loading && !error && products.length > 0 && (
                <ul className="w-full max-w-4xl">
                    {products.map((product) => (
                        <li key={product.id} className="border-b border-gray-300 py-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p><strong>İsim:</strong> {product.name}</p>
                            <p><strong>Açıklama:</strong> {product.description}</p>
                            <p><strong>Fiyat:</strong> {product.price} ₺</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
