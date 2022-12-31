import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Staffing } from './components/Staffing';
import { Progressreport } from './components/Progressreport';
import { Photogallery } from './components/Photogallery';
import { Project } from './components/Project';
import { Generatereport } from './components/Generatereport';
import { Logout } from './components/Logout'


function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
				    <Route path="/" element={<Staffing />} />
					<Route path="/progressreport" element={<Progressreport />} />
					<Route path="/photogallery" element={<Photogallery />} />
					<Route path="/project" element={<Project />} />
					<Route path="/generatereport" element={<Generatereport />} />
					<Route path="/logout" element={<Logout />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;