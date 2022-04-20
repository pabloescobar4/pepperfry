import { useState, useEffect } from 'react';
import React from 'react';
import '../App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/action';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import {Search }from './Search.jsx'





const ProductPage = () => {
  // const [data, setData] = useState([]);

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
  return (
    <div>
       <div>
        <Search />
        </div>
      <div className="container ">
       
     
        {data.map((a) => {
          return (
            <>
              <div>
                <div className="one  p-5 rounded-xl h-full ">
                  <div classname="img">
                    <img src={a.img[0]} alt="" />
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Box py={3} display="flex" justifyContent="center">
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
