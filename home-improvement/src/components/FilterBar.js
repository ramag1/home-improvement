import React , {useState} from 'react';
import { MdFilterAlt } from 'react-icons/md';
import './FilterBar.css'

function FilterBar(props) {

	// Filter Functionality Pseudocode:
	// 	Create state to track filter selections
	// 	Create handler function to set state upon filter selection
	// 	Apply state parameters to image results
	// 	Render selected filters in filter bar 

	return (
		<div className='app__filterbar'>
			<div>
				<label className='filterbar__stylelabel'>
					Filter by <MdFilterAlt size='1.5em' />
					<select className='filterbar__styleselect'>
						<option value='style'>Style</option>
						<option value='contemp'>Contemporary</option>
						<option value='country'>Country</option>
						<option value='craftsman'>Craftsman</option>
						<option value='industrial'>Industrial</option>
						<option value='modern'>Modern</option>
					</select>
				</label>
				<label className='filterbar__qualitylabel'>
					<select className='filterbar__qualityselect'>
						<option value='quality'>Quality</option>
						<option value='fivestars'>5 Stars</option>
						<option value='fourstars'>4 Stars</option>
						<option value='3stars'>3 Stars</option>
						<option value='2stars'>2 Stars</option>
						<option value='1star'>1 Star</option>
					</select>
				</label>
			</div>
		</div>
	);
}

export default FilterBar;
