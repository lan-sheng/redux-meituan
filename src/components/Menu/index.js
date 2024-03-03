import classNames from 'classnames'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodsMenu, changActiveIndex } from '../../store/modules/takeaway'
import { useEffect } from 'react'
const Menu = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFoodsMenu())
  }, [dispatch])

  const { foodsMenu, activeIndex } = useSelector(state => state.foods)

  const menus = foodsMenu.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div key={item.tag} className={classNames('list-menu-item', { active: index === activeIndex })} onClick={() => dispatch(changActiveIndex(index))}>
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
