import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	function darkModeToggle() {
		const mode = localStorage.getItem("darkMode")
		console.log(mode)

		if (mode === "dark") {
			localStorage.setItem("darkMode", "light")
			document.documentElement.classList.remove('dark')
		} else if (mode === "light") {
			localStorage.setItem("darkMode", "dark")
			document.documentElement.classList.add('dark')
		} else {
			localStorage.setItem("darkMode", "dark")
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		darkModeToggle()
	}, [])

	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
			<div className='flex justify-between items-center py-6 md:justify-between md:space-x-10'>
				<div className='flex items-center space-x-2'>
					<div className='bg-primary dark:bg-white w-[40px] h-[40px] rounded-full'></div>
					<p className='text-2xl font-bold text-primary dark:text-white'>Point Protocol</p>
				</div>
				<div className='hidden md:flex space-x-5 font-semibold'>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary p-2 rounded-lg text-primary dark:text-white'>Home</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary p-2 rounded-lg text-primary dark:text-white'>About</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary p-2 rounded-lg text-primary dark:text-white'>Team</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary p-2 rounded-lg text-primary dark:text-white'>Tech</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary p-2 rounded-lg text-primary dark:text-white'>Docs</a>
				</div>
				<div className='flex items-center space-x-3'>
					<div className='hidden md:flex justify-center'>
						<button className='bg-primary dark:bg-white dark:hover:text-white dark:text-primary dark:hover:bg-transparent dark:border-2 dark:border-white rounded-lg text-white w-[100px] h-[40px] border-2 duration-200 hover:bg-transparent hover:border-primary hover:text-primary font-bold'>Build</button>
					</div>
					<div className='hidden md:flex cursor-pointer duration-150 hover:scale-105' onClick={() => darkModeToggle()}>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.0023 2L20.9548 5.9525H28.0475V13.0445L32 16.997L28.0475 20.9555V28.0475H20.9555L17.003 32L13.0445 28.0475H5.9525V20.9555L2 16.9977L5.9525 13.0452V5.9525H13.0445L17.0023 2Z" stroke="#111111" className='dark:stroke-white' strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M19.25 11.75C19.25 17.75 15.5 18.5 11.75 18.5C11.75 21.5 16.625 24.5 20.75 21.5C24.875 18.5 22.25 11.75 19.25 11.75Z" stroke="#111111" className='dark:stroke-white' strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
				<div className='flex md:hidden'>
					{menuOpen ? (
						<AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} className='w-15 cursor-pointer text-primary dark:text-white' />
					) : <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} className='w-15 cursor-pointer text-primary dark:text-white' />}
				</div>
			</div>
		</div>
	)
}

export default Navbar