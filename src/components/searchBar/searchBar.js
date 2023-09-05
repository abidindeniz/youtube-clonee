import React from 'react'
import mic from '../../assets/mic.png'
import './style.css'
import  {Input}  from 'antd'
const {Search} = Input
function SearchBar() {
  return (
    <div >
      <Search placeholder='Search' style={{width: 470,}}/>
      <img src={mic}/>
    </div>
  )
}

export default SearchBar