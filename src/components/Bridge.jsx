import React from 'react'

const Bridge = () => {
	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-12">
			<div>
				<p className='font-extrabold text-[40px] text-primary dark:text-white'>Bridging Ecosystems</p>
				<p className='font-semibold text-primary dark:text-white'>Point Protocols’s interoperability frees users from being locked on a single platform. The future of web3 is a multi-chain ecosystem, and Harmony’s bridges can connect any Proof-of-Work and Proof-of-Stake chains.</p>
			</div>
			<div className='flex justify-between flex-col md:flex-row mt-3'>
				<button className='mt-3 bg-primary rounded-lg text-white dark:bg-white dark:hover:text-white dark:text-primary dark:hover:bg-transparent dark:border-2 
																dark:border-white border-2 w-full md:w-[200px] h-[50px] duration-200 hover:bg-transparent hover:border-primary hover:text-primary font-bold'>Bitcoin Bridge</button>
				<button className='mt-3 bg-primary rounded-lg text-white dark:bg-white dark:hover:text-white dark:text-primary dark:hover:bg-transparent dark:border-2 
																dark:border-white border-2 w-full md:w-[200px] h-[50px] duration-200 hover:bg-transparent hover:border-primary hover:text-primary font-bold'>Ethereum Bridge</button>
				<button className='mt-3 bg-primary rounded-lg text-white dark:bg-white dark:hover:text-white dark:text-primary dark:hover:bg-transparent dark:border-2 
																dark:border-white border-2 w-full md:w-[200px] h-[50px] duration-200 hover:bg-transparent hover:border-primary hover:text-primary font-bold'>Binance Bridge</button>

			</div>
		</div>
	)
}

export default Bridge