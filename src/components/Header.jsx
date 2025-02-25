import {
	Card1SVG,
	Card2SVG,
	Card3SVG,
	Card4SVG,
	HeaderPNG,
	Layer1PNG,
	Layer2PNG,
} from '../assets'

const Header = () => {
	return (
		<div className='dark:bg-[#0E041D] h-screen'>
			<div className='container w-10/12 mx-auto pt-[100px] relative'>
				<div className='w-[540px] flex flex-col gap-7 mt-20'>
					<h1 className='text-[48px] dark:text-white font-[Inter] font-bold leading-none'>
						Yuqori sifatdagi aniqlikka asoslanib
						<span className='text-[#5A00DB]'>
							{' '}
							istalgan turdagi
						</span>{' '}
						dasturlarni tayyorlaymiz
					</h1>
					<button className='w-44 h-12 bg-[#5A00DB] text-[18px] px-3 py-2 rounded-lg text-white font-[Inter] cursor-pointer'>
						Xizmatlar haqida
					</button>
				</div>
				<div className='lg:w-[395px] lg:h-[200px] hidden lg:flex items-start justify-center rounded-[16px] border border-white/10 bg-gradient-to-br from-[#15092A] to-[#18023a] absolute top-120 left-82'>
					<img
						src={Layer2PNG}
						alt='layout'
						className='object-cover'
					/>
				</div>

				<div className='lg:w-[320px] lg:h-[490px] hidden lg:flex   items-end justify-end rounded-[16px] border border-white/10 bg-gradient-to-br from-[#15092A] to-[#18023a] absolute top-[147px] left-[720px]'>
					<img
						src={Layer1PNG}
						alt='layout'
						className='absolute top-20 left-13 object-cover'
					/>
					<img src={Layer1PNG} alt='' className=' absolute top-35 ' />
					<img
						src={Layer1PNG}
						alt=''
						className=' absolute left-45 top-40'
					/>
					<img
						src={Layer1PNG}
						alt='layer'
						className=' absolute left-15 top-47'
					/>
				</div>
				<div className='absolute lg:w-auto hidden lg:flex top-[155px] lg:left-[480px]'>
					<img
						src={HeaderPNG}
						alt='Header'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className=' lg:mt-40 md:mt-22 sm:mt-18 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 items-center justify-center'>
					{[
						{
							img: Card1SVG,
							title: '7+ yillik',
							desc: 'Umumiy tajriba',
						},
						{ img: Card2SVG, title: '7+', desc: 'Yirik loyihalar' },
						{ img: Card3SVG, title: '8+', desc: 'Xizmat turlari' },
						{ img: Card4SVG, title: '100%', desc: 'Xavfsizlik' },
					].map((card, index) => (
						<div
							key={index}
							className='w-full max-w-[271.75px] h-[120px] rounded-[16px] border border-white/70 bg-white/10 backdrop-blur-lg p-[20px_30px] flex items-center gap-2'
						>
							<img src={card.img} alt='card-icon' />
							<div className='flex flex-col gap-1'>
								<h4 className='text-white text-[24px] font-[Inter]'>
									{card.title}
								</h4>
								<p className='text-white text-[18px] font-[Inter]'>
									{card.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header
