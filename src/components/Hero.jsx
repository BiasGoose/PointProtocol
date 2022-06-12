import React from 'react'

const Hero = () => {
	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-12">
			<div>
				<p className='font-extrabold text-[40px]'>Point Protocol</p>
				<p className='font-semibold'>Point Protocol is an open and fast blockchain. Our mainnet runs Ethereum applications with 2-second transaction finality and 100 times lower fees. Our secure bridges offer cross-chain transfers with Ethereum, Binance and 3 other chains.</p>
			</div>
			<div className='flex flex-col md:flex-row justify-between mt-12'>
				<div className='bg-primary w-full md:w-[478px] h-[400px] rounded-lg'>
					<div className='px-12'>
						<div className='py-5'>
							<h1 className='text-white text-4xl font-extrabold'>ON-CHAIN STATS</h1>
						</div>
						<div className='space-y-6'>
							<div>
								<h2 className='text-white text-[32px] font-bold'>1.01 SEC</h2>
								<p className='text-white'>Transaction Finality</p>
							</div>
							<div >
								<h2 className='text-white text-[32px] font-bold'>$0.0001</h2>
								<p className='text-white'>Average Cost Per Transaction</p>
							</div>
							<div >
								<h2 className='text-white text-[32px] font-bold'>$2.09 Billion</h2>
								<p className='text-white'>Total Value Locked</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-primary w-full md:w-[478px] h-[400px] rounded-lg'>
					<div className='px-12'>
						<div className='mt-5'>
							<h1 className='text-white text-2xl md:text-4xl font-extrabold w-full md:w-[380px]'>Get Connected to our Multi-Chain World.</h1>
						</div>
						<h1 className='text-white text-sm md:text-md font-extrabold w-full md:w-[380px]'>Check out these dApps spanning web3, NFT’s, defi & more.</h1>
						<div className='space-y-6 mt-5'>
							<h2 className='text-white text-base font-bold'>SHOWCASE DAPPS</h2>
							<div className='flex flex-row space-x-4 mt-2'>
								<div className='w-[50px] h-[50px] bg-white rounded-full'></div>
								<div className='w-[50px] h-[50px] bg-white rounded-full'></div>
								<div className='w-[50px] h-[50px] bg-white rounded-full'></div>
								<div className='w-[50px] h-[50px] bg-white rounded-full'></div>
							</div>
						</div>
						<div className='space-y-6 mt-5'>
							<h2 className='text-white text-base font-bold'>FIND US ON</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero