import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsList = createSlice({
  name: 'foodsList',
  initialState: {
    foodsList: [],
    foodsMenu: [],
    activeIndex: 0,
    // 购物车列表
    cartList: [],
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
    //  添加购物车
    addCart({ cartList }, { payload }) {
      const item = cartList.find(item => item.id === payload.id)
      if (item) {
        item.count++
      } else {
        cartList.push({ ...payload, count: 1 })
      }
    },
    // count增
    increCount({ cartList }, { payload }) {
      cartList.find(item => item.id === payload.id).count++
    },
    // count减
    decreCount({ cartList }, { payload }) {
      const item = cartList.find(item => item.id === payload.id)
      if(item.count > 1) {
        item.count--
      }
    },
    // 清除购物车
    clearCart({ cartList }) {
      cartList.splice(0, cartList.length)
    }
  },
})

const { setFoodsList, setfoodsMenu, changActiveIndex, addCart, increCount, decreCount, clearCart } = foodsList.actions
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
export { getFoodsList, getFoodsMenu, changActiveIndex, addCart, increCount, decreCount, clearCart }

const reducer = foodsList.reducer
export default reducer
