import { IoCloseSharp } from 'react-icons/io5'
import { Logo } from '../assets'

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<div
			className={`fixed inset-0 z-50 transition-transform transform border-r border-r-gray-300 dark:border-r-gray-600 ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} bg-white dark:bg-[#0e041d] w-72 p-5 shadow-lg`}
		>
			<div className='flex justify-between pb-[18px]'>
				<a href='/' className='flex items-center gap-1'>
					<img src={Logo} alt='logo' />
					<p className='text-4xl dark:text-white font-semibold'>
						Noventer
					</p>
				</a>
				<button
					onClick={onClose}
					className='text-gray-600 text-xl dark:text-white'
				>
					<IoCloseSharp />
				</button>
			</div>
			<ul className='mt-5 space-y-3'>
				<li className='dark:text-white text-lg cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
					Bosh sahifa
				</li>
				<li className='dark:text-white text-lg cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
					Portfolio
				</li>
				<li className='dark:text-white text-lg cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
					Xizmatlar
				</li>
				<li className='dark:text-white text-lg cursor-pointer font-[Inter] hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-md'>
					Aloqa
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
