import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const history = useHistory();

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/workintech/product/name/${searchTerm}`);
            setProducts(response.data);
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Error fetching search results:", error.response.data.message);  
                alert(error.response.data.message);  
            } else {
                console.error("Error fetching search results:", error.message); 
            }
        }
    };
    

    return (
        <div className="h-screen flex justify-center">
            <div className="flex flex-col bg-white gap-10">
                <img src="public/template-banner-for-online-store-with-shopping-vector-42935756.jpg" className="h-40" alt="Banner"/>
                <div className="flex justify-around items-center">
                    <div className="w-96 flex">
                        <label htmlFor="ara"> </label>
                        <input
                            id="ara"
                            name="ara"
                            placeholder="Aradığınız ürünün ismini yazınız."
                            className="w-2/3 border border-gray-300 rounded-md p-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row-reverse gap-4 ">
                        <button onClick={() => history.push("/chart")} className="font-Inter font-medium text-gray2 cursor-pointer border rounded-lg border-cyan-700 p-2">Sepet</button>
                        <button onClick={() => history.push("/profile")} className="font-Inter font-medium text-gray2 cursor-pointer border rounded-lg border-cyan-700 p-2">Giriş Yap</button>
                        <button onClick={handleSearch} className="font-Inter font-medium text-gray2 cursor-pointer border rounded-lg border-cyan-700 p-2">Ara</button>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <button onClick={() => history.push("/mostlyAdded")} className="font-Inter font-medium text-gray2 cursor-pointer border border-green-400 bg-green-200 rounded-md p-2 text-emerald-700">Sepete En çok Eklenenler</button>
                    <button onClick={() => history.push("/mostSold")} className="font-Inter font-medium text-gray2 cursor-pointer border border-red-400 bg-red-200 rounded-md p-2 text-red-700">Çok Satanlar</button>
                </div>
                {products.length > 0 && (
                    <div className="flex flex-col items-start border rounded-md p-4 bg-gray-50">
                        <h2 className="text-xl font-semibold mb-2">Ürün Detayları</h2>
                        {products.map((product) => (
                            <div key={product.id} className="mb-4">
                                <p><strong>İsim:</strong> {product.name}</p>
                                <p><strong>Açıklama:</strong> {product.description}</p>
                                <p><strong>Fiyat:</strong> {product.price} ₺</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
