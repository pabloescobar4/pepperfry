import React from 'react'
import {useNavigate } from 'react-router'


export const NavBar = (props) => {
	const navigate = useNavigate()
  return(
	<div className="Navbar">
			<h3 onClick={() =>{navigate('./home')}}>
				Home
			</h3>
			<h3  onClick={() =>{navigate('./products')}}>
				Product
			</h3>
			<h3  onClick={() =>{navigate('./cart')}}>
				Cart
			</h3>
		</div>
   )
  }
