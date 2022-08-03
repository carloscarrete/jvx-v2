import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {

    },
    logout: (state, action) => {

    },
    checkAuth: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkAuth } = authSlice .actions