import React from 'react';
import './LeftSlide.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';

function LeftSlide(props) {

	//PSUEDOCODE FOR FUNCTIONALITY
	// Create onclick handle function
		//On click of Left Arrow
			//Pull 3 Right side photos over to Left side of page
			//Introduce 3 new photos from API call (stored as state) to Right side of page
			//call onclick function inside Icon

	return (
		<div className='app__leftslide'>
			<div className='leftslide__icon'>
				<MdOutlineArrowBackIos size='8em' color='darkgray' />
			</div>
		</div>
	);
}

export default LeftSlide;
