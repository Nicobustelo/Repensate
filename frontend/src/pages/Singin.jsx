import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Singin() {
	const [formData, setFormdata] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleChange = event => {
		setFormdata({ ...formData, [event.target.id]: event.target.value });
	};
	const handleSubmit = async event => {
		event.preventDefault();
		try {
			setLoading(true);
			const res = await fetch('/api/auth/singin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			setLoading(false);
			setError(false);
			navigate('/');
		} catch (error) {
			setLoading(false);
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 4000);
		}
	};
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">
				Iniciar Sesion
			</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Mail"
					id="email"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					id="password"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<button
					disabled={loading}
					className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					{loading ? 'Cargando...' : 'Iniciar Sesion'}
				</button>
			</form>
			<p className="text-red-700 mt-5">{error && 'Algo salio mal!'}</p>
			<div className="flex gap-2 mt-5">
				<p>No tenes una cuenta?</p>
				<Link to={'/sing-up'}>
					<span className="text-blue-500">Registrate</span>
				</Link>
			</div>
		</div>
	);
}
