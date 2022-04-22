import React from 'react'
import './home.css'
import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'

export const HomePage = (data) => {
	//const navigate = UseNavigate()
	const data1 = useSelector((state) => state.data.data);
	console.log(data1);
   
  return(
	<div>

		
		<h1>
		HomePage
			</h1>
	</div>
   )
  }
