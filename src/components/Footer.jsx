import { Button } from 'antd'

const teamMembers = [
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
	{ name: 'Abduvoris', surname: 'Mo‘minov', role: 'Developer' },
]

const Footer = () => {
	return (
		<div className='dark:bg-[#0E041D] py-20'>
			<div className='container w-[85%] mx-auto'>
				<h4 className='dark:text-white text-[40px] font-bold text-center mb-10'>
					Biz bilan aloqa
					<p className='dark:text-white text-[18px] font-semibold text-center'>
						Loyihangizni qanday realizatsiya qilish haqida batafsil
						suhbatlashamiz
					</p>
				</h4>

				<div className='flex flex-wrap justify-between gap-10'>
					<div className='cursor-pointer w-full md:w-[60%] rounded-[16px] border border-black/30 bg-blue-100 dark:border-white/70 dark:bg-white/7 backdrop-blur-xl p-[15px]'>
						<h5 className='text-[36px] font-semibold dark:text-white'>
							Bizning jamoa haqida
						</h5>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className='overflow-hidden w-full sm:w-60 h-26 rounded-[16px] border border-black/30 bg-blue-100 dark:border-white/70 dark:bg-white/8 backdrop-blur-xl p-2 flex gap-4 items-center'
								>
									<div className='w-14 h-14 rounded-2xl bg-white'></div>
									<div className='dark:text-white'>
										<p className='text-[18px] font-semibold'>
											{member.name}
										</p>
										<p className='text-[18px] font-semibold'>
											{member.surname}
										</p>
										<p>{member.role}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='cursor-pointer w-full md:w-[35%] rounded-[16px] border border-black/30 bg-blue-100 dark:border-white/70 dark:bg-white/7 backdrop-blur-xl p-[30px]'>
						<div className='flex flex-col justify-center items-center gap-2'>
							<p className='dark:text-white text-[30px] font-semibold'>
								Bepul konsultatsiya
							</p>
							<p className='dark:text-white text-center text-[14px] font-[Inter]'>
								Loyihangiz bo‘yicha boshlang‘ich bepul
								konsultatsiya uchun ma’lumotingizni qoldiring.
							</p>

							<form
								action='required'
								className='flex flex-col gap-5 mt-10 w-full'
							>
								<input
									type='text'
									placeholder='Ismingiz'
									className='w-full text-center border border-black/15 bg-purple-50 outline-0 text-[18px] dark:text-white dark:bg-white/7 rounded-xl backdrop-blur-xl px-[30px] py-4'
								/>
								<input
									type='number'
									placeholder='Telefon raqamingiz'
									className='w-full text-center border border-black/15 bg-purple-50 outline-0 text-[18px] dark:text-white dark:bg-white/7 rounded-xl backdrop-blur-xl px-[30px] py-4'
								/>
								<Button type='primary' size='large'>
									Jo‘natish
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
