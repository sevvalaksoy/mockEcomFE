import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SignUp () {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });
    const history = useHistory();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:9000/workintech/auth/register/user', formData);
            console.log('Sign up successful:');
            history.push("/");
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="h-screen flex justify-center">
            <div className="h-screen w-1/4 flex flex-col gap-2 justify-start items-center">
                <form className="flex flex-col items-start gap-2" onSubmit={handleSubmit}>
                    <label htmlFor="fullName">İsim Soyisim:</label>
                    <input 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange}
                        className="w-96 border border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className="w-96 border border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="password">Şifre:</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        className="w-96 border border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="address">Adres:</label>
                    <input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange}
                        className="w-96 border border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="phone">Telefon:</label>
                    <input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        className="w-96 border border-gray-300 rounded-md p-2"
                    />
                    <button type="submit" className="border border-green-400 bg-green-200 rounded-md p-2 text-emerald-700">Üye Ol</button>
                </form>
            </div>
        </div>
    )
}