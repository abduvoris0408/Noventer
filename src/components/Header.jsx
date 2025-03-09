import Aos from 'aos'
import { useEffect } from 'react'
import {
	Card1SVG,
	Card2SVG,
	Card3SVG,
	Card4SVG,
	HeaderPNG,
	Layer1PNG,
} from '../assets'

const Header = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		})
	}, [])
	return (
		<div className='dark:bg-[#0E041D]  '>
			<div className='container w-[85%] mx-auto h-[600px] lg:h-[800px] flex flex-col gap-[60px] relative'>
				<div className='w-full lg:h-[80%] h-[63%] flex justify-start items-center'>
					<div>
						<h1 className='lg:text-[48px]/15 text-[27px] font-[700] flex flex-col dark:text-white'>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
							>
								Yuqori sifatdagi
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='font-[400] text-[#5A00DB]'
							>
								aniqlikka asoslanib
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='text-main'
							>
								istalgan turdagi
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
							>
								dasturlarni tayyorlaymiz
							</span>
						</h1>
						<button className='w-44 h-12 lg:mb-0 mb-4 bg-[#5A00DB] text-[18px] px-3 py-2 rounded-lg text-white font-[Inter] cursor-pointer'>
							Xizmatlar haqida
						</button>
					</div>
				</div>
				<div className='lg:w-full w-[70%] lg:h-[20%] h-[25%] relative z-[100] grid grid-cols-2 lg:grid-cols-4 gap-[20px]'>
					{[Card1SVG, Card2SVG, Card3SVG, Card4SVG].map(
						(vector, index) => (
							<div
								key={index}
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='border border-white/20 h-[59px] lg:h-[120px] dark:bg-white/10  bg-blue-600 rounded-xl flex justify-center items-center gap-0.5 lg:gap-3 backdrop-blur-lg dark:hover:bg-white/20 duration-300 z-0 '
							>
								<img
									src={vector}
									alt='tajriba'
									className='lg:w-[68px] lg:h-[68px] w-[33px] h-[33px]'
								/>
								<div className='text-white'>
									<h2 className='font-[700] text-[12px] lg:text-[24px]'>
										{index === 0
											? '7+ yillik'
											: index === 1
											? '5+'
											: index === 2
											? '8+'
											: '100%'}
									</h2>
									<p className='text-[8.92px] lg:text-[18px] font-[400]'>
										{index === 0
											? 'umumiy tajriba'
											: index === 1
											? 'yirik loyihalar'
											: index === 2
											? 'xizmat turlari'
											: 'xavfsizlik'}
									</p>
								</div>
							</div>
						)
					)}
				</div>
				<img
					src={HeaderPNG}
					alt='headers'
					className='absolute bottom-0 right-0 lg:right-[-100px] z-50 w-full lg:w-[1000px]'
				/>
				<div className='w-[300px] h-[700px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 right-40 justify-center items-center border border-main/30'>
					<div className='bg-main/70  rounded-[50%]'>
						<img src={Layer1PNG} alt='' />
					</div>
				</div>
				<div className='w-[500px] h-[300px] hidden lg:flex bg-main/10  rounded-xl absolute bottom-0 right-115 justify-end items-center border border-main/30'>
					<div className='bg-main shadow-cos rounded-[50%]'>
						<img src={Layer1PNG} alt='layer' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
