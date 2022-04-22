import React from 'react'
import '../Style/home.css'
import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
  import ImageList from '@mui/material/ImageList';
  import ImageListItem from '@mui/material/ImageListItem';
  import Slideshow from './Slideshow'
  import itemData from '../Style/img'
  function srcset(image, size, rows = 1, cols = 1) {
	return {
	  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
	  srcSet: `${image}?w=${size * cols}&h=${
		size * rows
	  }&fit=crop&auto=format&dpr=2 2x`,
	};
  }
  
  export  function HomePage() {
	return (

		<>
		<Slideshow />
		<div className="w-4/5 ml-28">
			<img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_21042022.jpg" alt="" />
		</div>
		<div className="w-full h-full p-28">

		
	  <ImageList
		sx={{ width: 'full', height: 'full'  }}
		variant="quilted"
		cols={4}
		
		rowHeight={400}
		gap={12}
	  >
		{itemData.map((item) => (
		  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
			<img
			  {...srcset(item.img, 121, item.rows, item.cols)}
			  alt={item.title}
			  loading="lazy"
			/>
			<div>
			<h1 className="ml-5 -mt-5 text-white">{}</h1>
			</div>
			
		  </ImageListItem>
		))}
	  </ImageList>
	  </div>
	  </>
	);
  }

  
 
  