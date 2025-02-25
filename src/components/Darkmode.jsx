import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const Darkmode = () => {
	const [darkMode, setDarkMode] = useState(
		typeof window !== 'undefined' &&
			localStorage.getItem('theme') === 'dark'
	)

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [darkMode])

	return (
		<button
			onClick={() => setDarkMode(!darkMode)}
			className='cursor-pointer dark:hover:bg-white/10 p-2 rounded-md hover:bg-gray-100'
		>
			{darkMode ? (
				<LuSun className='text-xl text-white text-md' />
			) : (
				<LuMoon className='text-xl text-[#0e041df5] text-md' />
			)}
		</button>
	)
}

export default Darkmode
