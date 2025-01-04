import "./HomeContent.css"
import animalsImage from "../../../assets/animals.jpg"

const HomeContent = () => {
	return (
		<>
			<div className='home-content'>
				<div className='home-content__container container'>
					<div className='home-content__title'>
						<h1>
							Я ебу собак! Всегда готов <br />
							Сразу трахнуть несколько котов <br />
							Да, я зоофил, не говори <br />
							Лучше мне собачек подари! <br />
							Я ебу собак! Всегда готов <br />
							Сразу трахнуть несколько котов <br />
							Да, я зоофил, не говори <br />
							Лучше мне собачек подари! <br />
							@Коньстанстин
						</h1>
					</div>
					<div className='home-content__image'>
						<img src={animalsImage} alt='cutie animals' />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeContent
