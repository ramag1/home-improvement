import React, { useState, useRef, useEffect } from "react";
import "./FilterModal.css";
import data from '../data.json';

 
function FilterModal() {

    const [styleFilter, setStyleFilter] = useState(data.data);
    const [qualityFilter, setQualityFilter] = useState(data.data);
 
    return (
			<div className="filtermodal__container">
				<form className='filtermodal__styleform'>
					<label htmlFor='styles'>Styles:</label>
					<select className='filtermodal__stylesdropdown' id='styles'>
						{data.designStyle.map((style) => {
							return <option key={style.id}>{style.label}</option>;
						})}
					</select>
				</form>
				<form className='filtermodal__qualityform'>
					<label htmlFor='search-quality'>Quality:</label>
					<select className='filtermodal__qualitydropdown' id='search-quality'>
						{data.qualityStandard.map((stars) => {
							return <option key={stars.id}>{stars.label}</option>;
						})}
					</select>
				</form>
			</div>
		);

}

export default FilterModal;