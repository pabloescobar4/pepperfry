import { useState, useEffect } from 'react';
import React from 'react';
import './product.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/storeData/action';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import {Search }from './Search.jsx'
import {useNavigate,useParams} from 'react-router';
import {Button ,ButtonGroup} from '@mui/material'




const ProductPage = () => {
  // const [data, setData] = useState([]);

  const [search,setSearch] = useState("")
  const [value,setValue] = useState([])
	//console.log(search)
  const [val,setVal] = useState("")
const params = useParams()
const navigate = useNavigate()
const [category,setCategory] = useState("")
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    return axios({
      url: `http://localhost:8000/furniture?_page=${page}&_limit=30`,
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


  const data = useSelector((state) => state.data);
  console.log(data);

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
   <div className=""> 
  <Button className="mt-5 w-48" onClick= {() => {sortBylow("l")}}>Low To High</Button>
  </div>
  <div className="mt-5">
  <Button className="mt-5 w-48" onClick= {() => {sortBylow("h")}}>high to low</Button>
  </div>
  <div className="mt-5">
 
  <Button className="mt-5 w-48" onClick={() => {setVal("sofas")}} >Sofas </Button>
  </div>
  <div className="mt-5">
  <Button className="mt-5 w-48"onClick={() => {setVal("Chair")}} >Chair</Button>
  </div>
  <div className="mt-5">
  <Button className="mt-5 w-48" onClick={() => {setVal("Settee")}} >Settee</Button>
  </div>
<div className="mt-5"> 
<Button className="mt-5 w-48" onClick={() => {setVal("Armchair")}} >ArmChair</Button>
</div>
      </ButtonGroup>
  
    </Box>
       </div>
      
      <div className="container ">
    
   
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
              <div className="borde w-80 ">
                <div className="   h-full ">
                  <div >
                    <img src={a.img[0]} alt="" id="img" />
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
