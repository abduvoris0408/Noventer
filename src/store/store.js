import { configureStore } from '@reduxjs/toolkit'
import authparams from './auth'
export const store = configureStore({
	reducer: {
		authparams: authparams,
	},
})
