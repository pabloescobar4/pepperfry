import { useState, useEffect } from 'react';
import React from 'react';
import './product.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/action';
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
  const [val,setVal] = useState([])
const params = useParams()
const navigate = useNavigate()
const [category,setCategory] = useState("")
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    return axios({
      url: `http://localhost:8000/furniture?_page=${page}`,
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
  
 
  const filterByPrice1 = () => {
 
      let productPrice = data.filter((p) =>  p.price >=50000)
      setValue([...productPrice])
     
    
  
  }
  
  

  
  return (
    <div>

<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button onClick= {() => {sortBylow("l")}}>Low To High</Button>
  <Button onClick= {() => {sortBylow("h")}}>high to low</Button>
  <Button onClick= {() => {filterByPrice1()}}>Three</Button>
</ButtonGroup>
      {/* <h1 >
        Low to High
      </h1>
      <h1 >
       High to low
      </h1> */}
       <div>
       <input type="text"placeholder="What are you loooking for" className="search" onChange={(e) => setSearch(e.target.value)} />
        </div>
{/* 
        <div>
          products is {params.id}
        </div> */}
      <div className="container ">
       
     
        {data
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
              <div>
                <div className="one  p-5 rounded-xl h-full ">
                  <div >
                    <img src={a.img[0]} alt="" id="img" />
                  </div>

                  <div className=" mt-1 mb-2  ">
                    <div className="d1">
                      <div className="text-lg font-semi-bold ">
                        <p>{a.name}</p>
                      </div>

                      <div className="d1 mb-5">
                        <p>{a.madeBy}</p>
                      </div>
                    </div>
                    <div className="  d2">
                      <div className="bg-green-700 w-10 rounded-md text-white pl-2 font-bold ">
                        <p>{a.rating}</p>
                      </div>
                      <div className="text-gray-500 mt-2 d2">
                        <p>₹ {a.actual_price}</p>
                      </div>
                      <div className="text-gray-500 mt-2 d2">
                        <p>₹ {a.offer_price}</p>
                      </div>
                      <div className="text-gray-500 mt-2 d2">
                        <p>Save ₹ {a.total_savings}</p>
                      </div>
                      <div className="text-gray-500 mt-2 d2">
                        <p>Save ₹ {a.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
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
