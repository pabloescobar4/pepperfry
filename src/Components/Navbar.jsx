import React ,{useState} from 'react'
import {useNavigate } from 'react-router'
import '../Style/Navbar.css'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import {removeCart} from '../redux/Cart/action'
import {useDispatch} from 'react-redux'
const NavBar = () => {

	const dispatch = useDispatch();

	const remove = (id) => {
		console.log(id.id)
		dispatch(removeCart(id))
		
	}

	const done = () => {
		alert("Congratulation your order is placed")
	}

	
	const navigate = useNavigate()
	function handleClick() {
		navigate('/')
	  }
	  function handleClickCart() {
		navigate('/products')
	  }
	  function handleClicklogin() {
		navigate('/cart')
	  }
	  const data = useSelector((state) => state.Cart.cart)
	 

	//   const totalsum = () => {
	// 	  const sum = 0
	// 	  console.log(data.reduce((a,b) => a.price + b.price ,sum))
	//   }
  

	  const [showMenu,setShowMenu] = useState(false)
      const [login,setLogin] = useState(false)
	  let m 
	  if(login){
		  m = <div>
			  <div className="fixed bg-white top-24 p-2 right-20 w-25 h-30 z-50 shadow " >
			  <div className="ml-36">
				  <ClearIcon onClick={()=>{setLogin(false)}} className="cursor-pointer"/>
				  </div>
             <div className= "h-1/2 w-full p-2 bg-blue-300 pl-5" onClick={()=>{setLogin(false)}}>
				 <button onClick={() =>{handleClicklogin()}}> LOGIN/REGISTER</button>

               
			 </div>
			 <div className="text-sm h-1/2 -1/2">
			 To access your account 
			 </div>
			 <div className="text-sm">
			 & manage orders
			 </div>
			  </div>
		  </div>
	  }
	  let menu
    
	  if(showMenu){
		  menu = 
		  <div className="fixed bg-white top-0 right-0 w-1/3 h-full z-50 shadow  div3">
			 
			  <div >
				<div className="border bg-black p-8 w-full h-1/5 flex justify-between text-2xl text-white">
					<div>
					My Cart
					</div>
              
				  <div>
				  <ClearIcon onClick={()=>{setShowMenu(false)}} className="cursor-pointer"/>
				  </div>
				</div>
				 <div>
	
					 </div> 

					 <div>
						 {data.map((item) => {
							 return (
							 <div classname="w-full h-1/5 border border-green-100 bg-white">

								 <div className="flex p-5 text-sm">
								 <div className="w-2/5">
									 <img src={item.id.img[0]} alt="" />
								 </div>
								 <div className="ml-4 ">
									 <div className="mb-4">
									 {item.id.name}
									 </div>
									 <div className="flex">
										 <div>
										 {item.id.price}
										 </div>
									 
									 <div className="ml-3 text-gray-500"> <del>{item.id.actual_price}</del></div> 
									
									 </div>


								 
								 <div>
								 Quantity
								 </div>
								 <div>
									 <button className="bg-black text-white p-1 rounded-xl mt-3 " onClick={() => remove(item.id)}>Remove</button>
								 </div>
								
								 </div>
								 <div>
								   
								 </div>
								 
								 </div>
								
                           


							 </div>

							 

						 )
						 })}
					 </div>
			  </div>
			  <div className="border bg-blue-500 w-full h-16 fixed bottom-0 flex ">
                  
				  <div className=" p-4   text-2xl rounded-xl text-white">
                 
				  </div>

				  <div className="p-4  text-2xl text-white rounded-xl ml-36" onClick={() => {done()}}>
					 Proceed to Pay
				  </div>

			  </div>
		  </div>
	  }

  return(
	  <>

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
		<div className="cursor-pointer -ml-3" >
			<p id="nbicons">HELP</p>
		</div>
		
	   </div>
	   <div className="mt -ml-3">
	 
	   <PersonSharpIcon fontSize="large" className="cursor-pointer" onClick={()=>{setLogin(!login)}} />
	   </div>
	   <div className="mt cursor-pointer mr-3">
       <FavoriteBorderOutlinedIcon fontSize="large" />
	   </div>
	   <div className="mt cursor-pointer flex -ml-3 " onClick={()=>{setShowMenu(!showMenu)}}>
	   <ShoppingCartIcon fontSize="large"  />
	   <div className="-mt-2 -ml-1 text-white border bg-red-400 pl-1 pb-1 pr-1 rounded-xl font-bold h-6">
	   {data.length}
	   </div>
	  
	   </div>
	</div>
	
	<div className="borde flex justify-start ml-16 text-sm font-semibold " onClick={()=>{handleClickCart()}}>
    <div className="p-1 borde orange1 cursor-pointer">
		Furniture
	</div>
	<div className="p-1 ml-5 orange1">
	Sofas & Recliners

	</div>
	<div className="p-1 ml-5 orange1">
	Storage

	</div>
	<div className="p-1 ml-5 orange1">
	Beds

	</div>
	<div className="p-1 ml-5 orange1">
	Mattresses

	</div>
	<div className="p-1 ml-5 orange1">
	Furnishings

	</div>
	<div className="p-1 ml-5 orange1">
		 
Decor

	</div>
	<div className="p-1 ml-5 orange1">
	Lighting

	</div>
	<div className="p-1 ml-5 orange1">
		 
Appliances

	</div >
	<div className="p-1 ml-5 orange1">
		 
Modular
	</div>
	</div>

	{menu}
	{m}
	</>
   )
  }
  export {NavBar}
