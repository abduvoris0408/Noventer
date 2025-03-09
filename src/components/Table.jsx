import { useSelector } from 'react-redux'

const Table = () => {
	const { value } = useSelector(state => state.authparams)
	console.log(value)

	return (
		<div>
			<ul>
				{value.map((item, index) => (
					<li key={index}>{item.firstname}</li>
				))}
			</ul>
		</div>
	)
}

export default Table
