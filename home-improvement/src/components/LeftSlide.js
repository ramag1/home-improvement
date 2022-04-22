import React from 'react';
import './LeftSlide.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';

function LeftSlide(props) {
	return (
		<div className='app__leftslide'>
			<div className='leftslide__icon'>
				<MdOutlineArrowBackIos size='10em' color='lightgray' />
			</div>
		</div>
	);
}

export default LeftSlide;
