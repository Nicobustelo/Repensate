import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Singup() {
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
			const res = await fetch('/api/auth/singup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			setLoading(false);
			setError(false);
			navigate('/sing-in');
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
			<h1 className="text-3xl text-center font-semibold my-7">Sing Up</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					id="username"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="email"
					placeholder="Email"
					id="email"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					id="password"
					className="bg-slate-100 p-3 rounded-lg"
					onChange={handleChange}
				/>
				<button
					disabled={loading}
					className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					{loading ? 'Loading...' : 'Sing Up'}
				</button>
			</form>
			<p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to={'/sing-in'}>
					<span className="text-blue-500">Sing In</span>
				</Link>
			</div>
		</div>
	);
}
