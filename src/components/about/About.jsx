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
							<h5>Experience</h5>
							<small>13+ Years Experience</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>A propos</h5>
							<small>13+ Years Experience</small>
						</article>
					</div>
					<p>Le Glock 19 est un pistolet semi-automatique conçu et fabriqué depuis 1988 par l'entreprise Glock pour
						les forces militaires et les services de police. C'est l'équivalent du Glock 17, en version compacte.
						Il est considéré comme l'un des meilleurs pistolets semi-automatiques de nos jours, en raison de sa robustesse,
						de sa fiabilité et de sa simplicité de mise en œuvre
					</p>

					<a href="#contact" className='btn btn-primary'>Me contacter</a>
				</div>
			</div>
		</section>
	)
}

export default About