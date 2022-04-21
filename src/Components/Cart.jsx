import React from 'react'
import {useSelector} from 'react-redux'

export const Cart = () => {
  const data = useSelector((state) => state);
  console.log(data);

  return(
	<div><h1>
		Cart</h1></div>
   )
  }
