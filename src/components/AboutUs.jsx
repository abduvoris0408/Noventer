import { AboutImg1, AboutImg2, AboutImg3 } from '../assets'
const AboutUs = () => {
	return (
		<div>
			<div className='bg-[#5A00DB] w-full py-5'>
				<h1 className='container w-[85%] mx-auto text-4xl font-bold text-white'>
					Biz haqimizda
					<p className='text-[18px] font-semibold'>
						Qisqacha ma’lumot
					</p>
				</h1>
			</div>
			<div className='dark:bg-[#0E041D] '>
				<div className='container w-[85%] mx-auto '>
					<div className='grid gap-y-4 lg:grid-cols-3 max-w-full place-items-center py-10  '>
						<div className='w-90 h-110  rounded-[16px] border border-black/50 cursor-pointer hover:shadow-md dark:border-white/70 bg-white/10 backdrop-blur-lg overflow-hidden flex flex-col gap-2'>
							<img
								src={AboutImg3}
								alt='aboutimg'
								className='object-cover h-60'
							/>
							<div className='px-4 mt-2 w-[90%] flex flex-col gap-2'>
								<p className='dark:text-white text-[24px] font-semibold'>
									Boshlanishi
								</p>
								<p className='dark:text-white text-[18px]'>
									Biz --- dan ish boshladik va ---- larni
									oldimizga maqsad qilib qo’ydik
								</p>
							</div>
						</div>
						<div className='w-90 h-110   rounded-[16px] border border-black/50 cursor-pointer hover:shadow-md dark:border-white/70 bg-white/10 backdrop-blur-lg overflow-hidden flex flex-col gap-2'>
							<img
								src={AboutImg2}
								alt='aboutimg'
								className='object-cover h-60'
							/>
							<div className='px-4 mt-2 w-[90%] flex flex-col gap-2'>
								<p className='dark:text-white text-[24px] font-semibold'>
									Uzoq muddatli loyihalar
								</p>
								<p className='dark:text-white text-[18px]'>
									Tajribamiz davomida umumiy hisobda - -
									loyiha uchun -- - muddatda ishlab topshirdik
								</p>
							</div>
						</div>
						<div className='w-90 h-110  rounded-[16px] border border-black/50 cursor-pointer hover:shadow-md dark:border-white/70 bg-white/10 backdrop-blur-lg overflow-hidden flex flex-col gap-2'>
							<img
								src={AboutImg1}
								alt='aboutimg'
								className='object-cover h-60'
							/>
							<div className='px-4 mt-2 w-[90%] flex flex-col gap-2'>
								<p className='dark:text-white text-[24px] font-semibold'>
									Jamoamiz kengaymoqda
								</p>
								<p className='dark:text-white text-[18px]'>
									Jamoamiz safi esa tobora kengaymoqda.
									Boshida - kishidan boshlangan faoliyatimiz
									hozirda -- kishi bilan davom etmoqda
								</p>
							</div>
						</div>
					</div>
					<p className='dark:text-white text-[18px] text-center'>
						Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
