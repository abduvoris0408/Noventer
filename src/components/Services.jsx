import {
	BriefcaseBusiness,
	CalendarCog,
	Images,
	MoveUpRight,
	Users,
} from 'lucide-react'
import { BsTextareaT } from 'react-icons/bs'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { MdAddShoppingCart } from 'react-icons/md'
import { RiGraduationCapLine } from 'react-icons/ri'

const Services = () => {
	return (
		<div>
			<div className='dark:bg-[#0E041D] pt-20'>
				<div className='container w-[85%] mx-auto '>
					<div className='flex flex-col gap-10'>
						<h3 className='text-center dark:text-white text-[40px] font-semibold'>
							Xizmat turlari
							<p className='dark:text-white  text-[18px]'>
								Dasturlash sohasidagi eng talabgir xizmat
								turlaridan quyidagilar:
							</p>
						</h3>
						<div className='grid lg:grid-cols-3 place-items-center gap-y-5 lg:gap-y-10'>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<LuFileSpreadsheet className='text-7xl dark:text-white' />
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Landing sahifalar
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Qisqa ta`sirli va maqsadli sahifalar
									mijozlarni alohida harakatga undash uchun
									mo`ljallangan
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<BriefcaseBusiness
										size={'70px'}
										className=' dark:text-white'
									/>
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Korporativ veb-sayt
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Kompaniyaning umumiy ma`lumotini taqdim
									etish, xizmatlar yoki mahsulotlar haqida
									ma`lumot berish.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<MdAddShoppingCart className='text-7xl dark:text-white' />
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Online do’kon
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Mahsulotlar yoki xizmatlarni onlayn tarzda
									sotish. To‘lov tizimlari va mahsulotni
									boshqarish tizimi mavjud.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<Users
										size={'70px'}
										className=' dark:text-white'
									/>
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									CRM tizimi
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Mijozlar bilan ishlashni avtomatlashtirish
									va boshqarish. Katta kompaniyalar yoki
									mijozlar bilan faol ishlaydigan
									tashkilotlar.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<Images
										size={'70px'}
										className=' dark:text-white'
									/>
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Portfolio saytlari
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Shaxsiy yoki kompaniya ishlarini ko‘rsatish.
									Freelancerlar yoki ijodkorlar uchun o‘z
									ishlarini targ‘ib qilishda.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<BsTextareaT className='text-7xl dark:text-white' />
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Blog sahifalari{' '}
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									O‘z fikrlari, yangiliklari yoki
									ma`lumotlarini o‘rtoqlashish. Ma`lumot
									yetkazish, auditoriyani jalb qilish va
									reklama qilish uchun.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<RiGraduationCapLine className='text-7xl dark:text-white' />
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									Ta’lim platformasi
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									Ta`lim kurslari, videodarsliklar, yoki
									online testlar uchun. O‘quv muassasalari
									yoki onlayn dars beruvchi kompaniyalar
									uchun.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-white/20 w-90 h-92 rounded-[16px] border border-black/30 bg-purple-300 dark:border-white/70 dark:bg-white/10  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center'>
									<CalendarCog
										size={'70px'}
										className=' dark:text-white'
									/>
								</div>
								<p className='text-center dark:text-white text-[30px] font-semibold'>
									ERP platformasi
								</p>
								<p className='text-center dark:text-white text-[18px]'>
									ERP platformasi korxona yoki tashkilotning
									barcha jarayonlarini birlashtiruvchi
									kompleks dasturiy ta`minotdir.
								</p>
							</div>
							<div className='cursor-pointer hover:dark:bg-blue-500 w-90 h-92 rounded-[16px] border border-black/30 dark:border-white/70 bg-blue-600  backdrop-blur-xl p-[30px] flex flex-col items-center gap-2'>
								<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl bg-white/10 flex items-center justify-center'>
									<MoveUpRight
										size={'70px'}
										className=' text-white'
									/>
								</div>
								<p className='text-center text-white text-[30px] font-semibold'>
									Alohida loyihami ?
								</p>
								<p className='text-center text-white text-[18px]'>
									Biz yangi startap loyihalarni ham
									rivojlantirishda yordam beramiz,
									shakllantiramiz.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
