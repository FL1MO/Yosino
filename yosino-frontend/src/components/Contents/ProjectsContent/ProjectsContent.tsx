import "./ProjectContent.css"
import PojectSlider from "../../ProjectsSlider/ProjectSlider"

const ProjectsContent = () => {
	return (
		<div className='projects-content'>
			<div className='projects-content__container container'>
				{/* <div className='projects-content__title'>
					<h1>
						Тут находятся проекты, которые созданы для тестирования, обучения
						или просто по рофлу:)
					</h1>
				</div> */}
				<PojectSlider />
			</div>
		</div>
	)
}

export default ProjectsContent
