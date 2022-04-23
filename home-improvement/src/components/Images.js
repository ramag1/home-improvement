import React from 'react';
import './Images.css';
import Image from './Image'
import data from '../data.json';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai'

function Images(props) {
	return (
		<div className='app__images'>
			<div className='images__container'>
				{/* images are being mapped over
				can select number of items to show, but working on assigning to specific grid areas */}
				{/* {data.data.slice(0,1).map((img) => {
					console.log(img.imageKey)
					return <img key={img._id} 
					src={img.imageKey}></img>;
				})} */}

				{/* add onclick handler to heart icon to switch from outline to full
				add id to favorites for tracking */}

				<div className='images__img1'>
					<AiOutlineHeart className='icon' size='1.5em' color='white' />
				</div>
				<div className='images__img2'>
					<AiOutlineHeart className='icon' size='1.5em' color='white' />
				</div>
				<div className='images__img3'>
					<AiOutlineHeart className='icon' size='1.5em' color='white' />
				</div>
				<div className='images__img4'>
					<AiOutlineHeart className='icon' size='1.5em' color='white' />
				</div>
				<div className='images__img5'>
					<AiOutlineHeart className='icon' size='1.5em' color='white' />
				</div>
				<div className='images__img6'>
					<AiFillHeart className='icon' size='1.5em' color='red' />
				</div>
				<div className='images__border'></div>
			</div>
		</div>
	);
}

export default Images;
