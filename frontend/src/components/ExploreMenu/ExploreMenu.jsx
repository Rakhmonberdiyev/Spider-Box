import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = (category, setCategory) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut dolorem error atque.</p>
        <div className="explore-mmenu-list">
            {menu_list.map( (item,index) => {
               return (
                   <div onClick={ () => setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className="expolre-menu-list-item">
                      <img  className={category===item.menu_name? "active":""} src={item.menu_img} alt="top" />
                       <p>{item.menu_name}</p>
                   </div>
               ) 
             }
            )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu