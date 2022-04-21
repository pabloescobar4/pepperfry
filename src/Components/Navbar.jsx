import React from 'react'
import {useNavigate } from 'react-router'
import './Navbar.css'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {
	const navigate = useNavigate()
	function handleClick() {
		navigate('/home')
	  }
  return(
	  <>
	{/* <div className="Navbar">
			<h3 onClick={() =>{navigate('./home')}}>
				Home
			</h3>
			<h3  onClick={() =>{navigate('./products')}}>
				Product
			</h3>
			<h3  onClick={() =>{navigate('./cart')}}>
				Cart
			</h3>
		</div> */}

	<div className="Navbar1">
      <div>
		  Sell on pepperfry
		  
	  </div>
	  <div>
		 Become a frenchisee
	  </div>
	  <div>
		 Buy in bulk
	  </div>
	  <div>
		  Find a studio
	  </div>
	  <div className="end">
		  Enter Pincode
	  </div>
	  <div className="nv1">
		  Find Pepperfry studio
	  </div>
	</div>

	<div className="Navbar2">
		<div >
		<div id="img11">
		<img src="https://ii1.pepperfry.com/images/pf-logo-bday-21.gif" alt="" className="cursor-pointer" onClick={handleClick}  />
	</div>
		</div>

		<div className="input">
			<input type="text" placeholder="Your door to happiness opens with a search" className="" />
		</div>
		<div>
		<div className="cursor-pointer" >
			<p id="nbicons">HELP</p>
		</div>
		
	   </div>
	   <div className="mt">
	 
	   <PersonSharpIcon fontSize="large" className="cursor-pointer"/>
	   </div>
	   <div className="mt cursor-pointer">
       <FavoriteBorderOutlinedIcon fontSize="large" />
	   </div>
	   <div className="mt cursor-pointer">
	   <ShoppingCartIcon fontSize="large"  />
	   </div>
	</div>
	
	<div className="Navbar3">
    
	</div>
	</>
   )
  }
  export {NavBar}
