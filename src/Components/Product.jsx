import { useState, useEffect } from 'react';
import React from 'react';
import '../Style/product.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/storeData/action';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

// import {useNavigate,useParams} from 'react-router';
import {Button ,ButtonGroup} from '@mui/material'
import {addCart} from '../redux/Cart/action'




const ProductPage = () => {
  // const [data, setData] = useState([]);

  const [search,setSearch] = useState("")
  const [value,setValue] = useState([])
	//console.log(search)
  const [val,setVal] = useState("")
// const params = useParams()
// const navigate = useNavigate()

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    return axios({
      url: `https://pepperfrydb1.herokuapp.com/furniture?_page=${page}&_limit=30`,
      method: 'GET',
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        // console.log(response.data)
        dispatch(storeData(response.data));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [page]);




  const data = useSelector((state) => state.Data.data);
  
  const CartData = useSelector((state) => state.Cart.cart);
  console.log(CartData);


  const Send = (e) => {
   // console.log(e)
  dispatch(addCart(e))
  
  }
  const sortBylow =(m) => {
    if(m==="l"){
     let res = data.sort((a,b) => a.price - b.price)
     setValue([...res])
     //console.log(res)
    }else if( m==="h"){
      let res = data.sort((a,b) => b.price - a.price)
      setValue([...res])
      //console.log(res)
    }
    
    }
  
 
  // const filterByPrice1 = () => {
 
  //     let productPrice = data.filter((p) =>  p.price >=50000)
  //     console.log(productPrice)
  //     setValue([...productPrice])
     
    
  
  // }
  
  //console.log(setVal)

  
  return (
    <div>
  <div>
       <input type="text"placeholder="What are you loooking for" className="search" onChange={(e) => setSearch(e.target.value)} />
        </div>

    
      
{/* 
        <div>
          products is {params.id}
        </div> */}


       
  
      

    <div className="flex">
       <div >
       <Box
      sx={{
        display: 'flex',
       
        '& > *': {
          m: 2,
        },
      }}
 >
     
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
    
      >

<button onClick= {() => {sortBylow("l")}} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Low To High</button>
<button onClick= {() => {sortBylow("h")}} type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">High to low</button>
<button onClick={() => {setVal("sofas")}} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sofas</button>
<button  onClick={() => {setVal("Settee")}} type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Settee</button>
<button onClick={() => {setVal("Chair")}} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Chair</button>
  
      </ButtonGroup>
  
    </Box>
       </div>
      <div className="container " >
      
    
   
        {data
        .filter((el) => {
          
          if(el.category === val){
            return el.category ===val
          }else if(val === ""){
              return el
          }
       })
        .filter((a) => {
          if(search === ""){
            return a
          }else{
            return a.name.toLowerCase().includes(search.toLowerCase())  || a.madeBy.toLowerCase().includes(search.toLowerCase())  
          }
          
        })
        
        
        .map((a) => {
          return (
            <>
              <div className="border border-gray-300 w-80 shadow-lg shadow-blue-500/50 p-4" key={a.id}>
                <div className="   h-full ">
                  <div >
                    <img src={a.img[0]} alt="" id="img" />
                  </div>
                  <div className="b  w-3/5 text-white mt-2">
                    <div>

                    <button className="relative inline-flex items-center justify-center p-2.5 mb-1 mr-1 overflow-hidden text-sm font-medium text-white rounded-lg group bg-white  focus:ring-1 bg-gradient-to-br from-green-500 to-blue-700 group-hover:from-green-400 group-hover:to-blue-600 hover:text-gray-200  focus-ring-1 focus:outline-none focus:ring-blue-200 dark:focus:ring-green-800  " onClick={() => {Send(a)}}>

  Add to cart
  
</button>
                      {/* <button className="bg-blue-500 shadow-lg rounded-2xl p-2 mt-2 hover:bg-blue-600 shadow-blue-500/50  "  >
                      
                      </button> */}
                    </div>
          
                  </div>
                  
                  <div className=" mt-1 mb-2  ">
                   
                      <div className="text-md font-semi-bold borde w-72 ">
                        {a.name}
                      </div>

                      <div className="text-sm mb-5">
                        <p>{a.madeBy}</p>
                      </div>
                   
                    <div className="  ">
                     <div className="flex w-48">
                     
                      <div className="text-red-400 font-bold ">
                        <p>₹ {a.offer_price}</p>
                      </div>
                      <div className="text-gray-500 ml-5 ">
                        <p> <del>₹{a.actual_price}</del></p>
                      </div>
                     </div>
                     
                      <div className="text-gray-500 mt-2 d2">
                        <p>Save ₹ {a.total_savings}</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>

      <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>

    </div>
  );
};

export { ProductPage};
