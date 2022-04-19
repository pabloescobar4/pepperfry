import {  useEffect } from 'react';
import React from 'react';
import '../App.css';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import {storeData } from '../redux/action'



const FetchApi = () => {
 // const [data, setData] = useState([]);

 
const dispatch = useDispatch()
 

 
  const fetchData = async () => {

    return axios({
      url: 'http://localhost:8000/furniture',
      method: 'GET',
      params: {
       
      
      },
    })
      
      .then((response) => {
 
        // const data =(response.data)
        
       // console.log(response.data)
        dispatch(storeData(response));
        
      })

      .catch((error) => {
    
      });
  };

  useEffect(() => {
    fetchData();
  
  }, []);

  const data = useSelector((state ) => state.data.data)
 console.log(data)
  return (
    <div>

     
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
     

    
    </div>
  );
};

export default FetchApi;
