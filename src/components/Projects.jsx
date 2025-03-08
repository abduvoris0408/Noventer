// import { ProjectsImg1, ProjectsImg2, ProjectsImg3 } from '../assets'

// const Projects = () => {
// 	return (
// 		<div className=''>
// 			<div className='dark:bg-[#0E041D] pt-12'>
// 				<div className='container w-[85%] mx-auto '>
// 					<h2 className='dark:text-white text-[48px] font-bold text-center'>
// 						Loyihalarimiz
// 						<p className='dark:text-white text-[18px] font-semibold'>
// 							biz haqimizda gapirsin !
// 						</p>
// 					</h2>
// 					<div className='mt-15 grid grid-cols-2 gap-6 place-items-center'>
// 						<img
// 							src={ProjectsImg1}
// 							alt='ProjectsImg1'
// 							className='w-160 h-90 rounded-2xl'
// 						/>
// 						<div className='flex flex-col px-10 w-full gap-3'>
// 							<p className='dark:text-white text-[24px]'>
// 								Xalq trans loyihasi
// 							</p>
// 							<p className='dark:text-white text-[18px]'>
// 								Bu yerda esa yana ko’proq ma’lumotlar berilishi
// 								kerak. Lorem Ipsum is simply dummy text of the
// 								printing and typesetting industry. Lorem Ipsum
// 								has been the industry`s standard dummy text ever
// 								since the 1500s, when an unknown printer took a
// 								galley of type and scrambled it to make a type
// 								specimen book. It has survived not only five
// 								centuries, but also the leap into electronic
// 								typesetting, remaining essentially unchanged.
// 							</p>
// 							<button className='w-40 md:block px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
// 								Loyihani ko`rish
// 							</button>
// 						</div>
// 					</div>
// 					<div className='mt-15 grid grid-cols-2 gap-6 place-items-center'>
// 						<div className='flex flex-col px-10 w-full gap-3'>
// 							<p className='dark:text-white text-[24px]'>
// 								Xalq trans loyihasi
// 							</p>
// 							<p className='dark:text-white text-[18px]'>
// 								Bu yerda esa yana ko’proq ma’lumotlar berilishi
// 								kerak. Lorem Ipsum is simply dummy text of the
// 								printing and typesetting industry. Lorem Ipsum
// 								has been the industry`s standard dummy text ever
// 								since the 1500s, when an unknown printer took a
// 								galley of type and scrambled it to make a type
// 								specimen book. It has survived not only five
// 								centuries, but also the leap into electronic
// 								typesetting, remaining essentially unchanged.
// 							</p>
// 							<button className='w-40 md:block px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
// 								Loyihani ko`rish
// 							</button>
// 						</div>
// 						<img
// 							src={ProjectsImg2}
// 							alt='ProjectsImg1'
// 							className='w-160 h-90 rounded-2xl'
// 						/>
// 					</div>
// 					<div className='my-15 grid grid-cols-2 gap-6 place-items-center'>
// 						<img
// 							src={ProjectsImg3}
// 							alt='ProjectsImg1'
// 							className='w-160 h-90 rounded-2xl'
// 						/>
// 						<div className='flex flex-col px-10 w-full gap-3'>
// 							<p className='dark:text-white text-[24px]'>
// 								Xalq trans loyihasi
// 							</p>
// 							<p className='dark:text-white text-[18px]'>
// 								Bu yerda esa yana ko’proq ma’lumotlar berilishi
// 								kerak. Lorem Ipsum is simply dummy text of the
// 								printing and typesetting industry. Lorem Ipsum
// 								has been the industry`s standard dummy text ever
// 								since the 1500s, when an unknown printer took a
// 								galley of type and scrambled it to make a type
// 								specimen book. It has survived not only five
// 								centuries, but also the leap into electronic
// 								typesetting, remaining essentially unchanged.
// 							</p>
// 							<button className='w-40 md:block px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
// 								Loyihani ko`rish
// 							</button>
// 						</div>
// 					</div>
// 					<div className='flex justify-center'>
// 						<button className='w-80 h-12 bg-[#5A00DB] text-[18px] px-3 py-2 rounded-xl text-white font-[Inter] cursor-pointer'>
// 							Boshqa loyihalarni ko’rish
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Projects

import { ProjectsImg1, ProjectsImg2, ProjectsImg3 } from '../assets'

const Projects = () => {
	return (
		<div className=''>
			<div className='dark:bg-[#0E041D] pt-12'>
				<div className='container w-[85%] px-5 md:px-0 mx-auto'>
					<h2 className='dark:text-white text-[36px] md:text-[48px] font-bold text-center'>
						Loyihalarimiz
						<p className='dark:text-white text-[16px] md:text-[18px] font-semibold'>
							biz haqimizda gapirsin !
						</p>
					</h2>
					<div className='mt-15 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'>
						<img
							src={ProjectsImg1}
							alt='ProjectsImg1'
							className='w-full md:w-160 h-auto rounded-2xl'
						/>
						<div className='flex flex-col px-5 md:px-10 w-full gap-3'>
							<p className='dark:text-white text-[20px] md:text-[24px] text-center md:text-left'>
								Xalq trans loyihasi
							</p>
							<p className='dark:text-white text-[16px] md:text-[18px] text-center md:text-left'>
								Bu yerda esa yana ko’proq ma’lumotlar berilishi
								kerak. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry`s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type
								specimen book. It has survived not only five
								centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
							<button className='w-full md:w-40 px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer hover:border-gray-300'>
								Loyihani ko`rish
							</button>
						</div>
					</div>
					<div className='mt-15 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'>
						<div className='flex flex-col px-5 md:px-10 w-full gap-3 order-2 md:order-1'>
							<p className='dark:text-white text-[20px] md:text-[24px] text-center md:text-left'>
								Xalq trans loyihasi
							</p>
							<p className='dark:text-white text-[16px] md:text-[18px] text-center md:text-left'>
								Bu yerda esa yana ko’proq ma’lumotlar berilishi
								kerak. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry`s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type
								specimen book. It has survived not only five
								centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
							<button className='w-full md:w-40 px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer hover:border-gray-300'>
								Loyihani ko`rish
							</button>
						</div>
						<img
							src={ProjectsImg2}
							alt='ProjectsImg2'
							className='w-full md:w-160 h-auto rounded-2xl order-1 md:order-2'
						/>
					</div>
					<div className='my-15 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'>
						<img
							src={ProjectsImg3}
							alt='ProjectsImg3'
							className='w-full md:w-160 h-auto rounded-2xl'
						/>
						<div className='flex flex-col px-5 md:px-10 w-full gap-3'>
							<p className='dark:text-white text-[20px] md:text-[24px] text-center md:text-left'>
								Xalq trans loyihasi
							</p>
							<p className='dark:text-white text-[16px] md:text-[18px] text-center md:text-left'>
								Bu yerda esa yana ko’proq ma’lumotlar berilishi
								kerak. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry`s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type
								specimen book. It has survived not only five
								centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
							<button className='w-full md:w-40 px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer hover:border-gray-300'>
								Loyihani ko`rish
							</button>
						</div>
					</div>
					<div className='flex justify-center mt-8'>
						<button className='w-full md:w-80 h-12 bg-[#5A00DB] text-[18px] px-3 py-2 rounded-xl text-white font-[Inter] cursor-pointer'>
							Boshqa loyihalarni ko’rish
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
