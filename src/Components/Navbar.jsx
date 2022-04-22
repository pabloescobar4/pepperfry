import React ,{useState} from 'react'
import {useNavigate } from 'react-router'
import './Navbar.css'
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

	
	const navigate = useNavigate()
	function handleClick() {
		navigate('/home')
	  }
	  function handleClickCart() {
		navigate('/products')
	  }
	  const data = useSelector((state) => state.Cart.cart)
	  console.log(data)


	  const [showMenu,setShowMenu] = useState(false)
      
	  let menu
    
	  if(showMenu){
		  menu = 
		  <div className="fixed bg-white top-0 right-0 w-1/3 h-full z-50 shadow">
			 
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
			  <div className="border bg-green-400 w-full h-16 fixed bottom-0 flex ">
                  
				  <div className=" p-4   text-2xl rounded-xl text-white">
                  Total
				  </div>

				  <div className="p-4  text-2xl text-white rounded-xl ml-36">
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
	 
	   <PersonSharpIcon fontSize="large" className="cursor-pointer"/>
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
	
	<div className="Navbar3">
    
	</div>

	{menu}
	</>
   )
  }
  export {NavBar}
