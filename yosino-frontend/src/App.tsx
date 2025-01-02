import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Header from "./components/Header/Header"
import About from "./pages/About"
import Projects from "./pages/Projects"

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</>
	)
}

export default App
