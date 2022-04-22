import React from 'react';
import './RightSlide.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function RightSlide(props) {
	return (
		<div className='app__rightslide'>
			<div className='rightslide__icon'>
				<MdOutlineArrowForwardIos size='10em' color='lightgray' />
			</div>
		</div>
	);
}

export default RightSlide;
