import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	value: {
		firstname: 'Abduvoris',
		lastname: 'Mo`minov',
	},
}
const authparams = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
})
export default authparams.reducer
