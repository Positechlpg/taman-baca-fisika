import React, { useState } from 'react'
import "./navbar.css"

function Navbar() {
  const [search,setSearch] = useState('')
  const handleSearch =()=>{
    alert(search)
  }
  const handleChange =(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className='container'>
      <p className='text-title'>facebook</p>
      <div className='wraper'>
        <p className='text-nav'>menu</p>
        <p className='text-nav'>profile</p>
        <p className='text-nav'>maerket place</p>
      </div>
      <div>
        <input className='search' onChange={(e)=>handleChange(e)} placeholder='search'/>
        {/* <button className='btn-auth'>login</button> */}
        <button className='btn-auth' onClick={handleSearch}>search</button>
      </div>
    </div>
  )
}

export default Navbar