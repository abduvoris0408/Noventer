import { useEffect, useState } from 'react'
import { FaUserPen } from 'react-icons/fa6'
import { RiMenu3Line } from 'react-icons/ri'
import { Logo } from '../assets'
import Darkmode from './Darkmode'
import Sidebar from './Sidebar'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (!isMenuOpen) {
			setIsAnimating(true)
			setTimeout(() => setIsAnimating(false), 3000)
		}
	}, [isMenuOpen])

	return (
		<div>
			<div className='w-full h-20 bg-white/50 dark:bg-[#0e041df5]/10 border-b border-b-gray-300 dark:border-b-gray-600 fixed inset-0 z-999 backdrop-blur-md'>
				<div className='container w-10/12 mx-auto h-full flex items-center justify-between'>
					<a href='/' className='flex items-center gap-1'>
						<img src={Logo} alt='logo' />
						<p className='text-4xl dark:text-white font-semibold'>
							Noventer
						</p>
					</a>

					<ul className='hidden md:flex gap-3'>
						<li className='dark:text-white text-[16px] py-3 px-5 cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
							Bosh sahifa
						</li>
						<li className='dark:text-white text-[16px] py-3 px-5 cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
							Portfolio
						</li>
						<li className='dark:text-white text-[16px] py-3 px-5 cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
							Xizmatlar
						</li>
						<li className='dark:text-white text-[16px] py-3 px-5 cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
							Aloqa
						</li>
					</ul>

					<div className='flex items-center gap-2'>
						<Darkmode />
						<div className='md:hidden flex gap-3'>
							<FaUserPen className='text-xl dark:text-white cursor-pointer' />
							<RiMenu3Line
								className='text-xl dark:text-white cursor-pointer'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							/>
						</div>
						<button className='hidden md:block px-4 py-3 backdrop-blur-xs bg-white/10 dark:text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
							Loyiha bormi ?
						</button>
					</div>
				</div>
			</div>

			{(isMenuOpen || isAnimating) && (
				<div
					className={`fixed inset-0 z-55 bg-black/50 transition-opacity duration-300 ease-in-out ${
						isMenuOpen
							? 'opacity-100 visible'
							: 'opacity-0 invisible'
					}`}
					onClick={() => setIsMenuOpen(false)}
				>
					<div
						className={`fixed inset-y-0 left-0 z-50 w-72 p-5 shadow-lg border-r border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0e041d] transform transition-transform duration-600 ease-in-out ${
							isMenuOpen ? 'translate-x-0' : '-translate-x-full'
						}`}
					>
						<Sidebar
							isOpen={isMenuOpen}
							onClose={() => setIsMenuOpen(false)}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
