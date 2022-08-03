import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../../component/navbar/navbar.js"

function Detail() {
    const {id} = useParams()
    const[judul,setjudul] = useState(id)
    
  return (
    <>
    <Navbar/>
    <h1>{judul}</h1>
    </>
  )
}

export default Detail