import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a rhef="https://linkedin.com" target="_blank"><BsLinkedin /></a>
			<a rhef="https://github.com" target="_blank"><FaGithub /></a>
		</div>
	)
}

export default HeaderSocials