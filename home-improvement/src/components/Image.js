import { useEffect, useState } from 'react';
import React from 'react';
import data from '../data.json';
import './Images.css';

function Image(props) {

	// Fetch API below in the event we wanted to call from local json data

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
			
			{/* imported JSON data */}

			{data.data.map((img) => {
				return <img key={img._id} src={img.imageKey}></img>;
			})}
		</div>
	);
}

export default Image;
