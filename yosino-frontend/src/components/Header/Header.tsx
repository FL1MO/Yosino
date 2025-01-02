import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
	const [path, setPath] = useState(window.location.pathname)
	const changePath = () => {
		setPath(window.location.pathname)
	}
	const activeStyles = (str: string) => {
		if (path !== str) return {}
		return {
			color: "black",
		}
	}
	return (
		<header>
			<div className='header__container container'>
				<ul>
					<li onClick={changePath}>
						<Link style={activeStyles("/")} to='/'>
							Главная
						</Link>
					</li>
					<li onClick={changePath}>
						<Link style={activeStyles("/projects")} to='/projects'>
							Наши проекты
						</Link>
					</li>
					<li onClick={changePath}>
						<Link style={activeStyles("/about")} to='/about'>
							О нас
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
