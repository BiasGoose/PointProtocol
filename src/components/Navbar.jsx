import React from 'react'

const Navbar = () => {
	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
			<div className='flex justify-between items-center py-6 md:justify-between md:space-x-10'>
				<div className='flex items-center space-x-2'>
					<div className='bg-primary w-[40px] h-[40px] rounded-full'></div>
					<p className='text-2xl font-bold'>Point Protocol</p>
				</div>
				<div className='hidden md:flex space-x-5 font-semibold'>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Home</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>About</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Team</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Tech</a>
					<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Docs</a>
				</div>
				<div className='hidden md:flex justify-center'>
					<button className='bg-primary rounded-lg text-white w-[100px] h-[40px] border-2 duration-200 hover:bg-transparent hover:border-primary hover:text-primary font-bold'>Build</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar