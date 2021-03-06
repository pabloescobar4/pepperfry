import React ,{useState ,useEffect} from 'react'
import {useNavigate } from 'react-router'
import '../Style/Navbar.css'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import {removeCart} from '../redux/Cart/action'
import {useDispatch} from 'react-redux'
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const NavBar = () => {
	const [search,setSearch] = useState("")
	const [price,setPrice] = useState(0)
console.log(price)
const [open, setOpen] = React.useState(false);
    
const handleClick1 = () => {
	  setOpen(true);
	};
    
	const handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		return;
	  }
    
	  setOpen(false);
	};
     
	const dispatch = useDispatch();
const [s,setS] = useState(false)
	const remove = (id) => {
		console.log(id.id)
		dispatch(removeCart(id))
		
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
	  
	  const total = ( ) => {
		  let price = 0;
		  data.map((elm) => { 
			  price = elm.id.price + price
		  });
		  setPrice(price)
	  }

	useEffect (()=>{
		total();
	},[total])
     
	//   const totalsum = () => {
	// 	  const sum = 0
	// 	  console.log(data.reduce((a,b) => a.price + b.price ,sum))
	//   }
  

    

	  const [showMenu,setShowMenu] = useState(false)
      const [login,setLogin] = useState(false)
	  let m 
	  if(login){
		  m = <div>
			  <div className="fixed bg-white top-24 p-5  right-20 w-25 h-30 z-50 shadow " onMouseEnter={()=>{setLogin(!s)}} onMouseLeave={()=>{setLogin(s)}}>
			
             <div className= "h-1/2 w-full p-2 bg-blue-300 pl-16" onClick={()=>{setLogin(false)}}>
				 <button onClick={() =>{handleClicklogin()}} className=""> LOGIN/REGISTER</button>
             
               
			 </div>
			 <div className="text-sm h-1/2 -1/2 pt-3">
			 To access your account 
			 </div>
			 <div className="text-sm">
			 & manage orders
			 </div>
			  </div>
		  </div>
	  }
	  let menu
	  let menuMask
    
	  if(showMenu){
		  menu = 
		  <div className="fixed bg-white top-0 right-0 w-1/3 h-full z-50 shadow  div3">
			 
			  <div className="relative">
				<div className="border bg-black p-8 w-full h-1/6  flex justify-between fixed top-0 text-2xl text-white">
					<div>
					My Cart
					</div>
              
				  <div>
				  <ClearIcon onClick={()=>{setShowMenu(false)}} className="cursor-pointer"/>
				  </div>
				</div>
				 <div>
	
					 </div> 

					 <div className=" mt-36 mb-16">
						 {data.map((item) => {
							 return (
							 <div classname="w-full h-1/5 border border-green-100 bg-white  overflow-x-auto ">
                                 <div className=" border">

								
								 <div className="flex p-5 text-sm ">
								 <div className="w-2/5">
									 <img src={item.id.img[0]} alt="" className="tej" />
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
								 <div>
									
								 </div>
								 </div>
								 <div>
								   
								 </div>
								
								 </div>
								 </div>
                           


							 </div>

							 

						 )
						 })}
					 </div>
			  </div>
			  <div className="border pt-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white w-full h-24 fixed bottom-0 flex ">
                  
				  <div className=" p-4   text-2xl rounded-xl text-white">
                 
				  </div>

				  <div className="p-4  text-2xl rounded-xl space-x-24" >
				
      <div variant="outlined" onClick={handleClick1} className="text-white w-96 flex cursor-pointer borde pl-5 ">
	  <div className="flex w-full">
		  <div>
		  Total 
		  </div>
		  <div>
		  :???{price}
		  </div>
		  <div className="text-white w-1/4 bordr text-base  p-3 ml-10 hover:bg-gradient-to-bl rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 " onClick={()=>{setShowMenu(false)}} >
		  Proceed
		  </div>
		  </div>
		  <div>
		  
		  </div>
		  
		
    
      </div>
  
      
 
				  </div>

		

			  </div>
		  </div>
	  }

	
	 if(showMenu){
		 menuMask =
	 <div className="" >

	 <div className="bg-black-t-50 fixed top-0 left-0 w-2/3 h-full z-50" onClick={()=>{setShowMenu(false)} }>
     
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
			<input type="text" placeholder="Your door to happiness opens with a search" className=""  onChange={(e) => setSearch(e.target.value)} />
		</div>
		<div  className="borde flex   w-2/5   lg:pl-24 lg: md:ml-28 md: sm:ml-10 sm:">

		
		<div>
		<div className="cursor-pointer   " >
			<p id="nbicons">HELP</p>
		</div>
		
	   </div>
	 
	   <div className="mt ml-4 ">
	 
	   <PersonSharpIcon fontSize="large" className="cursor-pointer" onMouseLeave={()=>{setLogin(s)}} onMouseEnter={()=>{setLogin(!login)}} />
	   </div>
	   <div className="mt cursor-pointer ml-4">
       <FavoriteBorderOutlinedIcon fontSize="large" />
	   </div>
	   <div className="mt cursor-pointer flex ml-4 " onClick={()=>{setShowMenu(!showMenu)}}>
	   <ShoppingCartIcon fontSize="large"  />
	   <div className="-mt-2 -ml-1 text-white border bg-red-400 pl-1 pb-1 pr-1 rounded-xl font-bold h-6">
	   {data.length}
	   </div>
	   </div>
	   </div>
	</div>
	
	<div className="border Navbar3   ml-16 text-sm font-semibold space-x-5 " onClick={()=>{handleClickCart()}}>
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
	{menuMask}
	{m}
	<Stack spacing={2} sx={{ width: '100%' }}>
	</Stack>
	<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Your Order is Successful  !!
        </Alert>
      </Snackbar>

	
       
        
	</>

	
   )
  }
  export {NavBar}
