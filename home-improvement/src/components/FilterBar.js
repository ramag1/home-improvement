import React from 'react';
import { MdFilterAlt } from 'react-icons/md';
import './FilterBar.css'

function FilterBar(props) {
	return (
		<div className='app__filterbar'>
			<div>
				<label className='filterbar__stylelabel'>
					Filter by <MdFilterAlt size='1.5em'/>
					<select className='filterbar__styleselect'>
						<option value='fruit'>Style</option>
						<option value='vegetable'>Contemporary</option>
						<option value='meat'>Quality</option>
						<option value='vegetable'>Country</option>
						<option value='meat'>Craftsman</option>
						<option value='vegetable'>Industrial</option>
						<option value='meat'>Modern</option>
					</select>
				</label>
				<label className='filterbar__qualitylabel'>
					<select className='filterbar__qualityselect'>
						<option value='fruit'>Quality</option>
						<option value='vegetable'>5 Stars</option>
						<option value='meat'>4 Stars</option>
						<option value='vegetable'>3 Stars</option>
						<option value='meat'>2 Stars</option>
						<option value='vegetable'>1 Star</option>
					</select>
				</label>
			</div>
		</div>
	);
}

export default FilterBar;
