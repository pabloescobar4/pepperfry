import React from 'react'
import {useSelector} from 'react-redux'

export const Cart = () => {
  const data1 = useSelector((state) => state.Cart);
  console.log(data1);

  return(
	<div>
    <div className="w-full h-96 border ">
      
    </div>
  </div>
   )
  }
