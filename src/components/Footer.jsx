import React from 'react'

const Footer = () => {
	return (
		<div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
			<div className='flex justify-between items-center py-6 md:justify-between md:space-x-10'>
				<div>
					<div className='flex items-center space-x-2'>
						<div className='bg-primary w-[40px] h-[40px] rounded-full'></div>
						<p className='text-2xl font-bold'>Point Protocol</p>
					</div>
					{/* <div className='mt-5'>
						<div className='flex items-center space-x-2'>
							<p className='font-bold text-2xl'>©</p>
							<p className='text-lg font-bold'>Point Protocol, 2022</p>
						</div>
						<div>
							<p className='text-lg font-bold'>hello@pprotocol.com</p>
						</div>
					</div> */}
				</div>
				<div>
					<div className='hidden md:flex space-x-5 font-semibold'>
						<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Home</a>
						<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>About</a>
						<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Team</a>
						<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Tech</a>
						<a href="/" className='duration-150 hover:bg-primary hover:text-white p-2 rounded-lg'>Docs</a>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='grid grid-cols-3 md:grid-cols-6 gap-5 mt-4'>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375C37 2.72827 34.4116 0 31.2188 0Z" fill="#111111" />
								<path d="M27.75 13.4062C27.0562 13.7719 26.3625 13.8937 25.5531 14.0156C26.3625 13.5281 26.9406 12.7969 27.1719 11.8219C26.4781 12.3094 25.6687 12.5531 24.7437 12.7969C24.05 12.0656 23.0094 11.5781 21.9688 11.5781C19.5406 11.5781 17.6906 14.0156 18.2688 16.4531C15.1469 16.3312 12.3719 14.7469 10.4062 12.3094C9.36563 14.1375 9.94375 16.4531 11.5625 17.6719C10.9844 17.6719 10.4062 17.4281 9.82812 17.1844C9.82812 19.0125 11.1 20.7187 12.8344 21.2062C12.2563 21.3281 11.6781 21.45 11.1 21.3281C11.5625 22.9125 12.95 24.1312 14.6844 24.1312C13.2969 25.2281 11.2156 25.8375 9.25 25.5938C10.9844 26.6906 12.95 27.4219 15.0312 27.4219C22.0844 27.4219 26.0156 21.2062 25.7844 15.4781C26.5937 14.9906 27.2875 14.2594 27.75 13.4062Z" fill="white" />
							</svg>
						</div>
					</a>
					<a href="https://telegram.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375C37 2.72827 34.4116 0 31.2188 0Z" fill="#111111" />
								<path d="M9.36553 19.1445C14.3316 16.8639 17.643 15.3604 19.3 14.634C24.0308 12.5599 25.0138 12.1996 25.6545 12.1876C25.7954 12.1851 26.1105 12.2219 26.3146 12.3965C26.4869 12.5439 26.5344 12.743 26.557 12.8828C26.5797 13.0225 26.608 13.3409 26.5855 13.5896C26.3292 16.4289 25.2199 23.3189 24.6555 26.4989C24.4167 27.8445 23.9466 28.2957 23.4914 28.3398C22.5021 28.4358 21.7509 27.6507 20.7928 26.9887C19.2935 25.9528 18.4465 25.3079 16.9911 24.297C15.3092 23.1288 16.3995 22.4867 17.358 21.4373C17.6089 21.1627 21.9676 16.9838 22.0519 16.6048C22.0625 16.5573 22.0723 16.3806 21.9727 16.2873C21.8731 16.194 21.726 16.2259 21.62 16.2513C21.4696 16.2872 19.0744 17.9559 14.4345 21.2573C13.7546 21.7494 13.1389 21.9891 12.5871 21.9766C11.9789 21.9627 10.8089 21.6141 9.9391 21.3161C8.87229 20.9505 8.0244 20.7573 8.09823 20.1365C8.13669 19.8132 8.55912 19.4825 9.36553 19.1445Z" fill="white" />
							</svg>
						</div>
					</a>
					<a href="https://discord.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M37 6.09375C37 2.72827 34.4116 0 31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375Z" fill="#111111" />
								<path d="M16.8258 19.149C16.2985 19.149 15.8823 19.6365 15.8823 20.2312C15.8823 20.826 16.3078 21.3135 16.8258 21.3135C17.353 21.3135 17.7693 20.826 17.7693 20.2312C17.7785 19.6365 17.353 19.149 16.8258 19.149ZM20.202 19.149C19.6748 19.149 19.2585 19.6365 19.2585 20.2312C19.2585 20.826 19.684 21.3135 20.202 21.3135C20.7293 21.3135 21.1455 20.826 21.1455 20.2312C21.1455 19.6365 20.7293 19.149 20.202 19.149Z" fill="white" />
								<path d="M24.6975 10.9688H12.3025C11.2572 10.9688 10.4062 11.8657 10.4062 12.9772V26.1592C10.4062 27.2707 11.2572 28.1677 12.3025 28.1677H22.792L22.3018 26.364L23.4857 27.5242L24.605 28.6162L26.5938 30.4687V12.9772C26.5938 11.8657 25.7428 10.9688 24.6975 10.9688ZM21.127 23.7023C21.127 23.7023 20.794 23.283 20.5165 22.9125C21.7283 22.5517 22.1907 21.7523 22.1907 21.7523C21.8115 22.0155 21.4507 22.2007 21.127 22.3275C20.6645 22.5322 20.2205 22.6687 19.7857 22.7467C18.8977 22.9222 18.0838 22.8735 17.39 22.737C16.8628 22.6297 16.4095 22.4737 16.0303 22.3177C15.8175 22.23 15.5863 22.1227 15.355 21.9862C15.3273 21.9667 15.2995 21.957 15.2717 21.9375C15.2532 21.9277 15.244 21.918 15.2347 21.9082C15.0682 21.8107 14.9758 21.7425 14.9758 21.7425C14.9758 21.7425 15.4198 22.5225 16.5945 22.893C16.317 23.2635 15.9747 23.7023 15.9747 23.7023C13.9305 23.634 13.1535 22.2202 13.1535 22.2202C13.1535 19.0807 14.4855 16.536 14.4855 16.536C15.8175 15.483 17.0847 15.5122 17.0847 15.5122L17.1772 15.6293C15.5122 16.1363 14.7445 16.9065 14.7445 16.9065C14.7445 16.9065 14.948 16.7895 15.2903 16.6237C16.28 16.1655 17.0663 16.0387 17.39 16.0095C17.4455 15.9997 17.4917 15.99 17.5472 15.99C18.1115 15.912 18.7497 15.8925 19.4157 15.9705C20.2945 16.0778 21.238 16.3507 22.2 16.9065C22.2 16.9065 21.4693 16.1752 19.8968 15.6682L20.0263 15.5122C20.0263 15.5122 21.2935 15.483 22.6255 16.536C22.6255 16.536 23.9575 19.0807 23.9575 22.2202C23.9575 22.2202 23.1712 23.634 21.127 23.7023Z" fill="white" />
							</svg>
						</div>
					</a>
					<a href="https://github.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375C37 2.72827 34.4116 0 31.2188 0Z" fill="#231E1B" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4717 9.98389C13.38 9.98389 9.25 14.3371 9.25 19.7041C9.25 23.9976 11.909 27.6353 15.5298 28.9472C15.9824 29.0068 16.1521 28.7087 16.1521 28.4701C16.1521 28.2316 16.1521 27.6353 16.1521 26.8004C13.6063 27.3967 13.0405 25.4885 13.0405 25.4885C12.6445 24.3554 12.0222 24.0573 12.0222 24.0573C11.1735 23.461 12.0787 23.461 12.0787 23.461C12.9839 23.5206 13.4931 24.4747 13.4931 24.4747C14.3417 25.9655 15.643 25.5481 16.1521 25.3096C16.2087 24.6536 16.4916 24.2362 16.7179 23.9976C14.6812 23.7591 12.5313 22.9243 12.5313 19.1674C12.5313 18.094 12.8708 17.2591 13.4931 16.5435C13.4365 16.3646 13.0971 15.3509 13.6063 14.0389C13.6063 14.0389 14.3983 13.8004 16.1521 15.0527C16.8876 14.8142 17.6797 14.7545 18.4717 14.7545C19.2638 14.7545 20.0558 14.8738 20.7913 15.0527C22.5451 13.8004 23.3372 14.0389 23.3372 14.0389C23.8463 15.3509 23.5069 16.3646 23.4503 16.6032C24.0161 17.2591 24.4121 18.1536 24.4121 19.227C24.4121 22.9839 22.2622 23.7591 20.2255 23.9976C20.565 24.2958 20.8479 24.8921 20.8479 25.7866C20.8479 27.0986 20.8479 28.1123 20.8479 28.4701C20.8479 28.7087 21.0176 29.0068 21.4702 28.9472C25.1476 27.6353 27.75 23.9976 27.75 19.7041C27.6934 14.3371 23.5635 9.98389 18.4717 9.98389Z" fill="white" />
							</svg>
						</div>
					</a>
					<a href="https://youtube.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375C37 2.72827 34.4116 0 31.2188 0Z" fill="#111111" />
								<path d="M27.2875 14.7469C27.0563 13.8938 26.4781 13.2844 25.6688 13.0407C24.2813 12.675 18.3844 12.675 18.3844 12.675C18.3844 12.675 12.6031 12.675 11.1 13.0407C10.2906 13.2844 9.7125 13.8938 9.48125 14.7469C9.25 16.3313 9.25 19.5 9.25 19.5C9.25 19.5 9.25 22.6688 9.59688 24.2532C9.82813 25.1063 10.4062 25.7157 11.2156 25.9594C12.6031 26.325 18.5 26.325 18.5 26.325C18.5 26.325 24.2812 26.325 25.7844 25.9594C26.5937 25.7157 27.1719 25.1063 27.4031 24.2532C27.75 22.6688 27.75 19.5 27.75 19.5C27.75 19.5 27.75 16.3313 27.2875 14.7469ZM16.65 22.425V16.575L21.5063 19.5L16.65 22.425Z" fill="white" />
							</svg>
						</div>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noreferrer">
						<div className='duration-150 hover:scale-105 cursor-pointer'>
							<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M31.2188 0H5.78125C2.58835 0 0 2.72827 0 6.09375V32.9062C0 36.2717 2.58835 39 5.78125 39H31.2188C34.4116 39 37 36.2717 37 32.9062V6.09375C37 2.72827 34.4116 0 31.2188 0Z" fill="#111111" />
								<path d="M18.5 11.2124C21.0437 11.2124 21.3906 11.2124 22.4312 11.2124C23.3562 11.2124 23.8187 11.4562 24.1656 11.578C24.6281 11.8218 24.975 11.9437 25.3218 12.3093C25.6687 12.6749 25.9 13.0405 26.0156 13.528C26.1312 13.8937 26.2468 14.3812 26.3625 15.3562C26.3625 16.453 26.3625 16.6968 26.3625 19.4999C26.3625 22.303 26.3625 22.5468 26.3625 23.6437C26.3625 24.6187 26.1312 25.1062 26.0156 25.4718C25.7843 25.9593 25.6687 26.3249 25.3218 26.6905C24.975 27.0562 24.6281 27.2999 24.1656 27.4218C23.8187 27.5437 23.3562 27.6655 22.4312 27.7874C21.3906 27.7874 21.1593 27.7874 18.5 27.7874C15.8406 27.7874 15.6093 27.7874 14.5687 27.7874C13.6437 27.7874 13.1812 27.5437 12.8343 27.4218C12.3718 27.178 12.025 27.0562 11.6781 26.6905C11.3312 26.3249 11.1 25.9593 10.9843 25.4718C10.8687 25.1062 10.7531 24.6187 10.6375 23.6437C10.6375 22.5468 10.6375 22.303 10.6375 19.4999C10.6375 16.6968 10.6375 16.453 10.6375 15.3562C10.6375 14.3812 10.8687 13.8937 10.9843 13.528C11.2156 13.0405 11.3312 12.6749 11.6781 12.3093C12.025 11.9437 12.3718 11.6999 12.8343 11.578C13.1812 11.4562 13.6437 11.3343 14.5687 11.2124C15.6093 11.2124 15.9562 11.2124 18.5 11.2124ZM18.5 9.38428C15.8406 9.38428 15.6093 9.38428 14.5687 9.38428C13.5281 9.38428 12.8343 9.62803 12.2562 9.87178C11.6781 10.1155 11.1 10.4812 10.5218 11.0905C9.9437 11.6999 9.71245 12.1874 9.36558 12.9187C9.13433 13.528 9.0187 14.2593 8.90308 15.3562C8.90308 16.453 8.90308 16.8187 8.90308 19.4999C8.90308 22.303 8.90308 22.5468 8.90308 23.6437C8.90308 24.7405 9.13433 25.4718 9.36558 26.0812C9.59683 26.6905 9.9437 27.2999 10.5218 27.9093C11.1 28.5187 11.5625 28.7624 12.2562 29.128C12.8343 29.3718 13.5281 29.4937 14.5687 29.6155C15.6093 29.6155 15.9562 29.6155 18.5 29.6155C21.0437 29.6155 21.3906 29.6155 22.4312 29.6155C23.4718 29.6155 24.1656 29.3718 24.7437 29.128C25.3218 28.8843 25.9 28.5187 26.4781 27.9093C27.0562 27.2999 27.2875 26.8124 27.6343 26.0812C27.8656 25.4718 27.9812 24.7405 28.0968 23.6437C28.0968 22.5468 28.0968 22.1812 28.0968 19.4999C28.0968 16.8187 28.0968 16.453 28.0968 15.3562C28.0968 14.2593 27.8656 13.528 27.6343 12.9187C27.4031 12.3093 27.0562 11.6999 26.4781 11.0905C25.9 10.4812 25.4375 10.2374 24.7437 9.87178C24.1656 9.62803 23.4718 9.50615 22.4312 9.38428C21.3906 9.38428 21.1593 9.38428 18.5 9.38428Z" fill="white" />
								<path d="M18.5 14.2593C15.725 14.2593 13.5281 16.5749 13.5281 19.4999C13.5281 22.4249 15.725 24.7405 18.5 24.7405C21.275 24.7405 23.4718 22.4249 23.4718 19.4999C23.4718 16.5749 21.275 14.2593 18.5 14.2593ZM18.5 22.9124C16.7656 22.9124 15.2625 21.4499 15.2625 19.4999C15.2625 17.6718 16.65 16.0874 18.5 16.0874C20.2343 16.0874 21.7375 17.5499 21.7375 19.4999C21.7375 21.328 20.2343 22.9124 18.5 22.9124Z" fill="white" />
								<path d="M23.5875 15.3562C24.226 15.3562 24.7437 14.8105 24.7437 14.1374C24.7437 13.4643 24.226 12.9187 23.5875 12.9187C22.9489 12.9187 22.4312 13.4643 22.4312 14.1374C22.4312 14.8105 22.9489 15.3562 23.5875 15.3562Z" fill="white" />
							</svg>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer