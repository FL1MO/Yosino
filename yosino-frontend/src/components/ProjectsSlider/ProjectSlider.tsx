import { useEffect, useState } from "react"
import SliderContentProps from "../../interfaces/SliderContentProps"
import SliderButton from "./SliderButton"

const ProjectSlider = () => {
	const sliderContents: SliderContentProps[] = [
		{
			name: "Github Explorer",
			title: "Первый проект Князя",
			URL: "./yosino-projects/Github-Explorer/index.html",
		},
		{
			name: "Ничего",
			title: "В разработке...",
			URL: "#",
		},
		{
			name: "Ничего",
			title: "В разработке...",
			URL: "#",
		},
	]
	useEffect(() => {
		const button = document.querySelector(".slider__button")
		// console.log(button)
		;(button as HTMLDivElement).style.background = "rgb(43, 51, 33)"
	}, [])
	const [title, setTitle] = useState(sliderContents[0].title)
	const [URL, setURL] = useState(sliderContents[0].URL)
	return (
		<>
			<div className='project-content__slider'>
				<div className='slider__buttons'>
					{sliderContents.map((button, id) => (
						<SliderButton
							name={button.name}
							title={button.title}
							URL={button.URL}
							setTitle={setTitle}
							setURL={setURL}
							key={id}
						/>
					))}
				</div>
				<div className='slider__content'>
					<div className='slider__content__title'>{title}</div>
					<a href={URL} className='slider__content__link'>
						Перейти на проект
					</a>
				</div>
			</div>
		</>
	)
}

export default ProjectSlider
