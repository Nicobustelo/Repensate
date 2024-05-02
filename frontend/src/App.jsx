import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Singup from './pages/Singup';
import Singin from './pages/Singin';
import Header from './components/Header';

export default function App() {
	return (
		<div className='bg-slate-50'>
			<BrowserRouter>
				<div className=' h-full'>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/sing-in" element={<Singin />} />
						<Route path="/sing-up" element={<Singup />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</ div>
			</BrowserRouter>
		</div>
	);
}
