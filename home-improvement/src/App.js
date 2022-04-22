import React from 'react';
import FilterBar from '../src/components/FilterBar';
import Header from '../src/components/Header';
import Images from '../src/components/Images';
import LeftSlide from '../src/components/LeftSlide';
import RightSlide from '../src/components/RightSlide';
import './App.css';

function App(props) {
	return (
		<div className='app__container'>
			<Header />
			<FilterBar />
			<LeftSlide />
			<Images />
			<RightSlide />
		</div>
	);
}

export default App;
