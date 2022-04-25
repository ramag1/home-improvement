import React, { useState } from 'react';
import { MdFilterAlt } from 'react-icons/md';
import './FilterBar.css';
import FilterModal from './FilterModal';

function FilterBar() {

	const [open, setOpen] = useState(false);

	function handleToggle () {
		setOpen(!open)
	}



	return (
		<div className='app__filterbar'>
			<button onClick={handleToggle}>Filter by <MdFilterAlt  /></button>
			<div>{open ? <FilterModal /> : null }</div>
		</div>
	)
}
export default FilterBar;