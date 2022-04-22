import React from 'react';
import { MdFilterAlt } from 'react-icons/md';

function FilterBar(props) {
	return (
		<div className='app__filterbar'>
			<p>
				Filter by <MdFilterAlt />
			</p>
		</div>
	);
}

export default FilterBar;
