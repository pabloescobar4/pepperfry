import React ,{useEffect, useState} from "react";
import axios from "axios";

function Fetch() {
const [items,setItems] = useState([])


  useEffect(() => {
    axios
      .get(' http://localhost:8000/furniture')
      .then((response) => {
		  const data1 = response.data.sofas
        //console.log(data1);
        setItems(response.data1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

	return ( 
		<div>
        <h1>{items.map((a) => {
			return(
          <h1>{a.name}</h1>
			)
				
			
		})}</h1> 
		</div>
	 );
}

export default Fetch;