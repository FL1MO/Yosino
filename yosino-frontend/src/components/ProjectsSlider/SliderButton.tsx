import { MouseEvent } from "react"
import SliderButtonProps from "../../interfaces/SliderButtonProps"

const SliderButton = ({
	name,
	title,
	URL,
	setTitle,
	setURL,
}: SliderButtonProps) => {
	const activeButton = (event: MouseEvent) => {
		const buttons = document.getElementsByClassName("slider__button")
		for (let button of buttons) {
			;(button as HTMLDivElement).style.background = "rgb(71, 84, 53)"
		}
		const { target } = event
		console.log(target)
		;(target as HTMLDivElement).style.background = "rgb(43, 51, 33)"
		setTitle(title)
		setURL(URL)
	}
	return (
		<>
			<div className='slider__button' onClick={activeButton}>
				{name}
			</div>
		</>
	)
}

export default SliderButton
