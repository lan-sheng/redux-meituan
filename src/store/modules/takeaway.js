import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsList = createSlice({
  name: 'foodsList',
  initialState: {
    foodsList: [],
    foodsMenu: [],
    activeIndex: 0,
  },
  reducers: {
    setFoodsList(state, { payload }) {
      state.foodsList = payload
    },
    setfoodsMenu(state, { payload }) {
      state.foodsMenu = payload
    },
    changActiveIndex(state, { payload }) {
      state.activeIndex = payload
    },
  },
})

const { setFoodsList, setfoodsMenu, changActiveIndex } = foodsList.actions
const getFoodsList = () => dispatch =>
  axios.get('http://localhost:3004/takeaway').then(
    res => dispatch(setFoodsList(res.data)),
    err => console.error(err)
  )

const getFoodsMenu = () => dispatch =>
  axios.get('http://localhost:3004/takeaway').then(
    res => dispatch(setfoodsMenu(res.data)),
    err => console.error(err)
  )
export { getFoodsList, getFoodsMenu, changActiveIndex }

const reducer = foodsList.reducer
export default reducer
