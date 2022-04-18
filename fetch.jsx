import React ,{useEffect, useState} from "react";
import axios from "axios";

function Fetch() {
const [data,setData] = useState([])
useEffect (() =>{


		axios.get('http://localhost:8000/furniture')
		.then(response => {
			console.log(response.data)
			//setData(response.data)
		})
		.catch((error) =>{
			console.log(error)
		})
	},[])
	return ( 
		<div>
         <div>{
        //    data.map((d) =>{
        //  return(
		// 	 <h1>{d.beds}</h1>
		//  )
		//    })
		}
		 </div>
		</div>
	 );
}

export default Fetch;