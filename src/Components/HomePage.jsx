import React from 'react'
import './home.css'
import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
  import ImageList from '@mui/material/ImageList';
  import ImageListItem from '@mui/material/ImageListItem';
  
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
	);
  }
  
  const itemData = [
	{
	  img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_22042022.jpg',
	  title: 'Study Table',
	  rows: 0,
	  cols: 0,
	},
	{
	  img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_22042022.jpg',
	  title: '',
	},
	{
	  img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_22042022.jpg',
	  title: 'Camera',
	},
	{
	  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
	  title: 'Coffee',
	  cols: 0,
	},
	{
	  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
	  title: 'Hats',
	  cols:3
	},
	{
	  img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_22042022.jpg',
	  title: 'Honey',
	  author: '@arwinneil',
	},
	{
	  img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_22042022.jpg',
	  title: 'Basketball',
	},
	{
	  img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_22042022.jpg',
	  title: 'Fern',
	},
	{
	  img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_22042022.jpg',
	  title: 'Mushrooms',
	  rows: 2,
	  cols: 2,
	},
	{
	  img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_22042022.jpg',
	  title: 'Tomato basil',
	},
	{
	  img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_22042022.jpg',
	  title: 'Sea star',
	},
	{
	  img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_22042022.jpg',
	  title: 'Bike',
	  cols: 2,
	},
	{
		img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_22042022.jpg',
		title: 'Bike',
		cols: 2,
	},
	{
		img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_22042022.jpg',
		title: 'Study Table',
		rows: 0,
		cols: 0,
	  },
	  {
		img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_22042022.jpg',
		title: '',
	  },
	  {
		img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_22042022.jpg',
		title: 'Camera',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		cols: 0,
	  },
	  {
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		cols:3
	  },
	  {
		img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_22042022.jpg',
		title: 'Honey',
		author: '@arwinneil',
	  },
	  {
		img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_22042022.jpg',
		title: 'Basketball',
	  },
	  {
		img: 'https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_22042022.jpg',
		title: 'Fern',
	  },
	  {
		img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_22042022.jpg',
		title: 'Mushrooms',
		rows: 2,
		cols: 2,
	  },
	  {
		img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_22042022.jpg',
		title: 'Tomato basil',
	  },
	  {
		img: 'https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_22042022.jpg',
		title: 'Sea star',
	  },
	  {
		img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_22042022.jpg',
		title: 'Bike',
		cols: 2,
	  },
	  {
		  img: 'https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_22042022.jpg',
		  title: 'Bike',
		  cols: 2,
	  }
  ];
  