import { useEffect, useState } from 'react';
import React from 'react';
import { data } from '../data.json';
import './Images.css';

function Image(props) {
	//   const [data, setData] = useState([]);
	// 	const getData = () => {
	// 		fetch('data.json', {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Accept: 'application/json',
	// 			},
	// 		})
	// 			.then(function (response) {
	// 				console.log(response);
	// 				return response.json();
	// 			})
	// 			.then(function (myJson) {
	// 				console.log(myJson);
	// 				setData(myJson);
	// 			});
	// 	};
	// 	useEffect(() => {
	// 		getData();
	// 	}, []);

	return (
		<div>
			{/* {data.slice(0,6).map((img) => {
				return (
                    <div className='images__img' key={img._id}>
                        <img
						src={img.imageKey}>
					    </img>
                    </div>
					
				);
			})} */}
		</div>
	);
}

export default Image;
