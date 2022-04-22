import React from 'react';
import './RightSlide.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function RightSlide(props) {

	//PSUEDOCODE FOR FUNCTIONALITY
	// Create onclick handle function
	//On click of Right Arrow
		//Pull 3 Left side photos over to Right side of page
		//Introduce 3 new photos from API call (stored as state) to Left side of page
		//call onclick function inside Icon

	return (
		<div className='app__rightslide'>
			<div className='rightslide__icon'>
				<MdOutlineArrowForwardIos size='8em' color='darkgray' />
			</div>
		</div>
	);
}

export default RightSlide;
