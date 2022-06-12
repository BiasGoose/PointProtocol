import React from 'react'

const Roadmap = () => {
	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-12">
			<div>
				<p className='font-extrabold text-[40px] text-primary dark:text-white'>2022 Roadmap</p>
			</div>
			<div className='flex flex-col md:flex-row justify-between text-primary dark:text-white'>
				<div className='mt-5'>
					<p className='font-extrabold text-[30px]'>2022 Q1</p>
					<p className='text-[24px]'>Trustless Bitcoin bridge</p>
					<p className='text-[24px]'>ZKProof course</p>
					<p className='text-[24px]'>Social NFT wallet</p>
					<p className='text-[24px]'>Staking contract</p>
					<p className='text-[24px]'>Cross-Chain to OpenSea</p>
				</div>
				<div className='mt-5'>
					<p className='font-extrabold text-[30px]'>2022 Q2</p>
					<p className='text-[24px]'>“Blue To Fly” social tokens</p>
					<p className='text-[24px]'>Elastic endpoints</p>
					<p className='text-[24px]'>Game shard</p>
					<p className='text-[24px]'>Opolis for DAOs</p>
				</div>
				<div className='mt-5'>
					<p className='font-extrabold text-[30px]'>2022 Q3</p>
					<p className='text-[24px]'>State pruning</p>
					<p className='text-[24px]'>Cosmos bridge</p>
					<p className='text-[24px]'>Trustless Etherum bridge</p>
					<p className='text-[24px]'>Cross-shard transactions</p>
					<p className='text-[24px]'>Decentralized networkFast</p>
				</div>
			</div>
		</div>
	)
}

export default Roadmap