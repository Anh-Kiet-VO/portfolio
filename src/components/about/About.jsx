import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt="About Image"></img>
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Club</h5>
							<small>13+ Years at Real Madrid at the highest level</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Trophies</h5>
							<small>4x Champions League </small>
							<small>3x La Liga </small>
							<small>2x Copa Del Rey </small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>2021-2022 Stats</h5>
							<small>46 Goals & 14 Decisive pass</small>
						</article>
					</div>
					<p>
						Karim Benzema est considéré comme l'un des meilleurs attaquants de sa génération, et l'un des meilleurs joueurs
						à avoir évolué dans le championnat d'Espagne. Régulièrement nommé pour le Ballon d'or (4e en 2021),
						Karim Benzema est le meilleur buteur français de l'histoire de la Ligue des champions, le meilleur buteur français
						de l'histoire toutes compétitions confondues et le meilleur buteur français de l'histoire de la Liga.
						Il est actuellement le cinquième meilleur buteur de l'histoire de l'équipe de France.
					</p>

					<a href="#contact" className='btn btn-primary'>Me contacter</a>
				</div>
			</div>
		</section>
	)
}

export default About