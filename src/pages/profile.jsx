import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Profile () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                'http://localhost:9000/workintech/login',
                {}, 
                {
                    headers: {
                        'Authorization': `Basic ${btoa(`${email}:${password}`)}`
                    }
                }
            );
            const { token } = response.data;

            localStorage.setItem('authToken', token);

            console.log('Login successful', response.data);
            history.push('/'); 
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="flex items-center w-screen justify-center">
            <div className="h-screen w-1/4 flex flex-col gap-4 justify-start items-center">
                <form className="flex flex-col items-start gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-red-700">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-96 border border-gray-300 rounded-md p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="text-red-700">Şifre:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-96 border border-gray-300 rounded-md p-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex justify-between w-full">
                        <button type="submit" className="border border-green-400 bg-green-200 rounded-md p-2 text-emerald-700">Giriş Yap</button>
                        <div onClick={()=>history.push("/signUp")} className="border cursor-pointer border-blue-400 bg-blue-200 rounded-md p-2 text-blue-700">Üye Ol</div>
                    </div>
                </form>
            </div>
        </div>
    )
}